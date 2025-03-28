import React from "react";
import { Outlet } from "react-router-dom";
import { Box, Typography } from "@mui/material";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import InstagramIcon from "@mui/icons-material/Instagram";
import FacebookIcon from "@mui/icons-material/Facebook";
import TwitterIcon from "@mui/icons-material/Twitter";
import DiscordIcon from "@mui/icons-material/Chat";
import Header from "./Header";
import Sidebar from "./Sidebar";
import RightSidebar from "./RightSidebar";

const Layout: React.FC = () => {
  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        height: "100vh",
        backgroundColor: "#f5f5f5",
      }}
    >
      {/* Header */}
      <Header />

      {/* Contenu principal */}
      <Box
        sx={{
          display: "flex",
          flex: 1,
          paddingLeft: "10px",
          paddingRight: "10px",
          position: "relative",
        }}
      >
        {/* Sidebar gauche */}
        <Sidebar />

        {/* Zone de contenu dynamique */}
        <Box
          sx={{
            flex: 1,
            backgroundColor: "#ffffff",
            margin: "10px",
            borderRadius: "8px",
            boxShadow: "0 4px 10px rgba(0, 0, 0, 0.1)",
          }}
        >
          <Outlet />
        </Box>

        {/* Sidebar droite */}
        <RightSidebar />

        {/* Bloc social et mentions en bas à droite */}
        <Box
          sx={{
            position: "absolute",
            bottom: "10px",
            right: "10px",
            textAlign: "center",
          }}
        >
          <Typography variant="body2">Suivez-nous sur :</Typography>
          <Box
            sx={{
              display: "flex",
              justifyContent: "center",
              gap: 1,
              marginTop: "5px",
            }}
          >
            <LinkedInIcon sx={{ color: "#0077B5" }} />
            <InstagramIcon sx={{ color: "#E4405F" }} />
            <FacebookIcon sx={{ color: "#1877F2" }} />
            <TwitterIcon sx={{ color: "#1DA1F2" }} />
            <DiscordIcon sx={{ color: "#5865F2" }} />
          </Box>
          <Typography
            variant="body2"
            sx={{ marginTop: "10px", fontSize: "12px", marginRight: "110px" }}
          >
            Consulter les conditions générales d'utilisation <a href="#">ici</a>
            .
          </Typography>
          <Typography
            variant="body2"
            sx={{ fontWeight: "bold", marginTop: "5px" }}
          >
            SPORT SQUAD 2025
          </Typography>
        </Box>
      </Box>
    </Box>
  );
};

export default Layout;
