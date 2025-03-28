const { Notes } = require('../models'); // Importation du modèle Note

const noteService = {
    // CREATE: Créer une note
    async createNote(data) {
        try {
            const newNote = await Notes.create(data);
            return newNote;
        } catch (error) {
            throw new Error(`Erreur lors de la création de la note: ${error.message}`);
        }
    },

    // READ: Récupérer une note par ID
    async getNoteById(id_notes) {
        try {
            const Note = await Notes.findByPk(id_notes);
            if (!Note) throw new Error("Note non trouvé");
                return Note;
        } catch (error) {
            throw new Error(`Erreur lors de la récupération de la note: ${error.message}`);
        }
    },

    // READ: Récupérer tous les notes recu par userID
    async getNoteRecuByUser(destinataire_id) {
        try {
            const Note = Notes.findAll({
                where: { destinataire_id }
            });
            if (!Note) throw new Error("note non trouvé");
                return Note;
        } catch (error) {
            throw new Error(`Erreur lors de la récupération de la note: ${error.message}`);
        }
    },

    // READ: Récupérer tous les notes envoyer par userID
    async getNoteSendByUser(expediteur_id) {
        try {
            const Note = Notes.findAll({
                where: { expediteur_id }
            });
            if (!Note) throw new Error("note non trouvé");
                return Note;
        } catch (error) {
            throw new Error(`Erreur lors de la récupération de la note: ${error.message}`);
        }
    },

    // UPDATE: Mettre à jour un note par ID
    async updateNote(id_notes, data) {
        try {
            const Note = await Notes.findByPk(id_notes);
            if (!Note) throw new Error("note non trouvé");
                await Notes.update(data);
                return Note;
        } catch (error) {
            throw new Error(`Erreur lors de la mise à jour de la note: ${error.message}`);
        }
    },

    // DELETE: Supprimer un note par ID
    async deleteNote(id_notes) {
        try {
        const Note = await Notes.findByPk(id_notes);
        if (!Note) throw new Error("note non trouvé");
            await Notes.destroy();
            return { message: "note supprimé avec succès" };
        } catch (error) {
            throw new Error(`Erreur lors de la suppression de la note: ${error.message}`);
        }
    },
};

module.exports = noteService;
