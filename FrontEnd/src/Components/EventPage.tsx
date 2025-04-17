import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";

import {createParticipationWithUserId, getEventById} from "../Api.tsx";


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

const EventPage: React.FC = () => {
    const { id } = useParams<{ id: string }>();
    const navigate = useNavigate();
    const [event, setEvent] = useState<Event | null>(null);
    const [isLoading, setIsLoading] = useState(true);
    const [error, setError] = useState<string | null>(null);
    const [successMessage, setSuccessMessage] = useState<string | null>(null);

    useEffect(() => {
        const fetchEvent = async () => {
            try {
                if (!id) return;
                const eventData = await getEventById(Number(id));
                setEvent(eventData);
            } catch (err) {
                setError("Impossible de récupérer l'événement.");
                console.error(err);
            } finally {
                setIsLoading(false);
            }
        };

        fetchEvent();
    }, [id]);

    const handleParticipation = async () => {
        const userId = localStorage.getItem('userId');

        if (!event || !userId) {
            console.log("❌ Données manquantes", { event, userId });
            return;
        }


        try {
            const participationData = {
                id_evenement: event.id_evenement,
            };

            await createParticipationWithUserId(userId, participationData);

            alert("Participation enregistrée !");

            setSuccessMessage("Vous êtes inscrit à l'événement !");
        } catch (err: any) {
            console.error("❌ Erreur lors de la participation :", err);
            alert("Erreur : " + (err.response?.data?.error || err.message));
        }
    };


    if (isLoading) return <p>Chargement de l'événement...</p>;
    if (error) return <p className="text-danger">{error}</p>;
    if (!event) return <p>Aucun événement trouvé.</p>;

    return (
        <div className="container p-4">
            <h2>{event.sport.charAt(0).toUpperCase() + event.sport.slice(1).toLowerCase()}</h2>
            <p><strong>Description:</strong> {event.description_event}</p>
            <p><strong>Localisation:</strong> {event.localisation}</p>
            <p><strong>Date:</strong> {new Date(event.date_debut).toLocaleDateString()} - {new Date(event.date_fin).toLocaleDateString()}</p>
            <p><strong>Participants max:</strong> {event.nb_max_participants}</p>

            {successMessage && <p className="text-success">{successMessage}</p>}
            <button className="btn btn-primary me-2" onClick={() => navigate(-1)}>Retour</button>
            <button className="btn btn-success" onClick={handleParticipation}>Participer</button>
        </div>
    );
};

export default EventPage;
