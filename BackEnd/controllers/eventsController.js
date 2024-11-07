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

module.exports = {
    getAllEvents
};