import React, { useState, useEffect } from "react";

const AdditionalInfo: React.FC = () => {
    const [username, setUsername] = useState("");
    const [sports, setSports] = useState<string[]>([]);
    const [location, setLocation] = useState("");
    const [suggestions, setSuggestions] = useState<string[]>([]);
    const [searchQuery, setSearchQuery] = useState("");

    const availableSports = ["Football", "Basketball", "Tennis", "Handball", "Musculation", "Pétanque"];

    const handleSportChange = (sport: string) => {
        setSports((prev) =>
            prev.includes(sport) ? prev.filter((s) => s !== sport) : [...prev, sport]
        );
    };

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        console.log({ username, sports, location });
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
                    {/* Pseudo */}
                    <div>
                        <label htmlFor="username" className="form-label fw-bold">
                            Pseudo:
                        </label>
                        <input
                            type="text"
                            id="username"
                            className="form-control bg-dark text-white border-0 p-2"
                            value={username}
                            onChange={(e) => setUsername(e.target.value)}
                            required
                            placeholder="Entrez votre pseudo"
                            style={{ borderRadius: "10px" }}
                        />
                    </div>

                    <div className="d-flex flex-row gap-2">
                        {/* Sports */}
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

                        {/* Localisation avec auto-complétion et debounce */}
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
                                    className="list-group position-absolute w-100"
                                    style={{
                                        zIndex: 10,
                                        backgroundColor: "#333",
                                        borderRadius: "10px",
                                        overflow: "hidden",
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

                    <button
                        type="submit"
                        className="btn btn-primary w-100 p-2 fw-bold"
                        style={{ borderRadius: "10px", fontSize: "18px" }}
                    >
                        Valider
                    </button>
                </form>
            </div>
        </div>
    );
};

export default AdditionalInfo;
