import React, { useEffect, useState } from "react";
import { Box } from "@mui/material";
import { getParticipations } from "../../Api.tsx";
import { useNavigate } from "react-router-dom";

const RightSidebar: React.FC = () => {
  const [events, setEvents] = useState<any[]>([]);
  const navigate = useNavigate();

  const loadFutureEvents = async () => {
    try {
      const participations = await getParticipations("future");
      const eventsArray = participations.map(participation => participation.evenement);
      setEvents(eventsArray);
    } catch (error) {
      console.error("Erreur lors de la récupération des événements à venir :", error);
    }
  };

  useEffect(() => {
    loadFutureEvents();
  }, []);

  const goToEventDetails = (eventId: number) => {
    navigate(`/dashboard/event/${eventId}`);
  };

  return (
    <Box
      sx={{
        width: "400px",
        backgroundColor: "#ffffff",
        height: "calc(100% - 20px)",
        marginTop: "10px",
        marginLeft: "10px",
        marginRight: "10px",
        borderRadius: "8px",
        boxShadow: "0 4px 10px rgba(0, 0, 0, 0.1)",
        display: "flex",
        flexDirection: "column",
        overflow: "hidden", // Empêche le débordement du contenu
        fontFamily: "League Spartan, sans-serif",
      }}
    >
      {/* Titre fixe en haut */}
      <div className="w-100 p-4 border-bottom">
        <span className="fs-4 d-block text-start fw-bold">Événements à venir</span>
      </div>

      {/* Conteneur avec défilement */}
      <div 
        style={{ 
          overflowY: "auto", // Ajoute défilement vertical
          flex: 1, // Prend tout l'espace disponible
          padding: "16px" // Ajoute de l'espace autour des événements
        }}
      >
        {events.length === 0 ? (
          <div className="text-center text-muted py-5">
            <p className="fs-5">Aucun événement à venir.</p>
          </div>
        ) : (
            <div className="d-flex flex-column gap-3" style={{ maxHeight: "calc(100vh - 300px)", overflowY: "auto", scrollbarWidth: "none", msOverflowStyle: "none" }}>
            {events.map((event, index) => (
              <div 
              key={index} 
              className="card border-0 rounded-4 text-white  shadow-sm"
              style={{
                backgroundColor: "#d9d9d9",
                marginBottom: "10px",
              }}
              >
              <div className="card-body">
                <h5 className="card-title fw-bold text-dark">{event.sport}</h5>
                <p className="card-text mb-1 text-dark">
                {new Date(event.date_debut).toLocaleDateString('fr-FR', { 
                  day: 'numeric', 
                  month: 'long', 
                  year: 'numeric' 
                })}
                </p>
                <p className="card-text text-dark">{event.localisation}</p>
              </div>
              </div>
            ))}
            </div>
        )}
      </div>
    </Box>
  );
};

export default RightSidebar;