import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { getUserById } from '../services/userService';
import UserInfos from './User/UserInfos'; // Importation du composant UserInfos
import 'bootstrap/dist/css/bootstrap.min.css';

interface User {
    id_user: number;
    nom: string;
    prenom: string;
    pseudo: string;
    email: string;
    password: string;
    niveau: string;
    date_inscription: string;
    photo: string;
    sports_fav: string;
    localisation: string;
}

const ProfilUser: React.FC = () => {
    const { id } = useParams<{ id: string }>();
    const [user, setUser] = useState<User | null>(null);
    const [error, setError] = useState<string | null>(null);
    const isOwnProfile = Number(id) === 1; // Attention là c'est pour le test

    useEffect(() => {
        const fetchUser = async () => {
            try {
                const userData = await getUserById(Number(id));
                setUser(userData);
                setError(null);
            } catch (err: any) {
                setError(err.message || "Erreur lors du chargement des données utilisateur.");
                setUser(null);
            }
        };

        fetchUser();
    }, [id]);

    if (error) {
        return (
            <div className="container">
                <div className="alert alert-danger mt-4 text-center" role="alert">
                    {error}
                </div>
            </div>
        );
    }

    if (!user) {
        return (
            <div className="container">
                <div className="alert alert-warning mt-4 text-center" role="alert">
                    Utilisateur non trouvé.
                </div>
            </div>
        );
    }

    return (
        <div className="container">
            <UserInfos user={user} isOwnProfile={isOwnProfile} />
        </div>

);
};

export default ProfilUser;
