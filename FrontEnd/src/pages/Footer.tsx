import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
<<<<<<< HEAD

const Footer: React.FC = () => {
    return (
        <footer className="mt-4 text-center">
            <p>&copy; 2024 SportsSquad. All rights reserved.</p>
=======
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
>>>>>>> 0940df774802383dd5df823c1ee01706695fb49d
        </footer>
    );
};

export default Footer;