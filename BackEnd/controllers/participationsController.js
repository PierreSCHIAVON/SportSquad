const participationService = require('../services/participationsService');

// Fonction pour créer une participation avec un ID utilisateur
async function createParticipationWithUserId(req, res) {
    try {
        const { userId } = req.params;
        const participation = await participationService.createParticipationWithUserId(userId, req.body);
        res.status(201).json(participation);
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
}

// Fonction pour récupérer toutes les participations
async function getAllParticipations(req, res) {
    try {
        const participations = await participationService.getAllParticipations();
        res.status(200).json(participations);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
}

// Fonction pour récupérer une participation par ID
async function getParticipationById(req, res) {
    try {
        const id  = req.user.id;
        const participation = await participationService.getParticipationById(id);

        if (!participation) {
            return res.status(404).json({ error: "Participation non trouvée" });
        }

        res.status(200).json(participation);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
}

// Fonction pour récupérer les participations d'un utilisateur par ID utilisateur
async function getOldParticipationsByUserId(req, res) {
    try {
        const userId = req.user.id;
        const participations = await participationService.getOldParticipationsByUserId(userId);

        res.status(200).json(participations);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
}

async function getFutureParticipationsByUserId(req, res) {
    try {
        const userId = req.user.id;
        const participations = await participationService.getFutureParticipationsByUserId(userId);

        res.status(200).json(participations);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
}

// Fonction pour mettre à jour une participation
async function updateParticipation(req, res) {
    try {
        const { id } = req.params;
        const participation = await participationService.updateParticipation(id, req.body);

        if (!participation) {
            return res.status(404).json({ error: "Participation non trouvée" });
        }

        res.status(200).json(participation);
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
}

// Fonction pour supprimer une participation
async function deleteParticipation(req, res) {
    try {
        const { id } = req.params;
        const result = await participationService.deleteParticipation(id);

        if (result.message === "Participation non trouvée") {
            return res.status(404).json({ error: result.message });
        }

        res.status(200).json(result);
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
}

module.exports = {
    createParticipationWithUserId,
    getAllParticipations,
    getParticipationById,
    getOldParticipationsByUserId,
    updateParticipation,
    deleteParticipation,
    getFutureParticipationsByUserId,
};
