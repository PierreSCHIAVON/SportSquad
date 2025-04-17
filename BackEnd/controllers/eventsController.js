const eventService = require('../services/eventService');
const axios = require('axios');

// Function to get all events
async function getAllEvents(req, res) {
    try {
        const userId = req.user.id; 
        const events = await eventService.getAllEvents(userId);
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

async function createEvent(req, res) {
    try {
        const eventData = req.body;
        const userId = req.user.id;
        const newEvent = await eventService.createEvent(userId, eventData);
        res.status(201).json(newEvent);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
}

async function getEventsByPosition(req, res) {
    try {
        const position = req.query.position;
        const events = await eventService.getEventsByPosition(position);
        
        // Array to store events with coordinates
        const eventsWithCoords = [];
        
        // Process each event to get coordinates
        for (const event of events) {
            try {
                const geocodeResponse = await axios.get('https://nominatim.openstreetmap.org/search', {
                    params: {
                        q: event.localisation,
                        format: 'json',
                        limit: 1
                    },
                    headers: {
                        'User-Agent': 'SportsSquadApp/1.0'
                    }
                });
                
                if (geocodeResponse.data && geocodeResponse.data.length > 0) {
                    const { lat, lon } = geocodeResponse.data[0];
                    eventsWithCoords.push({
                        ...event._doc || event,
                        coords: { lat, lon }
                    });
                } else {
                    eventsWithCoords.push({
                        ...event._doc || event,
                        coords: null
                    });
                }
            } catch (error) {
                console.error(`Error fetching coordinates for event ${event._id}: ${error.message}`);
                eventsWithCoords.push({
                    ...event._doc || event,
                    coords: null
                });
            }
        }
        
        res.status(200).json(eventsWithCoords);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
}


module.exports = {
    getAllEvents,
    getEventById,
    createEvent,
    getEventsByPosition,
};
