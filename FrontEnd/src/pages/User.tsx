import React from 'react';

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

interface ProfilUserProps {
  user: User;
  isOwnProfile: boolean;
}

const ProfilUser: React.FC<ProfilUserProps> = ({ user, isOwnProfile }) => {
  return (
    <div className="profil-user-container">
      <div className="profil-titre">
        <img src={user.photo} alt={`${user.prenom} ${user.nom}`} className="profil-photo" />
        <h1>{user.prenom} {user.nom}</h1>
        <p>@{user.pseudo}</p>
      </div>
      
      <div className="profil-info">
        <h3>Informations personnelles</h3>
        <ul>
          {isOwnProfile && (
            <li><strong>Email:</strong> {user.email}</li> // Affichage de l'email uniquement si c'est le propre profil
          )}
          <li><strong>Niveau:</strong> {user.niveau}</li>
          <li><strong>Sports favoris:</strong> {user.sports_fav}</li>
          <li><strong>Localisation:</strong> {user.localisation}</li>
          <li><strong>Date d'inscription:</strong> {new Date(user.date_inscription).toLocaleDateString()}</li>
        </ul>
      </div>
      
      {isOwnProfile ? (
        <div className="profil-buttons">
          <h3>Modifier votre profil</h3>
          <button className="edit-button">Modifier les informations</button>
          <button className="edit-button">Changer le mot de passe</button>
        </div>
      ) : null
      }
    </div>
  );
};

export default ProfilUser;
