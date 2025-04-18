const { Evenement, Participation } = require('../models'); // Importation du modèle User
const { Op } = require("sequelize");
const User = require('../models').User;

const eventService = {
    // CREATE: Créer un nouvel événement
    async createEvent(userId, data) {
        try {
            // Créer l'événement
            const newEvent = await Evenement.create({
                ...data,
                id_user: userId,
                etat: 'ouvert',
            });
            
            // Créer automatiquement une participation pour l'organisateur
            await Participation.create({
                id_user: userId,
                id_evenement: newEvent.id_evenement,
                date_participation: new Date(), // L'organisateur est automatiquement confirmé
            });
            
            return newEvent;
        } catch (error) {
            throw new Error(`Erreur lors de la création de l'événement: ${error.message}`);
        }
    },    
    // READ: Récupérer tous les événements
    async getAllEvents(userId) {
        try {

            const participations = await Participation.findAll({
                where: { id_user: userId },
                attributes: ['id_evenement']
            });
    
            const eventIdsUserParticipates = participations.map(p => p.id_evenement);
    
            const today = new Date();
            today.setHours(0, 0, 0, 0);
            
            const events = await Evenement.findAll({
                where: {
                    [Op.and]: [
                        {
                            id_evenement: {
                                [Op.notIn]: eventIdsUserParticipates
                            }
                        },
                        {
                            id_user: {
                                [Op.ne]: userId
                            }
                        },
                        {
                            date_debut: {
                                [Op.gte]: today
                            }
                        }
                    ]
                },
                include: [{
                    model: User,
                    as: 'organisateur',
                    attributes: ['pseudo']
                }],
                raw: true,
                nest: true
            });
            
            const formattedEvents = events.map(event => ({
                ...event,
                organisateur: event.organisateur ? event.organisateur.pseudo : 'Inconnu'
            }));
            
            return formattedEvents;
        } catch (error) {
            throw new Error(`Erreur lors de la récupération des événements non encore rejoints : ${error.message}`);
        }
    },    

    async getEventById(id) {
        try {
            const event = await Evenement.findByPk(id);
            if (!event) throw new Error("Evénement non trouvé");
                return event;
        } catch (error) {
            throw new Error(`Erreur lors de la récupération de l'événement: ${error.message}`);
        }
    },

    // UPDATE: Mettre à jour un événement par ID
    async updateEvent(id, data) {
        try {
            const event = await Evenement.findByPk(id);
            if (!event) throw new Error("Evénement non trouvé");
                await event.update(data);
                return event;
        } catch (error) {
            throw new Error(`Erreur lors de la mise à jour de l'événement: ${error.message}`);
        }
    },

    // DELETE: Supprimer un événement par ID
    async deleteEvent(id) {
        try {
        const event = await Evenement.findByPk(id);
        if (!event) throw new Error("Evénement non trouvé");
            await event.destroy();
            return { message: "Evénement supprimé avec succès" };
        } catch (error) {
            throw new Error(`Erreur lors de la suppression de l'événement: ${error.message}`);
        }
    },

    async getEventsByPosition(position) {
        try {
            const events = await Evenement.findAll({
                where: {
                    localisation: {
                        [Op.like]: `%${position}%`
                    }
                },
                include: [{
                    model: User,
                    as: 'organisateur',
                    attributes: ['pseudo']
                }],
                raw: true,
                nest: true
            });
            
            const formattedEvents = events.map(event => ({
                ...event,
                organisateur: event.organisateur ? event.organisateur.pseudo : 'Inconnu'
            }));
            
            return formattedEvents;
        } catch (error) {
            throw new Error(`Erreur lors de la récupération des événements par position: ${error.message}`);
        }
    }
};

module.exports = eventService;