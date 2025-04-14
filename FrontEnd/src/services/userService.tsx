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

export const updateUser = async (id: string | number, user: unknown) => {
    try {
        const response = await api.put(`/updateUser/${id}`,user);
        return response.data;
    } catch (error) {
        console.error(`Erreur lors de la mise a jour de l'utilisateur avec l'ID ${id} :`, error);
        throw new Error(`Impossible de mettre a jour l'utilisateur avec l'ID ${id}.`);
    }
};

export const updateUserPass = async (id: string | number, passwordData: { actualPassword: string, newPassword: string }) => {
    try {
        const response = await api.put(`/updateUserPass/${id}`, passwordData);
        return response.data;
    } catch (error) {
        console.error(`Erreur lors de la mise à jour du mot de passe de l'utilisateur avec l'ID ${id} :`, error);
        throw new Error(`Impossible de mettre à jour le mot de passe de l'utilisateur avec l'ID ${id}.`);
    }
};
