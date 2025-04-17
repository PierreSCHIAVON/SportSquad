import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import {createParticipation, getEventById} from "../Api.tsx";

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
        const token = localStorage.getItem('token');

        if (!event || !token) {
            console.log("Token ou données manquantes", { event, token });
            return;
        }
        
        try {
            const participationData = {
                id_evenement: event.id_evenement,
                data_participation: event.date_debut,
            };  

            await createParticipation(token, participationData);
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
        <div className="p-4">
            <div className="card shadow-lg mb-4 border-0 rounded-4 w-100">
                <div className="card-header text-white py-3 bg-black border-0 rounded-top-4"> 
                    <h2 className="m-0 font-weight-bold" style={{color: "rgb(236, 153, 0)"}}>{event.sport.charAt(0).toUpperCase() + event.sport.slice(1).toLowerCase()}</h2>
                </div>
                <div className="card-body border-0 rounded-4">
                    <div className="mb-3">
                        <h5 className="text-muted mb-2">Description</h5>
                        <p className="card-text">{event.description_event}</p>
                    </div>
                    <div className="row mb-3">
                        <div className="col-md-6">
                            <h5 className="text-muted mb-2">Localisation</h5>
                            <p className="card-text">{event.localisation}</p>
                        </div>
                        <div className="col-md-6">
                            <h5 className="text-muted mb-2">Participants max</h5>
                            <p className="card-text">{event.nb_max_participants}</p>
                        </div>
                    </div>
                    <div className="mb-3">
                        <h5 className="text-muted mb-2">Date</h5>
                        <p className="card-text">{new Date(event.date_debut).toLocaleDateString()} - {new Date(event.date_fin).toLocaleDateString()}</p>
                    </div>
                    {successMessage && <div className="alert alert-success">{successMessage}</div>}
                </div>
                <div className="card-footer bg-light d-flex justify-content-between py-3 border-0 rounded-4">
                    <button className="btn btn-secondary" onClick={() => navigate(-1)}>Retour</button>
                    <button className="btn btn-success px-4" onClick={handleParticipation}>Participer</button>
                </div>
            </div>
        </div>  
    );
};

export default EventPage;
