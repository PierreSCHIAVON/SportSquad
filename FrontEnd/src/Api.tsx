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

export const createSport = async (sport: number) => {
    try {
        const response = await axios.post(`${API_URL}/sports`, sport);
        return response.data;
    } catch (error) {
        console.error('Error creating sport:', error);
        throw error;
    }
};

export const updateSport = async (id: string, sport: object) => {
    try {
        const response = await axios.put(`${API_URL}/sports/${id}`, sport);
        return response.data;
    } catch (error) {
        console.error(`Error updating sport with id ${id}:`, error);
        throw error;
    }
};

export const deleteSport = async (id: string) => {
    try {
        const response = await axios.delete(`${API_URL}/sports/${id}`);
        return response.data;
    } catch (error) {
        console.error(`Error deleting sport with id ${id}:`, error);
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

export const getEventById = async (id: number) => {
    try {
        const response = await axios.get(`${API_URL}/events/${id}`);
        return response.data;
    } catch (error) {
        console.error(`Error fetching event with id ${id}:`, error);
        throw error;
    }
};

export const createEvent = async (event: object) => {
    try {
        const response = await axios.post(`${API_URL}/events`, event);
        return response.data;
    } catch (error) {
        console.error('Error creating event:', error);
        throw error;
    }
};

export const updateEvent = async (id: string, event: object) => {
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

export const getParticipations = async (timeParam: string) => {
    try {
        const token = localStorage.getItem('token');
        if (!token) {
            throw new Error("Aucun token trouvé, l'utilisateur doit être connecté.");
        }

        const response = await axios.get(`${API_URL}/participations/${timeParam}`, {
            headers: {
                Authorization: `Bearer ${token}`,
            },
        });

        return response.data;
    } catch (error) {
        console.error('Erreur lors de la récupération des participations :', error);
        throw error;
    }
};


export const getParticipationById = async (id: string) => {
    try {
        const response = await axios.get(`${API_URL}/participations/${id}`);
        return response.data;
    } catch (error) {
        console.error(`Error fetching participation with id ${id}:`, error);
        throw error;
    }
};

export const updateParticipation = async (id: string, participation: unknown) => {
    try {
        const response = await axios.put(`${API_URL}/participations/${id}`, participation);
        return response.data;
    } catch (error) {
        console.error(`Error updating participation with id ${id}:`, error);
        throw error;
    }
};

export const deleteParticipation = async (id: string) => {
    try {
        const response = await axios.delete(`${API_URL}/participations/${id}`);
        return response.data;
    } catch (error) {
        console.error(`Error deleting participation with id ${id}:`, error);
        throw error;
    }
};

export const createParticipation = async (token: unknown, participation: unknown) => {
    try {
        const response = await axios.post(`${API_URL}/participations`, participation, {
            headers: {
                Authorization: `Bearer ${token}`,
            },
        });
        return response.data;
    } catch (error) {
        console.error('Error creating participation:', error);
        throw error;
    }
}