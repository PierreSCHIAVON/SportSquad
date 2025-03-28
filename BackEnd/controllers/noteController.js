const noteService = require('../services/noteService');

async function getNoteById(req, res) {
  try {
    const notes = await noteService.getNoteById(req.params.id);
    res.status(200).json(notes);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
}

async function getNoteRecuByUser(destinataire_id){
    try {
        const Note = await noteService.getNoteRecuByUser(req.params.destinataire_id);
        res.status(201).json(Note);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
}
async function getNoteSendByUser(req, res){
    try {
        const Note = await noteService.getNoteSendByUser(req.params.expediteur_id);
        res.status(201).json(Note);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
}

async function createNote(req, res) {
  try {
      const newNote = await noteService.createNote(req.body);
      res.status(201).json(newNote);
  } catch (error) {
      res.status(500).json({ error: error.message });
  }
}

async function updateNote(req, res) {
  try {
      const updateNote = await noteService.updateNote(req.params.id,req.body);
      res.status(201).json(updateNote);
  } catch (error) {
      res.status(500).json({ error: error.message });
  }
}

module.exports = {
    getNoteById,
    getNoteSendByUser,
    getNoteRecuByUser,
    createNote,
    updateNote
};