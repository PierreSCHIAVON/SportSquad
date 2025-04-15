import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom'; // Assurez-vous d'utiliser react-router-dom
import { getEvents } from '../services/eventsService';
import 'bootstrap/dist/css/bootstrap.min.css';
import Evenements from './Events';

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

const HomeContent: React.FC = () => {
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
        <div className="container p-4">
            <section className="mb-4">
                <h4 className="text-center">Évènements recommandés d'après vos informations</h4>
                <div style={{overflowY: 'auto', overflowX: 'hidden' }} className="mt-3 mt-4 py-4 px-4">
                    <Evenements events={events} />
                </div>
            </section>
        </div>
    );
};

export default HomeContent;