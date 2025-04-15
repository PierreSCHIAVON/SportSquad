import React from 'react';
import { Link } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';

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

interface EvenementsProps {
    events: Event[];
}

const Evenements: React.FC<EvenementsProps> = ({ events }) => {
    return (
        <div className="row">
            {events.map((event, index) => (
                <div key={event.id_evenement} className="mb-4">
                    <Link to={`/event/${event.id_evenement}`} className="text-decoration-none">
                        <div className={`card ${index % 2 === 0 ? 'bg-primary' : 'bg-secondary'} text-white`}>
                            <div className="card-body">
                                <h3 className="card-title">{event.sport}</h3>
                                <p className="card-text">{event.description_event}</p>
                                <p className="card-text"><strong>Date:</strong> {new Date(event.date_debut).toLocaleDateString()} - {new Date(event.date_fin).toLocaleDateString()}</p>
                                <p className="card-text"><strong>Location:</strong> {event.localisation}</p>
                                <p className="card-text"><strong>Participants:</strong> {event.nb_max_participants}</p>
                            </div>
                        </div>
                    </Link>
                </div>
            ))}
        </div>
    );
};

export default Evenements;
