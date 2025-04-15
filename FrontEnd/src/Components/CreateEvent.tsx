import React, { useEffect, useState } from 'react';
import api from "../api/Api";

const CreateEvent = () => {
    const [formData, setFormData] = useState({
        sport: '',
        niveau_requis: '',
        localisation: '',
        date_debut: '',
        date_fin: '',
        description_event: '',
        nb_max_participants: '',
    });

    const [searchQuery, setSearchQuery] = useState('');
    const [suggestions, setSuggestions] = useState<string[]>([]);

    const sports = ['Football', 'Basketball', 'Tennis', 'Course à pied', 'Natation'];
    const levels = ['Débutant', 'Intermédiaire', 'Avancé'];

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
        const { id, value } = e.target;
        setFormData(prev => ({ ...prev, [id]: value }));

        if (id === 'localisation') {
            setSearchQuery(value);
        }
    };

    const fetchLocations = async (query: string) => {
        if (!query) return;
        const res = await fetch(`https://nominatim.openstreetmap.org/search?format=json&q=${query}`);
        const data = await res.json();
        setSuggestions(data.map((item: any) => item.display_name));
    };

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

    const handleSuggestionClick = (suggestion: string) => {
        setFormData(prev => ({ ...prev, localisation: suggestion }));
        setSuggestions([]);
    };

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();

        try {
            const token = localStorage.getItem("token");
            if (!token) {
                alert("Vous devez être connecté.");
                return;
            }

            await api.post('/events', formData, {
                headers: {
                    Authorization: `Bearer ${token}`,
                },
            });

            alert("Événement créé !");
        } catch (error: any) {
            console.error("Erreur :", error.response?.data || error.message);
        }
    };

    return (
        <div className="container mt-5">
            <h2 className="text-center">Créer votre propre événement !</h2>
            <div className="row justify-content-center p-4">
                <div className="col-md-8">
                    <div className="card shadow p-4">
                        <form onSubmit={handleSubmit}>
                            {/* Sport */}
                            <div className="mb-3">
                                <label htmlFor="sport" className="form-label">Sport</label>
                                <select className="form-select" id="sport" value={formData.sport} onChange={handleChange} required>
                                    <option value="">Choisir un sport</option>
                                    {sports.map(s => (
                                        <option key={s} value={s}>{s}</option>
                                    ))}
                                </select>
                            </div>

                            {/* Niveau */}
                            <div className="mb-3">
                                <label htmlFor="niveau_requis" className="form-label">Niveau requis</label>
                                <select className="form-select" id="niveau_requis" value={formData.niveau_requis} onChange={handleChange} required>
                                    <option value="">Choisir un niveau</option>
                                    {levels.map(l => (
                                        <option key={l} value={l}>{l}</option>
                                    ))}
                                </select>
                            </div>

                            {/* Localisation */}
                            <div className="mb-3 position-relative">
                                <label htmlFor="localisation" className="form-label">Localisation</label>
                                <input
                                    type="text"
                                    className="form-control"
                                    id="localisation"
                                    value={formData.localisation}
                                    onChange={handleChange}
                                    placeholder="Ville, région..."
                                    required
                                />
                                {suggestions.length > 0 && (
                                    <ul className="list-group position-absolute w-100 z-3" style={{ maxHeight: '200px', overflowY: 'auto' }}>
                                        {suggestions.map((s, i) => (
                                            <li
                                                key={i}
                                                className="list-group-item list-group-item-action"
                                                onClick={() => handleSuggestionClick(s)}
                                                style={{ cursor: 'pointer' }}
                                            >
                                                {s}
                                            </li>
                                        ))}
                                    </ul>
                                )}
                            </div>

                            {/* Dates */}
                            <div className="mb-3">
                                <label htmlFor="date_debut" className="form-label">Date de début</label>
                                <input
                                    type="date"
                                    className="form-control"
                                    id="date_debut"
                                    value={formData.date_debut}
                                    onChange={handleChange}
                                    required
                                />
                            </div>
                            <div className="mb-3">
                                <label htmlFor="date_fin" className="form-label">Date de fin</label>
                                <input
                                    type="date"
                                    className="form-control"
                                    id="date_fin"
                                    value={formData.date_fin}
                                    onChange={handleChange}
                                    required
                                />
                            </div>

                            {/* Max participants */}
                            <div className="mb-3">
                                <label htmlFor="nb_max_participants" className="form-label">Participants maximum</label>
                                <input
                                    type="number"
                                    className="form-control"
                                    id="nb_max_participants"
                                    value={formData.nb_max_participants}
                                    onChange={handleChange}
                                    min={1}
                                    required
                                />
                            </div>

                            {/* Description */}
                            <div className="mb-3">
                                <label htmlFor="description_event" className="form-label">Description</label>
                                <textarea
                                    className="form-control"
                                    id="description_event"
                                    value={formData.description_event}
                                    onChange={handleChange}
                                    rows={4}
                                    required
                                />
                            </div>

                            <div className="d-grid">
                                <button type="submit" className="btn btn-primary">Créer l'événement</button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default CreateEvent;
