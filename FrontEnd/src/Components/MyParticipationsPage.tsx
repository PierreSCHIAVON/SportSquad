import { useEffect, useState } from "react";
import { getParticipationsByUserId } from "../Api.tsx";
import React from "react";


const MyParticipationsPage: React.FC = () => {
    const [participations, setParticipations] = useState<any[]>([]);
    const [isLoading, setIsLoading] = useState(true);
    const [error, setError] = useState<string | null>(null);

    useEffect(() => {
        const fetchParticipations = async () => {
            try {
                const data = await getParticipationsByUserId();
                setParticipations(data); // On met à jour les participations récupérées
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
        <div className="container">
            <h2>Mes participations</h2>
            <ul>
                {participations.map((participation, index) => (
                    <li key={index}>
                        <p><strong>Événement :</strong> {participation.eventName}</p>
                        <p><strong>Date :</strong> {new Date(participation.eventDate).toLocaleDateString()}</p>
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default MyParticipationsPage;
