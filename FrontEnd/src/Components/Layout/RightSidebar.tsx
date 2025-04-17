import React, { useEffect, useState } from "react";
import { Box } from "@mui/material";
import { getParticipations } from "../../Api.tsx";

const RightSidebar: React.FC = () => {
  const [events, setEvents] = useState<any[]>([]);

  const loadFutureEvents = async () => {
    try {
      const futureEvents = await getParticipations("future");
      // Ensure we're setting an array to the state
      const eventsArray = Array.isArray(futureEvents[0]?.evenement) 
        ? futureEvents[0].evenement 
        : futureEvents[0]?.evenement ? [futureEvents[0].evenement] : [];
      setEvents(eventsArray);
    } catch (error) {
      console.error("Erreur lors de la récupération des événements à venir :", error);
    }
  };

  useEffect(() => {
    loadFutureEvents();
  }, []);

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
        alignItems: "center",
        padding: "10px",
      }}
    >
      <div className="w-100 p-4">
        <span className="fs-4 d-block text-start">Événements à venir</span>
      </div>

      {events.length === 0 ? (
        <div className="text-center text-muted py-5">
          <p className="fs-5">Aucun événement à venir.</p>
        </div>
      ) : (
        <div className="col">
          {events.map((event, index) => (
            <div key={index} className="">
              <div className="card border-0 rounded-4 text-white bg-dark bg-gradient" style={{ background: "linear-gradient(to bottom, #e9ecef, #212529)" }}>
                <div className="card-body">
                  <h5 className="card-title fw-bold">{event.sport}</h5>
                  <p className="card-text mb-1">
                    {new Date(event.date_debut).toLocaleDateString()}
                  </p>
                  <p className="card-text">{event.localisation}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      )}
    </Box>
  );
};

export default RightSidebar;
