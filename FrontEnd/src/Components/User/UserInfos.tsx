import React, { useState } from 'react';
import { updateUser } from '../../services/userService';

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
  // État local pour gérer les valeurs modifiées
  const [editing, setEditing] = useState(false);
  const [updatedUser, setUpdatedUser] = useState<User>(user);
  const [updatingPass, updatePassword] = useState(false);

  // Fonction pour gérer les changements des champs du formulaire user
  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setUpdatedUser((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  const [error, setError] = useState<string | null>(null);

  // Fonction pour gérer la soumission du formulaire user
  const handleSubmitUser = async (e: React.FormEvent) => {
    e.preventDefault();
    setError(null); // Réinitialiser l'erreur avant la requête

    try {
      await updateUser(user.id_user, updatedUser);
      console.log('Utilisateur mis à jour avec succès', updatedUser);
      setEditing(false);
      window.location.reload();
    } catch (err) {
      setError("Une erreur est survenue lors de la mise à jour. Veuillez réessayer.");
    }
  };

  // Fonction pour gérer la soumission du formulaire password
  const handleSubmitPass = async (e: React.FormEvent) => {
    e.preventDefault();
    setError(null); // Réinitialiser l'erreur avant la requête

    try {
      //await UpdatePass(user.id_user, updatedPassword);
      //console.log('Mot de passe mis à jour avec succès');
      setError("La mise a jour n'est pas implémenté"); //a supprimer quand fonction implémenté
      //updatePassword(false);
      //window.location.reload();
    } catch (err) {
      setError("Une erreur est survenue lors de la mise à jour. Veuillez réessayer.");
      //message d'erreur sur le mot de passe ??
    }
  };

  return (
    <div className="profil-user-container">
      <div className="profil-titre">
        <img src={user.photo} alt={`${user.prenom} ${user.nom}`} className="profil-photo" />
        <h1>{user.prenom} {user.nom}</h1>
        <p>@{user.pseudo}</p>
      </div>
      
      {!editing && !updatingPass && (
      <div className="profil-info">
        <h3>Informations personnelles</h3>
        <ul>
          {isOwnProfile && (
            <li><strong>Email:</strong> {user.email}</li>
          )}
          <li><strong>Niveau:</strong> {user.niveau}</li>
          <li><strong>Sports favoris:</strong> {user.sports_fav}</li>
          <li><strong>Localisation:</strong> {user.localisation}</li>
          <li><strong>Date d'inscription:</strong> {new Date(user.date_inscription).toLocaleDateString()}</li>
        </ul>
      </div>
      )}
      
      {isOwnProfile && !editing && !updatingPass ? (
        <div className="profil-buttons">
          <h3>Modifier votre profil</h3>
          <button className="edit-button" onClick={() => setEditing(true)}>Modifier les informations</button>
          <button className="edit-button" onClick={() => updatePassword(true)}>Changer le mot de passe</button>
        </div>
      ) : null}

      {/* Formulaire de modification */}
      {editing && (
        <form onSubmit={handleSubmitUser} className="edit-form">
          <ul>
          <li className="form-group">
            {error && (
              <div className="alert alert-danger mt-4 text-center" role="alert">
                {error}
              </div>
            )}
            <label htmlFor="prenom">Prénom</label>
            <input
              type="text"
              id="prenom"
              name="prenom"
              value={updatedUser.prenom}
              onChange={handleChange}
            />
          </li>
          <li className="form-group">
            <label htmlFor="nom">Nom</label>
            <input
              type="text"
              id="nom"
              name="nom"
              value={updatedUser.nom}
              onChange={handleChange}
            />
          </li>
          <li className="form-group">
            <label htmlFor="email">Email</label>
            <input
              type="email"
              id="email"
              name="email"
              value={updatedUser.email}
              onChange={handleChange}
            />
          </li>
          <li className="form-group">
            <label htmlFor="niveau">Niveau</label>
            <input
              type="text"
              id="niveau"
              name="niveau"
              value={updatedUser.niveau}
              onChange={handleChange}
            />
          </li>
          <li className="form-group">
            <label htmlFor="sports_fav">Sports favoris</label>
            <input
              type="text"
              id="sports_fav"
              name="sports_fav"
              value={updatedUser.sports_fav}
              onChange={handleChange}
            />
          </li>
          <li className="form-group">
            <label htmlFor="localisation">Localisation</label>
            <input
              type="text"
              id="localisation"
              name="localisation"
              value={updatedUser.localisation}
              onChange={handleChange}
            />
          </li>
          </ul>
          <button type="submit" className="save-button">Enregistrer les modifications</button>
          <button type="button" className="cancel-button" onClick={() => setEditing(false)}>Annuler</button>
        </form>
      )}

      {/* Formulaire d'update password */}
      {updatingPass && (
        <form onSubmit={handleSubmitPass} className="update-form">
          <ul>
          <li className="form-group">
            {error && (
              <div className="alert alert-danger mt-4 text-center" role="alert">
                {error}
              </div>
            )}
            <label htmlFor="actualpassword">Mot de passe actuelle</label>
            <input
              type="password"
              id="actualpassword"
              name="actualpassword"
            />
          </li>
          <li className="form-group">
            <label htmlFor="newpassword">Nouveau mot de passe</label>
            <input
              type="password"
              id="newpassword"
              name="newpassword"
            />
          </li>
          <li className="form-group">
            <label htmlFor="newpasswordverif">Verification du mot de passe</label>
            <input
              type="password"
              id="newpasswordverif"
              name="newpasswordverif"
            />
          </li>
          </ul>
          <button type="submit" className="save-button">Enregistrer</button>
          <button type="button" className="cancel-button" onClick={() => updatePassword(false)}>Annuler</button>
        </form>
      )}
    </div>
  );
};

export default ProfilUser;
