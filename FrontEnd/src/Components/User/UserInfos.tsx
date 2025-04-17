import React, { useState } from "react";
import { updateUser } from "../../services/userService";
import {
  Autocomplete,
  Avatar,
  Box,
  Button,
  Container,
  Divider,
  Grid,
  List,
  ListItem,
  ListItemText,
  Paper,
  TextField,
  Typography,
} from "@mui/material";
import { orange } from "@mui/material/colors";
import { Person as PersonIcon } from "@mui/icons-material";

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
  const [editing, setEditing] = useState(false);
  const [updatedUser, setUpdatedUser] = useState<User>(user);
  const [updatingPass, updatePassword] = useState(false);

  // Convertir la chaîne de sports favoris en tableau pour l'autocomplétion
  const [selectedSports, setSelectedSports] = useState<string[]>(
    user.sports_fav
      ? user.sports_fav.split(";").map((sport) => sport.trim())
      : []
  );

  // Fonction pour gérer les changements des champs du formulaire user
  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setUpdatedUser((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  // Fonction pour gérer les changements des sports favoris
  const handleSportsChange = (
    _event: React.SyntheticEvent,
    newValue: string[]
  ) => {
    setSelectedSports(newValue);
    // Mettre à jour l'utilisateur avec les sports sélectionnés joints par des points-virgules
    setUpdatedUser((prevState) => ({
      ...prevState,
      sports_fav: newValue.join(";"),
    }));
  };

  const [error, setError] = useState<string | null>(null);

  // Fonction pour gérer la soumission du formulaire user
  const handleSubmitUser = async (e: React.FormEvent) => {
    e.preventDefault();
    setError(null); // Réinitialiser l'erreur avant la requête

    try {
      await updateUser(user.id_user, updatedUser);
      console.log("Utilisateur mis à jour avec succès", updatedUser);
      setEditing(false);
      window.location.reload();
    } catch (err) {
      setError(
        "Une erreur est survenue lors de la mise à jour. Veuillez réessayer."
      );
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
      setError(
        "Une erreur est survenue lors de la mise à jour. Veuillez réessayer."
      );
      //message d'erreur sur le mot de passe ??
    }
  };

  const sportsOptions = [
    "Football",
    "BasketBall",
    "Tennis",
    "Petanque",
    "Musculation",
    "Handball",
  ];

  return (
    <Container maxWidth="sm" sx={{ py: 4 }}>
      <Paper elevation={3} sx={{ p: 4, bgcolor: "#fff", borderRadius: 4 }}>
        <Box textAlign="center">
          {user.photo ? (
            <Avatar
              alt={`${user.prenom} ${user.nom}`}
              src={user.photo}
              sx={{ width: 100, height: 100, mx: "auto", mb: 2 }}
            />
          ) : (
            <Avatar
              sx={{
                width: 100,
                height: 100,
                mx: "auto",
                mb: 2,
                bgcolor: orange[500],
              }}
            >
              <PersonIcon sx={{ fontSize: 40 }} />
            </Avatar>
          )}
          <Typography variant="h5" fontWeight="bold">
            {user.prenom} {user.nom}
          </Typography>
          <Typography color="text.secondary">@{user.pseudo}</Typography>
        </Box>

        {!editing && !updatingPass && (
          <Box mt={4}>
            <Typography variant="h6" gutterBottom>
              Informations personnelles
            </Typography>
            <List disablePadding>
              {isOwnProfile && (
                <ListItem disableGutters>
                  <ListItemText primary="Email" secondary={user.email} />
                </ListItem>
              )}
              <ListItem disableGutters>
                <ListItemText primary="Niveau" secondary={user.niveau} />
              </ListItem>
              <ListItem disableGutters>
                <ListItemText
                  primary="Sports favoris"
                  secondary={
                    user.sports_fav ? user.sports_fav.split(";").join(", ") : ""
                  }
                />
              </ListItem>
              <ListItem disableGutters>
                <ListItemText
                  primary="Localisation"
                  secondary={user.localisation}
                />
              </ListItem>
              <ListItem disableGutters>
                <ListItemText
                  primary="Date d'inscription"
                  secondary={new Date(
                    user.date_inscription
                  ).toLocaleDateString()}
                />
              </ListItem>
            </List>
          </Box>
        )}

        {isOwnProfile && !editing && !updatingPass && (
          <Box mt={4}>
            <Divider />
            <Typography variant="h6" mt={2}>
              Modifier votre profil
            </Typography>
            <Grid container spacing={2} mt={1}>
              <Grid item xs={6}>
                <Button
                  fullWidth
                  variant="contained"
                  sx={{ bgcolor: orange[500], color: "white" }}
                  onClick={() => setEditing(true)}
                >
                  Modifier
                </Button>
              </Grid>
              <Grid item xs={6}>
                <Button
                  fullWidth
                  variant="outlined"
                  sx={{ borderColor: orange[500], color: orange[500] }}
                  onClick={() => updatePassword(true)}
                >
                  Changer mot de passe
                </Button>
              </Grid>
            </Grid>
          </Box>
        )}

        {editing && (
          <Box component="form" mt={4} onSubmit={handleSubmitUser}>
            <Typography variant="h6" gutterBottom>
              Modifier les informations
            </Typography>
            {error && (
              <Typography color="error" textAlign="center">
                {error}
              </Typography>
            )}
            <Grid container spacing={2}>
              {[
                { label: "Prénom", name: "prenom" },
                { label: "Nom", name: "nom" },
                { label: "Email", name: "email", type: "email" },
                { label: "Niveau", name: "niveau" },
                { label: "Localisation", name: "localisation" },
              ].map((field) => (
                <Grid item xs={12} key={field.name}>
                  <TextField
                    fullWidth
                    label={field.label}
                    name={field.name}
                    type={field.type || "text"}
                    value={updatedUser[field.name as keyof User]}
                    onChange={handleChange}
                  />
                </Grid>
              ))}
              <Grid item xs={12}>
                <Autocomplete
                  multiple
                  id="sports-favoris"
                  options={sportsOptions}
                  value={selectedSports}
                  onChange={handleSportsChange}
                  renderInput={(params) => (
                    <TextField {...params} label="Sports Favoris" />
                  )}
                  ChipProps={{
                    sx: { bgcolor: orange[100], borderColor: orange[300] },
                  }}
                />
              </Grid>
              <Grid item xs={12}>
                <Button
                  type="submit"
                  fullWidth
                  variant="contained"
                  sx={{ bgcolor: orange[500], color: "white" }}
                >
                  Enregistrer
                </Button>
              </Grid>
              <Grid item xs={12}>
                <Button
                  fullWidth
                  variant="text"
                  onClick={() => setEditing(false)}
                >
                  Annuler
                </Button>
              </Grid>
            </Grid>
          </Box>
        )}

        {updatingPass && (
          <Box component="form" mt={4} onSubmit={handleSubmitPass}>
            <Typography variant="h6" gutterBottom>
              Changer le mot de passe
            </Typography>
            {error && (
              <Typography color="error" textAlign="center">
                {error}
              </Typography>
            )}
            <Grid container spacing={2}>
              {[
                {
                  label: "Mot de passe actuel",
                  name: "actualpassword",
                  type: "password",
                },
                {
                  label: "Nouveau mot de passe",
                  name: "newpassword",
                  type: "password",
                },
                {
                  label: "Vérification du mot de passe",
                  name: "newpasswordverif",
                  type: "password",
                },
              ].map((field) => (
                <Grid item xs={12} key={field.name}>
                  <TextField
                    fullWidth
                    label={field.label}
                    name={field.name}
                    type={field.type}
                    onChange={handleChange}
                  />
                </Grid>
              ))}
              <Grid item xs={12}>
                <Button
                  type="submit"
                  fullWidth
                  variant="contained"
                  sx={{ bgcolor: orange[500], color: "white" }}
                >
                  Enregistrer
                </Button>
              </Grid>
              <Grid item xs={12}>
                <Button
                  fullWidth
                  variant="text"
                  onClick={() => updatePassword(false)}
                >
                  Annuler
                </Button>
              </Grid>
            </Grid>
          </Box>
        )}
      </Paper>
    </Container>
  );
};

export default ProfilUser;
