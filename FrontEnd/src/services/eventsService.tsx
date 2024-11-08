import api from '../api/Api';

export const getEvents = async () => {
    try {
        const response = await api.get('/getEvents');
        return response.data;
    } catch (error) {
        console.error('Error fetching events:', error);
        throw error;
    }
};
export const getEventById = async (id: string) => {
    try {
        const response = await api.get(`/events/${id}`);
        return response.data;
    } catch (error) {
        console.error(`Error fetching event with id ${id}:`, error);
        throw error;
    }
};

export const createEvent = async (event: unknown) => {
    try {
        const response = await api.post('/events', event);
        return response.data;
    } catch (error) {
        console.error('Error creating event:', error);
        throw error;
    }
};

export const updateEvent = async (id: string, event: unknown) => {
    try {
        const response = await api.put(`/events/${id}`, event);
        return response.data;
    } catch (error) {
        console.error(`Error updating event with id ${id}:`, error);
        throw error;
    }
};
