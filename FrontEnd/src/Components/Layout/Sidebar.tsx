import React from "react";
import { Box, IconButton } from "@mui/material";
import HomeIcon from "@mui/icons-material/Home";
import AddCircleIcon from "@mui/icons-material/AddCircle";
import SearchIcon from "@mui/icons-material/Search";
import CalendarTodayIcon from "@mui/icons-material/CalendarToday";
import SettingsIcon from "@mui/icons-material/Settings";
import LocationOnIcon from "@mui/icons-material/LocationOn";

const Sidebar: React.FC = () => {
  return (
    <Box
      sx={{
        width: "80px",
        backgroundColor: "#ffffff",
        height: "calc(100% - 20px)",
        marginTop: "10px",
        marginLeft: "10px",
        borderRadius: "8px",
        boxShadow: "0 4px 10px rgba(0, 0, 0, 0.1)",
        display: "flex",
        flexDirection: "column",
        justifyContent: "space-between",
        alignItems: "center",
        padding: "10px",
      }}
    >
      {/* Icônes */}
      <Box className="d-flex flex-column align-items-center">
        <IconButton sx={{ marginBottom: "20px", color: "#FFAA00" }} href='/'>
          <HomeIcon fontSize="large" />
        </IconButton>
        <IconButton
          sx={{ marginBottom: "20px", color: "#FFAA00" }}
          href="/dashboard/create-event"
        >
          <AddCircleIcon fontSize="large" />
        </IconButton>
        <IconButton
          sx={{ marginBottom: "20px", color: "#FFAA00" }}
          href="/dashboard/search"
        >
          <SearchIcon fontSize="large" />
        </IconButton>
        <IconButton
          sx={{ marginBottom: "20px", color: "#FFAA00" }}
          href="/dashboard/myparticipations"
        >
          <CalendarTodayIcon fontSize="large" />
        </IconButton>
        <IconButton
          sx={{ marginBottom: "20px", color: "#FFAA00" }}
          href="/dashboard/maps"
        >
          <LocationOnIcon fontSize="large" />
        </IconButton>
      </Box>
      <IconButton sx={{ marginTop: "auto", color: "#FFAA00" }}>
        <SettingsIcon fontSize="large" />
      </IconButton>
    </Box>
  );
};

export default Sidebar;
