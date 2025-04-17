import React from "react";
import HomeContent from '../HomeContent';

const Body: React.FC = () => {
  return (
    <div
      style={{
        padding: "2rem",
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
      <HomeContent/>
    </div>
  );
};

export default Body;
