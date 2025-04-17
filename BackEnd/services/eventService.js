const { Evenement } = require('../models'); // Importation du modèle User

const eventService = {
    // CREATE: Créer un nouvel événement
    async createEvent(userId, data) {
        try {
            const newEvent = await Evenement.create({
                ...data,
                id_user: userId,
                etat: 'ouvert',
            });
            return newEvent;
        } catch (error) {
            throw new Error(`Erreur lors de la création de l'événement: ${error.message}`);
        }
    },    
    
    // READ: Récupérer tous les événements
    async getAllEvents() {
        try {
            const events = await Evenement.findAll();
            return events;
        } catch (error) {
            throw new Error(`Erreur lors de la récupération des événements: ${error}`);
        }
    },

    // READ: Récupérer un événement par ID
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
};

module.exports = eventService;