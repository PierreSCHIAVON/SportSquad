import React from "react";
import { Box, IconButton } from "@mui/material";
import HomeIcon from "@mui/icons-material/Home";
import AddCircleIcon from "@mui/icons-material/AddCircle";
import SearchIcon from "@mui/icons-material/Search";
import CalendarTodayIcon from "@mui/icons-material/CalendarToday";
import SettingsIcon from "@mui/icons-material/Settings";

const Sidebar: React.FC = () => {
  return (
    <Box
      sx={{
        width: "80px",
        backgroundColor: "#ffffff",
        height: "calc(107.5% - 71px)",
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
      <Box>
        <IconButton sx={{ marginBottom: "20px", color: "#FFAA00" }}>
          <HomeIcon fontSize="large" />
        </IconButton>
        <IconButton sx={{ marginBottom: "20px", color: "#FFAA00" }}>
          <AddCircleIcon fontSize="large" />
        </IconButton>
        <IconButton sx={{ marginBottom: "20px", color: "#FFAA00" }}>
          <SearchIcon fontSize="large" />
        </IconButton>
        <IconButton sx={{ marginBottom: "20px", color: "#FFAA00" }}>
          <CalendarTodayIcon fontSize="large" />
        </IconButton>
      </Box>
      <IconButton sx={{ marginTop: "auto", color: "#FFAA00" }}>
        <SettingsIcon fontSize="large" />
      </IconButton>
    </Box>
  );
};

export default Sidebar;
