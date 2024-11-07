import axios from 'axios';

const API_URL = 'http://localhost:3000';

export const getSports = async () => {
    try {
        const response = await axios.get(`${API_URL}/sports`);
        return response.data;
    } catch (error) {
        console.error('Error fetching sports:', error);
        throw error;
    }
};

export const getSportById = async (id: string) => {
    try {
        const response = await axios.get(`${API_URL}/sports/${id}`);
        return response.data;
    } catch (error) {
        console.error(`Error fetching sport with id ${id}:`, error);
        throw error;
    }
};

export const getEvents = async () => {
    try {
        const response = await axios.get(`${API_URL}/getEvents`);
        return response.data;
    } catch (error) {
        console.error('Error fetching events:', error);
        throw error;
    }
};

export const getEventById = async (id: string) => {
    try {
        const response = await axios.get(`${API_URL}/events/${id}`);
        return response.data;
    } catch (error) {
        console.error(`Error fetching event with id ${id}:`, error);
        throw error;
    }
};

export const createEvent = async (event: unknown) => {
    try {
        const response = await axios.post(`${API_URL}/events`, event);
        return response.data;
    } catch (error) {
        console.error('Error creating event:', error);
        throw error;
    }
};

export const updateEvent = async (id: string, event: unknown) => {
    try {
        const response = await axios.put(`${API_URL}/events/${id}`, event);
        return response.data;
    } catch (error) {
        console.error(`Error updating event with id ${id}:`, error);
        throw error;
    }
};

export const deleteEvent = async (id: string) => {
    try {
        const response = await axios.delete(`${API_URL}/events/${id}`);
        return response.data;
    } catch (error) {
        console.error(`Error deleting event with id ${id}:`, error);
        throw error;
    }
};