import { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

const LoginPage = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState<string | null>(null);
    const navigate = useNavigate();

    // Fonction pour gérer la soumission du formulaire
    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();

        // Effacer les erreurs précédentes
        setError(null);

        try {
            // Envoi des données de login au backend (assure-toi que l'URL est correcte)
            const response = await axios.post('/api/login', {
                email,
                password,
            });

            // Si l'authentification réussit, on récupère le token
            const { token } = response.data;

            // Stocke le token JWT dans le localStorage ou sessionStorage
            localStorage.setItem('token', token);

            // Rediriger vers une page protégée, comme la page d'accueil ou tableau de bord
            navigate('/dashboard');
        } catch {
            // En cas d'erreur, afficher un message d'erreur
            setError('Email ou mot de passe incorrect');
        }
    };

    return (
        <div className="login-page">
            <h2>Login</h2>
            <form onSubmit={handleSubmit}>
                <div className="form-group">
                    <label htmlFor="email">Email</label>
                    <input
                        type="email"
                        id="email"
                        name="email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        required
                    />
                </div>

                <div className="form-group">
                    <label htmlFor="password">Mot de passe</label>
                    <input
                        type="password"
                        id="password"
                        name="password"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        required
                    />
                </div>

                {error && <div className="error-message">{error}</div>}

                <button type="submit" className="login-btn">Se connecter</button>
            </form>
        </div>
    );
};

export default LoginPage;
