/* eslint-disable @typescript-eslint/no-explicit-any */

import { useState, useEffect } from "react";
import api from "../api/Api";
import { useNavigate } from "react-router-dom";
import './LoginPage.css';

const LoginPage = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState<string | null>(null);
  const [isLogin, setIsLogin] = useState(true); // Gère l'affichage du formulaire
  const navigate = useNavigate();

  useEffect(() => {
    const token = localStorage.getItem("token");
    if (token) {
      navigate("/dashboard");
    }
  }, [navigate]);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setError(null);

    if (password.length < 6) {
      setError("Le mot de passe doit contenir au moins 6 caractères.");
      return;
    }

    try {
      const endpoint = isLogin ? "/login" : "/register";
      const response = await api.post(endpoint, { email, password });
      console.log(response.data);

      if (isLogin) {
        localStorage.setItem("token", response.data.token);
        if (response.data.newAccount) {
          navigate("/login/additional-info", { state: { email } });
        } else {
          navigate("/dashboard");
        }
      } else {
        setIsLogin(true);
      }
    } catch (error: any) {
      console.log(error.response);
      setError(error.response?.data?.error || error.response?.data?.message);
    }
  };

  return (
      <div className="login-container">
        <div className="logo-container">
          <div className="logo">
            <span className="sport">Sport</span>
            <span className="squad">Squad</span>
          </div>
        </div>

        <div className="login-card">
          <h2 className="user-login-title">
            {isLogin ? "Se connecter" : "Créer un compte"}
          </h2>
          <form onSubmit={handleSubmit}>
            <div className="input-group">
              <span className="input-icon">📧</span>
              <input
                  type="email"
                  className="input-field"
                  placeholder="Email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
              />
            </div>

            <div className="input-group">
              <span className="input-icon">🔒</span>
              <input
                  type="password"
                  className="input-field"
                  placeholder="Mot de passe"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  minLength={6}
                  required
              />
            </div>

            {error && <div className="alert alert-danger">{error}</div>}

            <button type="submit" className="login-button">
              {isLogin ? "Se connecter" : "S'inscrire"}
            </button>
          </form>

          <div className="text-center mt-3">
            <button className="btn btn-link" onClick={() => setIsLogin(!isLogin)}>
              {isLogin ? "Créer un compte" : "Déjà un compte ? Connectez-vous"}
            </button>
          </div>
        </div>
      </div>
  );
};

export default LoginPage;
