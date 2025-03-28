import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { getEventById } from "../Api.tsx";

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

    if (isLoading) return <p>Chargement de l'événement...</p>;
    if (error) return <p>{error}</p>;
    if (!event) return <p>Aucun événement trouvé.</p>;

    return (
        <div className="container">
            <h2>{event.sport}</h2>
            <p><strong>Description:</strong> {event.description_event}</p>
            <p><strong>Localisation:</strong> {event.localisation}</p>
            <p><strong>Date:</strong> {new Date(event.date_debut).toLocaleDateString()} - {new Date(event.date_fin).toLocaleDateString()}</p>
            <p><strong>Participants max:</strong> {event.nb_max_participants}</p>
            <button className="btn btn-primary" onClick={() => navigate(-1)}>Retour</button>
        </div>
    );
};

export default EventPage;
