import { useEffect, useState } from "react";
import { getParticipations } from "../Api.tsx";
import React from "react";

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

const MyParticipationsPage: React.FC = () => {
    const [participations, setParticipations] = useState<any[]>([]);
    const [isLoading, setIsLoading] = useState(true);
    const [error, setError] = useState<string | null>(null);


    useEffect(() => {
        const fetchParticipations = async () => {
            try {
                const data = await getParticipations("old");
                setParticipations(data); 
            } catch (err) {
                setError("Impossible de récupérer les participations.");
                console.error(err);
            } finally {
                setIsLoading(false);
            }
        };

        fetchParticipations();
    }, []);

    if (isLoading) return <p>Chargement des participations...</p>;
    if (error) return <p className="text-danger">{error}</p>;

    return (
        <div className="container py-4"  style={{ fontFamily: 'League Spartan, sans-serif' }}>
            <h2 className="mb-4">Mes participations</h2>
            {participations.length === 0 ? (
                <div className="text-center text-muted py-5">
                    <p className="fs-5">Vous n'avez pas encore participé à un événement.</p>
                </div>
            ) : (
                <div className="row g-4" style={{
                    maxHeight: 'calc(100vh - 100px)',
                    overflowY: 'auto',
                    paddingRight: '10px',
                }}>   
                    {participations.map((participation, index) => ( 
                        
                        <div key={index} className="col-12">
                            <div
                                    className="d-flex justify-content-between align-items-center p-4 border-0 rounded-4"
                                    style={{ backgroundColor: '#d9d9d9',  transition: "transform 0.2s ease" }}
                                >
                                <div className="flex-grow-1">
                                    <p className="fw-bold text-uppercase mb-1">{participation.sport}</p>
                                    <h3 className="fw-bold text-warning">ÉVÉNEMENT</h3>
                                    {participation.organisateur !== "null null" && (
                                        <p className="text-muted text-uppercase small">Organisé par {participation.organisateur}</p>
                                    )}
                                    <div className="d-flex flex-wrap mt-3 gap-4">
                                        <div>
                                            <p className="text-muted text-uppercase small mb-0">Date</p>
                                            <p className="fw-bold mb-0">{new Date(participation.evenement.date_debut).toLocaleDateString()}</p>
                                        </div>
                                        <div>
                                            <p className="text-muted text-uppercase small mb-0">Heure</p>
                                            <p className="fw-bold mb-0">{new Date(participation.evenement.date_debut).toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}</p>
                                        </div>
                                        <div>
                                            <p className="text-muted text-uppercase small mb-0">Lieu</p>
                                            <p className="fw-bold mb-0">{participation.evenement.localisation}</p>
                                        </div>
                                    </div>
                                </div>
                                <div>
                                    <img src={getSportIcon(participation.evenement.sport)} alt={participation.sport} style={{ width: '100px', height: 'auto' }} />
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            )}

        </div>

    );
};

export default MyParticipationsPage;
