import React from "react";
import { BrowserRouter, Route, Routes, Navigate } from "react-router-dom";
import "./App.css";
import Layout from "./Components/Layout.tsx";
import Body from "./Components/Layout/Body.tsx";
import About from "./Components/Layout/About.tsx";
import ConditionsUtilisation from "./Components/ConditionsUtilisation.tsx";
import SearchPage from "./Components/Search.tsx";
import ProfilUser from "./Components/ProfilUser.tsx";
import LoginPage from "./Components/Login";
import AdditionalInfo from "./Components/Additional-info";
import PrivateRoute from "./Components/PrivateRoutes";
import LandingPage from "./Components/LandingPage.tsx";

const App: React.FC = () => {
  return (
    <BrowserRouter>
      <Routes>
        {/* Route de la landing page */}
        <Route path="/" element={<LandingPage />} />

        {/* Route de login */}
        <Route path="/login" element={<LoginPage />} />
        <Route path="/login/additional-info" element={<AdditionalInfo />} />

        {/* Routes protégées */}
        <Route element={<PrivateRoute />}>
          <Route path="/dashboard" element={<Layout />}>
            <Route index element={<Body />} />
            <Route path="about" element={<About />} />
            <Route path="search" element={<SearchPage />} />
            <Route path="profil/:id" element={<ProfilUser />} />
            <Route
              path="conditions-utilisation"
              element={<ConditionsUtilisation />}
            />
          </Route>
        </Route>

        {/* Redirection par défaut */}
        <Route path="*" element={<Navigate to="/login" replace />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
