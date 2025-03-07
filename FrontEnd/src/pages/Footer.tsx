import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './ConditionsUtilisation.tsx'

const Footer: React.FC = () => {
    return (
        <footer className="bg-dark text-white text-center py-3 mt-auto">
            <p>&copy; 2024 SportsSquad. All rights reserved.</p>
            <p>
                <a href="/conditions-utilisation" className="text-white">
                    Conditions d'utilisation
                </a>
            </p>
        </footer>
    );
};

export default Footer;