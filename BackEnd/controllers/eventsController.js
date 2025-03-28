const eventService = require('../services/eventService');

// Function to get all events
async function getAllEvents(req, res) {
    try {
        const events = await eventService.getAllEvents();
        res.status(200).json(events);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
}

async function getEventById(req, res) {
    try {
        const { id } = req.params;
        const event = await eventService.getEventById(id);

        if (!event) {
            return res.status(404).json({ error: "Événement non trouvé" });
        }

        res.status(200).json(event);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
}

module.exports = {
    getAllEvents,
    getEventById
};
