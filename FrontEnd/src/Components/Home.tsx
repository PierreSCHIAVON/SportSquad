import React, { useEffect, useState } from 'react';
import { getEvents } from '../Api';
import 'bootstrap/dist/css/bootstrap.min.css';

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

const Home: React.FC = () => {
  const [events, setEvents] = useState<Event[]>([]);

  useEffect(() => {
    const fetchEvents = async () => {
      const eventsData = await getEvents();
      console.log(eventsData);
      setEvents(eventsData);
    };

    fetchEvents();
  }, []);

  return (
    <div className="container">
      <header className="my-4 text-center">
        <h1>Welcome to SportsSquad</h1>
        <p>Your go-to platform for all things sports. Join us to stay updated with the latest news, events, and connect with fellow sports enthusiasts.</p>
      </header>
      <main>
        <section className="mb-4">
          <h2 className="text-center">Upcoming Events</h2>
          <div className="row">
            {events.map((event, index) => (
              <div key={event.id_evenement} className="col-md-5 mb-2">
                <div className={`card ${index % 2 === 0 ? 'bg-primary' : 'bg-secondary'} text-white`}>
                  <div className="card-body">
                    <h3 className="card-title">{event.sport}</h3>
                    <p className="card-text">{event.description_event}</p>
                    <p className="card-text"><strong>Date:</strong> {new Date(event.date_debut).toLocaleDateString()} - {new Date(event.date_fin).toLocaleDateString()}</p>
                    <p className="card-text"><strong>Location:</strong> {event.localisation}</p>
                    <p className="card-text"><strong>Participants:</strong> {event.nb_max_participants}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>
      </main>
      <footer className="mt-4 text-center">
        <p>&copy; 2023 SportsSquad. All rights reserved.</p>
      </footer>
    </div>
  );
};

export default Home;