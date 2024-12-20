import api from '../api/Api';

export const getUserById = async (id: string | number) => {
    try {
        const response = await api.get(`/getUserById/${id}`);
        return response.data;
    } catch (error) {
        console.error(`Erreur lors de la récupération de l'utilisateur avec l'ID ${id} :`, error);
        throw new Error(`Impossible de récupérer l'utilisateur avec l'ID ${id}.`);
    }
};
