import React from "react";
import Breadcrumb from "../Components/Breadcrumb.tsx";

const ConditionsUtilisation: React.FC = () => {
    return (
        <div className="container mt-5">
            <Breadcrumb items={[{ label: 'Home', href: '/' }, { label: 'Rechercher', href: '/search' }]} />
            <h1 className="text-center mb-4" style={{ color: '#FFAA00', fontWeight: 'bold' }}>Conditions d'utilisation</h1>
            <p className="lead text-muted text-center">
                Bienvenue sur notre plateforme. En utilisant nos services, vous acceptez les conditions générales suivantes :
            </p>

            <div className="card shadow-lg p-4 mb-4">
                <h2 style={{ color: '#FFAA00' }}>1. Acceptation des conditions</h2>
                <p>
                    En accédant et en utilisant notre site, vous acceptez d’être lié par ces conditions générales d’utilisation.
                </p>
            </div>

            <div className="card shadow-lg p-4 mb-4">
                <h2 style={{ color: '#FFAA00' }}>2. Utilisation des services</h2>
                <ul className="list-group list-group-flush">
                    <li className="list-group-item">Vous devez respecter les lois en vigueur.</li>
                    <li className="list-group-item">Vous ne devez pas utiliser nos services à des fins illégales ou frauduleuses.</li>
                    <li className="list-group-item">Tout comportement nuisible envers les autres utilisateurs est strictement interdit.</li>
                </ul>
            </div>

            <div className="card shadow-lg p-4 mb-4">
                <h2 style={{ color: '#FFAA00' }}>3. Responsabilités</h2>
                <p>
                    Nous ne sommes pas responsables du contenu publié par les utilisateurs. Chacun est tenu de respecter les bonnes pratiques et la législation applicable.
                </p>
            </div>

            <div className="card shadow-lg p-4 mb-4">
                <h2 style={{ color: '#FFAA00' }}>4. Modifications</h2>
                <p>
                    Nous nous réservons le droit de modifier ces conditions à tout moment. Toute modification sera signalée sur cette page.
                </p>
            </div>

            <div className="card shadow-lg p-4 mb-4">
                <h2 style={{ color: '#FFAA00' }}>5. Contact</h2>
                <p>
                    Pour toute question ou assistance, contactez-nous à :
                    <a href="mailto:support@example.com" className="ms-2 text-decoration-none fw-bold text-info">support@example.com</a>.
                </p>
            </div>

            <footer className="text-center mt-5 text-muted border-top pt-3">
                <p>&copy; {new Date().getFullYear()} <span className="fw-bold" style={{ color: '#FFAA00' }}>SportSquad</span>. Tous droits réservés.</p>
            </footer>
        </div>
    );
};

export default ConditionsUtilisation;