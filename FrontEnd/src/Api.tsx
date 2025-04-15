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

export const createSport = async (sport: any) => {
    try {
        const response = await axios.post(`${API_URL}/sports`, sport);
        return response.data;
    } catch (error) {
        console.error('Error creating sport:', error);
        throw error;
    }
};

export const updateSport = async (id: string, sport: any) => {
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

export const createEvent = async (event: any) => {
    try {
        const response = await axios.post(`${API_URL}/events`, event);
        return response.data;
    } catch (error) {
        console.error('Error creating event:', error);
        throw error;
    }
};

export const updateEvent = async (id: string, event: any) => {
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

export const getParticipations = async () => {
    try {
        const response = await axios.get(`${API_URL}/participations`);
        return response.data;
    } catch (error) {
        console.error('Error fetching participations:', error);
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


export const getParticipationsByUserId = async () => {
    const userId = localStorage.getItem('userId');

    try {
        const response = await axios.get(`${API_URL}/participations/user/${userId}`);
        return response.data;
    } catch (error) {
        console.error(`Erreur lors de la récupération des participations pour l'utilisateur ${userId}:`, error);
        throw error;
    }
};

export const createParticipation = async (participation: any) => {
    try {
        const response = await axios.post(`${API_URL}/participations`, participation);
        return response.data;
    } catch (error) {
        console.error('Error creating participation:', error);
        throw error;
    }
};

export const createParticipationWithUserId = async (userId: string, eventData: any) => {
    try {
        // Vérifier l'ID utilisateur dans localStorage
        const userIdFromStorage = localStorage.getItem('userId');

        if (!userIdFromStorage) {
            throw new Error('User ID not found in localStorage');
        }

        // Créer l'objet participation avec les données de l'événement
        const participation = {
            id_evenement: eventData.id_evenement, // L'ID de l'événement
            id_user: userIdFromStorage,
            id_users: userIdFromStorage,
            date_participation : eventData.date_debut, // La date de participation (date de début de l'événement)
        };

        // Appel API pour créer la participation
        const response = await axios.post(`${API_URL}/participations/user/${userIdFromStorage}`, participation);

        return response.data;
    } catch (error) {
        console.error(`Error creating participation for user ${userId}:`, error);
        throw error;
    }
};



export const updateParticipation = async (id: string, participation: any) => {
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
