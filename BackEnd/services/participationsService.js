const { Participation, Evenement } = require('../models'); // Importation du modèle Participation
const { Op } = require("sequelize");
const participationService = {

    // CREATE: Créer une participation avec un ID utilisateur
    async createParticipationWithUserId(userId, eventData) {
        try {
            // Assurez-vous que `date_participation` est bien formatée comme une date
            return await Participation.create({
                id_user: userId,
                id_evenement: eventData.id_evenement, // L'ID de l'événement est récupéré de l'événement actuel dans le front-end
                date_participation: eventData.date_participation, // Date de participation (celle de l'événement)
                created_at: new Date(), // Date actuelle avec timezone pour `created_at`
                updated_at: new Date(), // Date actuelle avec timezone pour `updated_at`
            });
        } catch (error) {
            throw new Error(`Erreur lors de l'ajout de la participation avec user ID: ${error.message}`);
        }
    },

    // READ: Récupérer toutes les participations
    async getAllParticipations() {
        try {
            const participations = await Participation.findAll();
            return participations;
        } catch (error) {
            throw new Error(`Erreur lors de la récupération des participations: ${error.message}`);
        }
    },

    // READ: Récupérer une participation par ID
    async getParticipationById(id) {
        try {
            const participation = await Participation.findByPk(id);
            if (!participation) throw new Error("Participation non trouvée");
            return participation;
        } catch (error) {
            throw new Error(`Erreur lors de la récupération de la participation: ${error.message}`);
        }
    },

    // READ: Récupérer les participations d'un utilisateur par ID utilisateur
    async getOldParticipationsByUserId(userId) {
        try {
            const participations = await Participation.findAll({ where: { id_user: userId }, include: [
                {
                    model: Evenement,
                    as: 'evenement',
                    where: {
                        date_fin: {
                            [Op.lt]: new Date(),
                        },
                    },
                }
            ] });
            return participations;
        } catch (error) {
            throw new Error(`Erreur lors de la récupération des participations de l'utilisateur: ${error.message}`);
        }
    },

    async getFutureParticipationsByUserId(userId) {
        try {
            const participations = await Participation.findAll({ where: { id_user: userId }, include: [
                {
                    model: Evenement,
                    as: 'evenement',
                    where: {
                        date_fin: {
                            [Op.gt]: new Date(),
                        },
                    },
                }
            ] });
            return participations;
        } catch (error) {
            throw new Error(`Erreur lors de la récupération des participations de l'utilisateur: ${error.message}`);
        }
    },

    // UPDATE: Mettre à jour une participation
    async updateParticipation(id, data) {
        try {
            const participation = await Participation.findByPk(id);
            if (!participation) throw new Error("Participation non trouvée");
            await participation.update(data);
            return participation;
        } catch (error) {
            throw new Error(`Erreur lors de la mise à jour de la participation: ${error.message}`);
        }
    },

    // DELETE: Supprimer une participation
    async deleteParticipation(id) {
        try {
            const participation = await Participation.findByPk(id);
            if (!participation) throw new Error("Participation non trouvée");
            await participation.destroy();
            return { message: "Participation supprimée avec succès" };
        } catch (error) {
            throw new Error(`Erreur lors de la suppression de la participation: ${error.message}`);
        }
    },
};

module.exports = participationService;
