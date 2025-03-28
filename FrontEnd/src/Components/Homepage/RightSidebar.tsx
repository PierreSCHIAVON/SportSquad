import React from "react";
import { Box } from "@mui/material";

const RightSidebar: React.FC = () => {
  return (
    <Box
      sx={{
        width: "400px",
        backgroundColor: "#ffffff",
        height: "calc(100% - 130px)",
        marginTop: "10px",
        marginLeft: "10px",
        marginRight: "10px",
        borderRadius: "8px",
        boxShadow: "0 4px 10px rgba(0, 0, 0, 0.1)",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        padding: "10px",
      }}
    >
      {/* Contenu de la RightSidebar */}
      Right Sidebar
    </Box>
  );
};

export default RightSidebar;
