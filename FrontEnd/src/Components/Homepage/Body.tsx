import React from "react";

const Body: React.FC = () => {
  return (
    <div
      style={{
        flex: 1,
        padding: "1rem",
        borderRadius: "8px",
        backgroundColor: "#fafafa",
      }}
    >
      {/* Titre*/}
      <h1
        style={{
          fontFamily: "League Spartan, sans-serif",
          fontSize: "3rem",
          fontWeight: 600,
        }}
      >
        Bienvenue sur SPORTSQUAD
      </h1>
    </div>
  );
};

export default Body;
