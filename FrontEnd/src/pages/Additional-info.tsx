import React, { useState } from 'react';

const AdditionalInfo: React.FC = () => {

    const [username, setUsername] = useState('');
    const [sports, setSports] = useState<string[]>([]);
    const [location, setLocation] = useState('');

    const availableSports = ['Football', 'Basketball', 'Tennis', 'Running', 'Swimming'];

    const handleSportChange = (sport: string) => {
        setSports((prev) =>
            prev.includes(sport) ? prev.filter((s) => s !== sport) : [...prev, sport]
        );
    };

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        console.log({ username, sports, location });
    };

    return (
        <div>
            <h1>Additional Information</h1>
            <form onSubmit={handleSubmit}>
                <div>
                    <label htmlFor="username">Pseudo:</label>
                    <input
                        type="text"
                        id="username"
                        value={username}
                        onChange={(e) => setUsername(e.target.value)}
                        required
                    />
                </div>

                <div>
                    <label>Sports:</label>
                    {availableSports.map((sport) => (
                        <div key={sport}>
                            <input
                                type="checkbox"
                                id={sport}
                                value={sport}
                                checked={sports.includes(sport)}
                                onChange={() => handleSportChange(sport)}
                            />
                            <label htmlFor={sport}>{sport}</label>
                        </div>
                    ))}
                </div>

                <div>
                    <label htmlFor="location">Localisation:</label>
                    <input
                        type="text"
                        id="location"
                        value={location}
                        onChange={(e) => setLocation(e.target.value)}
                        required
                    />
                </div>

                <button type="submit">Submit</button>
            </form>
        </div>
    );
};

export default AdditionalInfo;