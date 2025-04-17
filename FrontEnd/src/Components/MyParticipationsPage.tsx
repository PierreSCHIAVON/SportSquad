import { useEffect, useState } from "react";
import { getParticipations } from "../Api.tsx";
import React from "react";


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
        <div className="container py-4">
            <h2 className="mb-4">Mes participations</h2>
            {participations.length === 0 ? (
                <div className="text-center text-muted py-5">
                    <p className="fs-5">Vous n'avez pas encore participé à un événement.</p>
                </div>
            ) : (
                <div className="row g-4">
                    {participations.map((participation, index) => (
                        <div key={index} className="col">
                            <div className="card h-100 border-0 rounded-4 text-dark" style={{ backgroundColor: '#d9d9d9', cursor: 'pointer' }}>
                                <div className="card-body">
                                    <h5 className="card-title fw-bold">{participation.evenement.sport}</h5>
                                    <p className="card-text mb-1">
                                        {new Date(participation.evenement.date_debut).toLocaleDateString()}
                                    </p>
                                    <p className="card-text">
                                        {participation.evenement.localisation}
                                    </p>
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
