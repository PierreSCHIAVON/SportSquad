import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom'; // Assurez-vous d'utiliser react-router-dom
import { getEvents } from '../services/eventsService';
import 'bootstrap/dist/css/bootstrap.min.css';

const getSportIcon = (sport: string): string => {
    switch (sport.toLowerCase()) {
        case 'football':
            return 'https://cdn-icons-png.flaticon.com/512/861/861512.png';
        case 'tennis':
            return 'https://cdn-icons-png.flaticon.com/512/6057/6057897.png';
        case 'basketball':
            return './images/basketball.svg';
        case 'course à pied':
            return './images/running.png';
        case 'natation':
            return './images/la-natation.png';
        default:
            return 'https://cdn-icons-png.flaticon.com/512/727/727399.png';
    }
};

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
    organisateur: string;
}

const HomeContent: React.FC = () => {
    const [events, setEvents] = useState<Event[]>([]);
        const navigate = useNavigate();
        const [isAuthenticated, setIsAuthenticated] = useState<boolean>(false);

        useEffect(() => {
            // Vérifiez si l'utilisateur est connecté
            const checkAuthentication = () => {
                const token = localStorage.getItem('token');
                if (!token) {
                    navigate('/login');
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
        <div className="">
            <section className="mb-5">
                <h2 className="text-center mb-5">Événements à venir</h2>
                    <div className="row gy-4 pb-5" style={{
                        maxHeight: 'calc(100vh - 200px)',
                        overflowY: 'auto',
                        paddingRight: '10px',
                    }}>    
                        {events.map((event) => (
                            <div key={event.id_evenement} className="col-12">   
                                <div
                                    onClick={() => navigate(`/dashboard/event/${event.id_evenement}`)}
                                    className="d-flex justify-content-between align-items-center p-4 border-0 rounded-4"
                                    style={{ backgroundColor: '#d9d9d9', cursor: 'pointer',  transition: "transform 0.2s ease" }}
                                    onMouseOver={(e) => e.currentTarget.style.transform = "translateY(-3px)"}
                                    onMouseOut={(e) => e.currentTarget.style.transform = "translateY(0)"}
                                >
                                    <div className="flex-grow-1">
                                        <p className="fw-bold text-uppercase mb-1">{event.sport}</p>
                                        <h3 className="fw-bold text-warning">ÉVÉNEMENT</h3>
                                        {event.organisateur !== "null null" && (
                                            <p className="text-muted text-uppercase small">Organisé par {event.organisateur}</p>
                                        )}
                                        <div className="d-flex flex-wrap mt-3 gap-4">
                                            <div>
                                                <p className="text-muted text-uppercase small mb-0">Date</p>
                                                <p className="fw-bold mb-0">{new Date(event.date_debut).toLocaleDateString()}</p>
                                            </div>
                                            <div>
                                                <p className="text-muted text-uppercase small mb-0">Heure</p>
                                                <p className="fw-bold mb-0">{new Date(event.date_debut).toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}</p>
                                            </div>
                                            <div>
                                                <p className="text-muted text-uppercase small mb-0">Lieu</p>
                                                <p className="fw-bold mb-0">{event.localisation}</p>
                                            </div>
                                        </div>
                                    </div>
                                    <div>
                                        <img src={getSportIcon(event.sport)} alt={event.sport} style={{ width: '100px', height: 'auto' }} />
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
            </section>
        </div>
    );

};

export default HomeContent;