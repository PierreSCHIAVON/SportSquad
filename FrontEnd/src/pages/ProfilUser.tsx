import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { getUserById } from '../services/userService';
import ProfilUser from './User'; // Importation du composant ProfilUser
import 'bootstrap/dist/css/bootstrap.min.css';
import Breadcrumb from '../components/Breadcrumb';
import Header from './Header';
import Footer from './Footer';

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

const UserProfile: React.FC = () => {
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
            } finally {
                setLoading(false);
            }
        };

        fetchUser();
    }, [id]);

    if (error) {
        return (
            <div className="container">
                <Header />
                <Breadcrumb items={[{ label: 'Home', href: '/' }, { label: 'Erreur', href: '/profil' }]} />
                <main>
                    <div className="alert alert-danger mt-4 text-center" role="alert">
                        {error}
                    </div>
                </main>
                <Footer />
            </div>
        );
    }

    if (!user) {
        return (
            <div className="container">
                <Header />
                <Breadcrumb items={[{ label: 'Home', href: '/' }, { label: 'Utilisateur non trouvé', href: '/profil' }]} />
                <main>
                    <div className="alert alert-warning mt-4 text-center" role="alert">
                        Utilisateur non trouvé.
                    </div>
                </main>
                <Footer />
            </div>
        );
    }

    return (
        <div className="container">
            <Header />
            <Breadcrumb items={[{ label: 'Home', href: '/' }, { label: 'Profil', href: `/profil/${id}` }]} />
            <main>
                <ProfilUser user={user} isOwnProfile={isOwnProfile} />
            </main>
            <Footer />
        </div>
    );
};

export default UserProfile;
