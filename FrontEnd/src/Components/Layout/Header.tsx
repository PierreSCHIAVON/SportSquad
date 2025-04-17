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
      <div className="d-flex align-items-center">
        {/* Notification */}
        <Box sx={{ position: 'relative' }}>
          <IconButton 
            sx={{ color: "#FFAA00", margin: "0 8px" }}
            onClick={() => {
              const panel = document.getElementById('notification-panel');
              if (panel) {
                panel.style.display = panel.style.display === 'none' ? 'flex' : 'none';
              }
            }}
          >
            <Badge badgeContent={3} color="error">
              <NotificationsIcon sx={{ fontSize: 26 }} />
            </Badge>
          </IconButton>
          
          <Box
            id="notification-panel"
            sx={{
              display: 'none',
              position: 'absolute',
              top: '45px',
              right: 0,
              width: '300px',
              maxHeight: '400px',
              backgroundColor: 'white',
              borderRadius: '8px',
              boxShadow: '0 4px 12px rgba(0,0,0,0.15)',
              padding: '12px',
              zIndex: 1000,
              flexDirection: 'column',
              gap: '8px',
              overflow: 'auto'
            }}
          >
            <Box sx={{ fontWeight: 'bold', color: '#333', mb: 1, borderBottom: '1px solid #eee', pb: 1 }}>
              Notifications
            </Box>
            <Box sx={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
              <Box sx={{ p: 1, borderRadius: '4px', backgroundColor: '#f5f5f5', color: '#333', fontSize: '14px' }}>
                <strong>Nouvel événement</strong>: Match de football ce week-end !
              </Box>
              <Box sx={{ p: 1, borderRadius: '4px', backgroundColor: '#f5f5f5', color: '#333', fontSize: '14px' }}>
                <strong>Rappel</strong>: Votre entraînement commence dans 1 heure.
              </Box>
              <Box sx={{ p: 1, borderRadius: '4px', backgroundColor: '#f5f5f5', color: '#333', fontSize: '14px' }}>
                <strong>Pierre</strong> a rejoint votre événement de basketball.
              </Box>
            </Box>
          </Box>
        </Box>

        {/* Bouton + pour créer un événement */}
        <IconButton
          sx={{ color: "#FFAA00", margin: "0 8px" }}
          onClick={() => navigate("/dashboard/create-event")}
        >
          <AddCircleIcon sx={{ fontSize: 26 }} />
        </IconButton>

        {/* Icône de profil */}
        <IconButton
          sx={{ color: "#FFAA00", margin: "0 8px" }}
          onClick={() => navigate("/dashboard/profil")}
        >
          <AccountCircleIcon sx={{ fontSize: 26 }} />
        </IconButton>

        {/* Bouton de déconnexion */}
        <IconButton sx={{ color: "#FFAA00", margin: "0 8px" }} onClick={logout}>
          <HikingRounded sx={{ fontSize: 26 }} />
        </IconButton>
      </div>
    </header>
  );
};

export default Header;
