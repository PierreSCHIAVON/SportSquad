import { useState, useEffect } from 'react';
import { MapContainer, TileLayer, Marker, Circle, Popup } from 'react-leaflet';
import 'leaflet/dist/leaflet.css';
import L from 'leaflet';
import api from '../api/Api';
import { useNavigate } from 'react-router-dom';

// Fix for default icon issue in leaflet
delete L.Icon.Default.prototype._getIconUrl;
L.Icon.Default.mergeOptions({
    iconRetinaUrl: 'https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.7.1/images/marker-icon-2x.png',
    iconUrl: 'https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.7.1/images/marker-icon.png',
    shadowUrl: 'https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.7.1/images/marker-shadow.png',
});

interface Event {
    id_evenement: number;
    sport: string;
    niveau_requis: string;
    localisation: string;
    nb_max_participants: number;
    date_debut: string;
    date_fin: string;
    description_event: string;
    etat: string;
    organisateur: string;
    coords: {
        lat: string;
        lon: string;
    };
}

const Maps = () => {
    const [userPosition, setUserPosition] = useState<{ lat: string; lon: string; localisation: string } | null>(null);
    const [events, setEvents] = useState<Event[]>([]);
    const [isLoading, setIsLoading] = useState(true);
    const navigate = useNavigate();

    useEffect(() => {
        const fetchUserPosition = async () => {
            setIsLoading(true);
            try {
                // Utiliser l'API pour récupérer la position
                const response = await api.get('/getUserPosition');
                
                // Vérifier si la réponse contient des données valides
                if (response.data && response.data.lat && response.data.lon) {
                    setUserPosition({
                        lat: response.data.lat,
                        lon: response.data.lon,
                        localisation: response.data.localisation || 'Position actuelle',
                    });
                } else {
                    setUserPosition({
                        lat: "48.8566",
                        lon: "2.3522",
                        localisation: "Paris, France",
                    });
                }
            } catch (error) {
                console.error('Error fetching user position:', error);
                setUserPosition({
                    lat: "48.8566",
                    lon: "2.3522",
                    localisation: "Paris, France",
                });
            } finally {
                setIsLoading(false);
            }
        };

        fetchUserPosition();
    }, []);

    useEffect(() => {
        if (!userPosition || !userPosition.localisation) return;

        const fetchEvents = async () => {
            try {
                const response = await api.get('/events/position', {
                    params: { position: userPosition.localisation },
                });
                setEvents(response.data);
            } catch (error) {
                console.error('Error fetching events:', error);
                setEvents([]);
            }
        };

        fetchEvents();
    }, [userPosition]);

    const goToEventDetails = (eventId: number) => {
        navigate(`/dashboard/event/${eventId}`);
    };

    const defaultPosition: [number, number] = [48.8566, 2.3522]; // Paris

    const mapCenter: [number, number] = userPosition && userPosition.lat && userPosition.lon
        ? [parseFloat(userPosition.lat), parseFloat(userPosition.lon)]
        : defaultPosition;
    
    return (
        <div className="maps-container p-4"  style={{ fontFamily: 'League Spartan, sans-serif' }}>
            <h2 className="mb-4 mt-4">Retrouver des événements autour de chez vous</h2>
            
            {userPosition && (
                <div className="mb-3 text-muted">
                    <i className="bi bi-geo-alt"></i> Vous êtes actuellement à: <strong>{userPosition.localisation}</strong>
                </div>
            )}

            {isLoading ? (
                <div className="d-flex justify-content-center align-items-center" style={{ height: '450px' }}>
                    <div className="spinner-border text-primary" role="status">
                        <span className="visually-hidden">Chargement...</span>
                    </div>
                </div>
            ) : (
                <div style={{ height: '380px', width: '100%' }}>
                    <MapContainer center={mapCenter} zoom={13} style={{ height: '100%', width: '100%' }}>
                        <TileLayer
                            url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                            attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
                        />

                        {userPosition && userPosition.lat && userPosition.lon && (
                            <>
                                <Marker
                                    position={[
                                        parseFloat(userPosition.lat),
                                        parseFloat(userPosition.lon),
                                    ]}
                                >
                                    <Popup>
                                        <div>
                                            <strong>Votre position</strong>
                                            <p>{userPosition.localisation}</p>
                                        </div>
                                    </Popup>
                                </Marker>
                                <Circle
                                    center={[
                                        parseFloat(userPosition.lat),
                                        parseFloat(userPosition.lon),
                                    ]}
                                    pathOptions={{ color: 'blue', fillColor: 'blue', fillOpacity: 0.1 }}
                                />
                            </>
                        )}

                        {events.map((event) =>
                            event.coords?.lat && event.coords?.lon ? (
                                <Marker
                                    key={event.id_evenement}
                                    position={[
                                        parseFloat(event.coords.lat),
                                        parseFloat(event.coords.lon),
                                    ]}
                                >
                                    <Popup>
                                        <div>
                                            <h3>{event.sport}</h3>
                                            <p><strong>Niveau:</strong> {event.niveau_requis}</p>
                                            <p><strong>Organisateur:</strong> {event.organisateur}</p>
                                            <p><strong>Date:</strong> {new Date(event.date_debut).toLocaleDateString()}</p>
                                            <p><strong>Lieu:</strong> {event.localisation}</p>
                                            <p>{event.description_event}</p>
                                            <button 
                                                className="btn btn-primary mt-2"
                                                onClick={() => goToEventDetails(event.id_evenement)}
                                            >
                                                Voir les détails
                                            </button>
                                        </div>
                                    </Popup>
                                </Marker>
                            ) : null
                        )}
                    </MapContainer>
                </div>
            )}
            
            {!isLoading && events.length === 0 && (
                <div className="alert alert-info mt-3">
                    Aucun événement trouvé dans cette zone. Essayez d'élargir votre recherche ou créez un événement.
                </div>
            )}
        </div>
    );
};

export default Maps;