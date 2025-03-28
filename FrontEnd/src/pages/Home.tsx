import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom'; // Assurez-vous d'utiliser react-router-dom
import { getEvents } from '../services/eventsService';
import 'bootstrap/dist/css/bootstrap.min.css';
import Breadcrumb from '../Components/Breadcrumb';
import Evenements from './Events';
import Header from './Header';
import Footer from './Footer';

const userId = 1;
interface Event {
    id_evenement: number;
    id_user: number;
    sport: string;
    niveau_requis: string;
    localisation: string;
    nb_max_participants: number;
    date_debut: string;
    date_fin: string;
    description_event: string;
    etat: string;
}

const Home: React.FC = () => {
    const [events, setEvents] = useState<Event[]>([]);
        const navigate = useNavigate();
        const [isAuthenticated, setIsAuthenticated] = useState<boolean>(false); // Simule l'état d'authentification

        useEffect(() => {
            // Vérifiez si l'utilisateur est connecté
            const checkAuthentication = () => {
                const token = localStorage.getItem('token'); // Exemple : vérifiez un token dans le localStorage
                if (!token) {
                    navigate('/login'); // Redirigez vers /register si non connecté
                } else {
                    setIsAuthenticated(true);
                }
            };

            checkAuthentication();
        }, [navigate]);

        useEffect(() => {
            if (isAuthenticated) {
                const fetchEvents = async () => {
                    const eventsData = await getEvents();
                    setEvents(eventsData);
                };

                fetchEvents();
            }
        }, [isAuthenticated]);

    return (
        <div className="container">
            <Header></Header>
            <Breadcrumb items={[{ label: 'Home', href: '/' }, { label: 'Rechercher', href: '/search' }, { label: 'Profil', href: `/profil/${userId}` }]} />
            <main>
                <section className="mb-4">
                    <h2 className="text-center">Upcoming Events</h2>
                    <Evenements events={events} />
                </section>
            </main>
            <Footer></Footer>
        </div>
    );
};

export default Home;