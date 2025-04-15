import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { getEvents } from '../services/eventsService';

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

const getSportIcon = (sport: string): string => {
    switch (sport.toLowerCase()) {
        case 'football':
            return 'https://cdn-icons-png.flaticon.com/512/861/861512.png';
        case 'tennis':
            return 'https://cdn-icons-png.flaticon.com/512/6057/6057897.png';
        case 'basketball':
            return 'https://cdn-icons-png.flaticon.com/512/861/861499.png';
        case 'handball':
            return 'https://cdn-icons-png.flaticon.com/512/3534/3534026.png';
        case 'musculation':
        case 'fitness':
        case 'gym':
            return 'https://cdn-icons-png.flaticon.com/512/2331/2331970.png';
        case 'pétanque':
            return 'https://cdn-icons-png.flaticon.com/512/8096/8096676.png';
        default:
            return 'https://cdn-icons-png.flaticon.com/512/727/727399.png'; // une icône générique
    }
};


const sportOptions = ['Football', 'Tennis', 'Basketball', 'Handball', 'Musculation', 'Pétanque'];
const niveauOptions = ['Débutant', 'Intermédiaire', 'Avancé'];

const SearchPage: React.FC = () => {
    const [events, setEvents] = useState<Event[]>([]);
    const [filteredEvents, setFilteredEvents] = useState<Event[]>([]);
    const [searchTerm, setSearchTerm] = useState('');
    const [sportFilter, setSportFilter] = useState('');
    const [dateFilter, setDateFilter] = useState('');
    const [niveauFilter, setNiveauFilter] = useState('');
    const [isAuthenticated, setIsAuthenticated] = useState<boolean>(false);

    const navigate = useNavigate();

    useEffect(() => {
        const token = localStorage.getItem('token');
        if (!token) {
            navigate('/login');
        } else {
            setIsAuthenticated(true);
        }
    }, [navigate]);

    useEffect(() => {
        if (isAuthenticated) {
            getEvents().then((data) => {
                setEvents(data);
                setFilteredEvents(data);
            });
        }
    }, [isAuthenticated]);

    const handleSearch = () => {
        const results = events.filter((event) => {
            const matchSearch =
                event.sport.toLowerCase().includes(searchTerm.toLowerCase()) ||
                event.localisation.toLowerCase().includes(searchTerm.toLowerCase());

            const matchSport = !sportFilter || event.sport.toLowerCase() === sportFilter.toLowerCase();
            const matchDate = !dateFilter || new Date(event.date_debut).toISOString().split('T')[0] === dateFilter;
            const matchNiveau = !niveauFilter || event.niveau_requis.toLowerCase() === niveauFilter.toLowerCase();

            return matchSearch && matchSport && matchDate && matchNiveau;
        });

        setFilteredEvents(results);
    };

    return (
        <div className="container py-5">
            <h1 className="text-center fw-bold display-4 mb-4">Bienvenue sur SPORT SQUAD</h1>

            {/* Formulaire de recherche */}
            <div className="row g-3 mb-5 justify-content-center">
                <div className="col-md-4">
                    <input
                        type="text"
                        className="form-control"
                        placeholder="Rechercher (lieu, sport...)"
                        value={searchTerm}
                        onChange={(e) => setSearchTerm(e.target.value)}
                    />
                </div>

                <div className="col-md-3">
                    <select
                        className="form-select"
                        value={sportFilter}
                        onChange={(e) => setSportFilter(e.target.value)}
                    >
                        <option value="">Tous les sports</option>
                        {sportOptions.map((sport) => (
                            <option key={sport} value={sport}>
                                {sport}
                            </option>
                        ))}
                    </select>
                </div>

                <div className="col-md-2">
                    <input
                        type="date"
                        className="form-control"
                        value={dateFilter}
                        onChange={(e) => setDateFilter(e.target.value)}
                    />
                </div>

                <div className="col-md-2">
                    <select
                        className="form-select"
                        value={niveauFilter}
                        onChange={(e) => setNiveauFilter(e.target.value)}
                    >
                        <option value="">Tous niveaux</option>
                        {niveauOptions.map((niveau) => (
                            <option key={niveau} value={niveau}>
                                {niveau}
                            </option>
                        ))}
                    </select>
                </div>

                <div className="col-md-1 d-grid">
                    <button className="btn btn-primary" onClick={handleSearch}>
                        🔎
                    </button>
                </div>
            </div>

            {/* Résultats */}
            <div className="row gy-4">
                {filteredEvents.map((event) => (
                    <div key={event.id_evenement} className="col-12">
                        <div
                            onClick={() => navigate(`/dashboard/event/${event.id_evenement}`)}
                            className="p-4 rounded d-flex justify-content-between align-items-center"
                            style={{ backgroundColor: '#d9d9d9', cursor: 'pointer' }}
                        >
                            <div>
                                <h4 className="fw-bold text-warning">{event.sport}</h4>
                                <p className="text-muted">{event.localisation}</p>
                                <p>
                                    {new Date(event.date_debut).toLocaleDateString('fr-FR')} à{' '}
                                    {new Date(event.date_debut).toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}
                                </p>
                                <p className="text-muted">Niveau requis : {event.niveau_requis}</p>
                            </div>
                            <div>
                                <img src={getSportIcon(event.sport)} alt={event.sport} style={{ width: '100px', height: 'auto' }} />
                            </div>
                        </div>
                    </div>
                ))}

                {filteredEvents.length === 0 && (
                    <p className="text-center text-muted">Aucun événement trouvé pour ces critères.</p>
                )}
            </div>
        </div>
    );
};

export default SearchPage;
