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

const SearchPage: React.FC = () => {
    const [events, setEvents] = useState<Event[]>([]);
    const [searchTerm, setSearchTerm] = useState('');

    useEffect(() => {
        const fetchEvents = async () => {
            const eventsData = await getEvents();
            setEvents(eventsData);
        };

        fetchEvents();
    }, []);

    const filteredEvents = events.filter(event =>
        event.sport.toLowerCase().includes(searchTerm.toLowerCase()) ||
        event.localisation.toLowerCase().includes(searchTerm.toLowerCase())||
        event.date_debut.toLowerCase().includes(searchTerm.toLowerCase())||
        event.niveau_requis.toLowerCase().includes(searchTerm.toLowerCase())
    );

    return (
        <div className="container">
                <section className="mb-4 p-4">
                    <h2 className="text-center mb-4">Rechercher un événement</h2>
                    <input
                        type="text"
                        className="form-control mb-3"
                        placeholder="Rechercher par sport ou localisation..."
                        value={searchTerm}
                        onChange={(e) => setSearchTerm(e.target.value)}
                    />
                    <Evenements events={filteredEvents} />
                </section>
        </div>
    );
};

export default SearchPage;