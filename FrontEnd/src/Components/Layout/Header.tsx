import React from "react";
import { IconButton, Badge, Box } from "@mui/material";
import NotificationsIcon from "@mui/icons-material/Notifications";
import AddCircleIcon from "@mui/icons-material/AddCircle";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import { HikingRounded } from "@mui/icons-material";
import logo from "../../assets/sportsquad.png";
import { useNavigate } from "react-router-dom";

const Header: React.FC = () => {
  const navigate = useNavigate();

  const logout = () => {
    // Supprimer le token et l'userId du localStorage
    localStorage.removeItem("token");
    localStorage.removeItem("userId");
    // Rediriger l'utilisateur vers la page de connexion
    window.location.href = "/login";
  };

  return (
    <header
      style={{
        height: "60px",
        backgroundColor: "#FFFFFF",
        marginLeft: "20px",
        marginRight: "20px",
        borderRadius: "8px",
        color: "white",
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",
        padding: "0 1rem",
        boxShadow: "0 2px 5px rgba(0,0,0,0.1)",
      }}
    >
      <Box
        component="img"
        src={logo}
        alt="Sport Squad Logo"
        sx={{ height: "75px", marginLeft: "-12px", cursor: "pointer" }}
        onClick={() => navigate("/dashboard")}
      />
      <div style={{ display: "flex", alignItems: "center" }}>
        {/* Notification */}
        <IconButton sx={{ color: "#FFAA00" }}>
          <Badge badgeContent={4} color="error">
            <NotificationsIcon />
          </Badge>
        </IconButton>

        {/* Bouton + pour créer un événement */}
        <IconButton
          sx={{ color: "#FFAA00" }}
          onClick={() => navigate("/dashboard/create-event")}
        >
          <AddCircleIcon />
        </IconButton>

        {/* Icône de profil */}
        <IconButton
          sx={{ color: "#FFAA00" }}
          onClick={() => navigate("/dashboard/profil")}
        >
          <AccountCircleIcon />
        </IconButton>

        {/* Bouton de déconnexion */}
        <IconButton sx={{ color: "#FFAA00" }} onClick={logout}>
          <HikingRounded />
        </IconButton>
      </div>
    </header>
  );
};

export default Header;
