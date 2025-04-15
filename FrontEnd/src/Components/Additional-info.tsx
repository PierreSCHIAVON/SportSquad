import React, { useState, useEffect } from "react";
import api from "../api/Api";
import { useNavigate } from 'react-router-dom'; 

const AdditionalInfo: React.FC = () => {
    const [pseudo, setPseudo] = useState("");
    const [sports, setSports] = useState<string[]>([]);
    const [location, setLocation] = useState("");
    const [suggestions, setSuggestions] = useState<string[]>([]);
    const [searchQuery, setSearchQuery] = useState("");
    const navigate = useNavigate();
    const availableSports = ["Football", "Basketball", "Tennis", "Handball", "Musculation", "Pétanque"];

    const handleSportChange = (sport: string) => {
        setSports((prev) =>
            prev.includes(sport) ? prev.filter((s) => s !== sport) : [...prev, sport]
        );
    };

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        
        try {
            const token = localStorage.getItem("token");
            if (!token) {
                alert("Vous devez être connecté pour envoyer ces informations.");
                return;
            }
    
            const payload = {
                pseudo,
                sports,
                location,
            };

            await api.post('/postAdditionalInfo', payload, {
                headers: {
                    Authorization: `Bearer ${token}`, 
                },
            });
            
            navigate('/');
        } catch (error: any) {
            console.error("Erreur lors de l'envoi :", error.response?.data || error.message);
        }
    };
    

    // Fonction pour récupérer les suggestions de villes
    const fetchLocations = async (query: string) => {
        if (!query) return;
        const res = await fetch(`https://nominatim.openstreetmap.org/search?format=json&q=${query}`);
        const data = await res.json();
        setSuggestions(data.map((item: any) => item.display_name));
    };

    // Débounce : Attend 1s avant d'envoyer la requête après la dernière frappe
    useEffect(() => {
        if (!searchQuery) {
            setSuggestions([]);
            return;
        }

        const timeoutId = setTimeout(() => {
            fetchLocations(searchQuery);
        }, 1000);

        return () => clearTimeout(timeoutId);
    }, [searchQuery]);

    return (
        <div
            className="d-flex justify-content-center align-items-center vw-100 vh-100"
            style={{
                background: "linear-gradient(135deg, #6a11cb, #2575fc)",
            }}
        >
            <div
                className="card p-4 shadow-lg text-white d-flex flex-column"
                style={{
                    background: "#222",
                    borderRadius: "20px",
                }}
            >
                <h1 className="text-center fw-bold">
                    Bienvenue sur <span style={{ color: "#FFAA00" }}>Sports Squad</span> !
                </h1>
                <p className="text-center text-light">
                    Renseignez vos informations pour nous aider à vous proposer des événements adaptés.
                </p>

                <hr className="border-light" />

                <h3>Infos supplémentaires</h3>

                <form onSubmit={handleSubmit} className="d-flex flex-column gap-4">
                    <div>
                        <label htmlFor="username" className="form-label fw-bold">
                            Pseudo:
                        </label>
                        <input
                            type="text"
                            id="username"
                            className="form-control bg-dark text-white border-0 p-2"
                            value={pseudo}
                            onChange={(e) => setPseudo(e.target.value)}
                            required
                            placeholder="Entrez votre pseudo"
                            style={{ borderRadius: "10px" }}
                        />
                    </div>

                    <div className="d-flex flex-row gap-2">

                        <div style={{ flex: "1 1 50%" }}>
                            <label className="form-label fw-bold">Sports :</label>
                            <div className="d-flex flex-wrap gap-2">
                                {availableSports.map((sport) => (
                                    <button
                                        key={sport}
                                        type="button"
                                        className={`btn ${sports.includes(sport) ? "btn-primary" : "btn-outline-light"} rounded-pill`}
                                        onClick={() => handleSportChange(sport)}
                                        style={{ flex: "1 1 45%", minWidth: "120px" }}
                                    >
                                        {sport}
                                    </button>
                                ))}
                            </div>
                        </div>

                        <div style={{ flex: "1 1 50%" }} className="ms-4 position-relative">
                            <label htmlFor="location" className="form-label fw-bold">
                                Localisation:
                            </label>
                            <input
                                type="text"
                                id="location"
                                className="form-control bg-dark text-white border-0 p-2"
                                value={location}
                                onChange={(e) => {
                                    setLocation(e.target.value);
                                    setSearchQuery(e.target.value);
                                }}
                                required
                                placeholder="Entrez votre ville"
                                style={{ borderRadius: "10px" }}
                            />
                            {suggestions.length > 0 && (
                                <ul
                                    className="list-group position-absolute w-100 overflow-auto"
                                    style={{ 
                                        maxHeight: "200px",
                                        zIndex: 10,
                                        backgroundColor: "#333", 
                                        borderRadius: "10px"
                                    }}
                                >
                                    {suggestions.map((suggestion, index) => (
                                        <li
                                            key={index}
                                            className="list-group-item list-group-item-action text-white"
                                            style={{ background: "#444", cursor: "pointer" }}
                                            onClick={() => {
                                                setLocation(suggestion);
                                                setSuggestions([]);
                                            }}
                                        >
                                            {suggestion}
                                        </li>
                                    ))}
                                </ul>
                            )}
                        </div>
                    </div>

                    <div className="d-flex justify-content-end">
                        <button
                            type="submit"
                            className="btn btn-outline-primary p-2 fw-bold rounded-pill w-25"
                        >
                            Valider
                        </button>
                    </div>

                </form>
            </div>
        </div>
    );
};

export default AdditionalInfo;
