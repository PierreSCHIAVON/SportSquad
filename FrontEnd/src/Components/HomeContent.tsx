import React, { useEffect, useState } from 'react';
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

    useEffect(() => {
        const fetchEvents = async () => {
            const eventsData = await getEvents();
            setEvents(eventsData);
        };

        fetchEvents();
    }, []);

    return (
        <div className="container">
            <section className="mb-4">
                <h2 className="text-center">A venir</h2>
                <Evenements events={events} />
            </section>
        </div>
    );
};

export default HomeContent;