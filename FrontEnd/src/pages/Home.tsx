import React, { useEffect, useState } from 'react';
import { getEvents } from '../services/eventsService';
import 'bootstrap/dist/css/bootstrap.min.css';
import Breadcrumb from '../components/Breadcrumb';
import Evenements from './Events';
import Header from './Header';
import Footer from './Footer';

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

    useEffect(() => {
        const fetchEvents = async () => {
            const eventsData = await getEvents();
            setEvents(eventsData);
        };

        fetchEvents();
    }, []);

    return (
        <div className="container">
            <Header></Header>
            <Breadcrumb items={[{ label: 'Home', href: '/' },{ label: 'Profil', href: '/profil' }]} />
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