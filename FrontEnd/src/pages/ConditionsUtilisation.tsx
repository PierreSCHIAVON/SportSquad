import React from "react";

const ConditionsUtilisation: React.FC = () => {
    return (
        <div className="container mt-5">
            <h1>Conditions d'utilisation</h1>
            <p>Bienvenue sur notre plateforme. En utilisant notre service, vous acceptez les conditions suivantes :</p>

            <h2>1. Acceptation des conditions</h2>
            <p>En accédant à notre site, vous acceptez d’être lié par ces conditions générales d’utilisation.</p>

            <h2>2. Utilisation des services</h2>
            <p>Vous devez respecter les lois en vigueur et ne pas utiliser nos services à des fins illégales.</p>

            <h2>3. Responsabilités</h2>
            <p>Nous ne sommes pas responsables des contenus publiés par les utilisateurs.</p>

            <h2>4. Modifications</h2>
            <p>Nous nous réservons le droit de modifier ces conditions à tout moment.</p>

            <h2>5. Contact</h2>
            <p>Pour toute question, contactez-nous à <a href="mailto:support@example.com">support@example.com</a>.</p>
        </div>
    );
};

export default ConditionsUtilisation;
