import React, { useEffect, useState } from "react";
import { jwtDecode } from "jwt-decode";
import { getUserById } from "../services/userService";
import UserInfos from "./User/UserInfos";
import "bootstrap/dist/css/bootstrap.min.css";

interface User {
  id_user: number;
  nom: string;
  prenom: string;
  pseudo: string;
  email: string;
  password: string;
  niveau: string;
  date_inscription: string;
  photo: string;
  sports_fav: string;
  localisation: string;
}

const getUserIdFromToken = (): number | null => {
  const token = localStorage.getItem("token");
  if (!token) return null;

  try {
    const decoded: any = jwtDecode(token);
    console.log(decoded);
    return decoded.id;
  } catch (error) {
    console.error("Erreur lors du décodage du token", error);
    return null;
  }
};

const ProfilUser: React.FC = () => {
  const [user, setUser] = useState<User | null>(null);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const userId = getUserIdFromToken();
    if (!userId) {
      setError("Utilisateur non authentifié");
      return;
    }

    const fetchUser = async () => {
      try {
        const userData = await getUserById(userId);
        console.log(userData);
        setUser(userData);
        setError(null);
      } catch (err: any) {
        setError(
          err.message || "Erreur lors du chargement des données utilisateur."
        );
        setUser(null);
      }
    };

    fetchUser();
  }, []);

  if (error) {
    return (
      <div className="container">
        <div className="alert alert-danger mt-4 text-center" role="alert">
          {error}
        </div>
      </div>
    );
  }

  if (!user) {
    return (
      <div className="container">
        <div className="alert alert-warning mt-4 text-center" role="alert">
          Utilisateur non trouvé.
        </div>
      </div>
    );
  }

  const isOwnProfile = getUserIdFromToken() === user.id_user;

  return (
    <div className="container" style={{
      maxHeight: 'calc(100vh - 100px)',
      overflowY: 'auto'}}>
      <UserInfos user={user} isOwnProfile={isOwnProfile} />
    </div>
  );
};

export default ProfilUser;
