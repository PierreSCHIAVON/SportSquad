import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
// import "./App.css";
import Layout from "./Components/Layout.tsx";
import Body from "./Components/Layout/Body.tsx";
import About from "./Components/Layout/About.tsx";
import ConditionsUtilisation from "./Components/ConditionsUtilisation.tsx";
import SearchPage from "./Components/Search.tsx";
import ProfilUser from "./Components/ProfilUser.tsx";
import LoginPage from "./Components/Login";
import AdditionalInfo from "./Components/Additional-info";
import PrivateRoute from "./Components/PrivateRoutes";
import EventPage from "./Components/EventPage.tsx";
import CreateEvent from "./Components/CreateEvent.tsx";
import LandingPage from "./Components/LandingPage.tsx";

const App: React.FC = () => {
  const isAuthenticated = !!localStorage.getItem("token");

  return (
    <BrowserRouter>
      <Routes>
        {/* Si connecté → dashboard, sinon → landing */}
        <Route
          path="/"
          element={
            isAuthenticated ? <Navigate to="/dashboard" /> : <LandingPage />
          }
        />

        {/* Login seulement si non connecté */}
        <Route
          path="/login"
          element={
            isAuthenticated ? <Navigate to="/dashboard" /> : <LoginPage />
          }
        />
        <Route path="/login/additional-info" element={<AdditionalInfo />} />

        {/* Routes protégées */}
        <Route element={<PrivateRoute />}>
          <Route path="/dashboard" element={<Layout />}>
            <Route index element={<Body />} />
            <Route path="about" element={<About />} />
            <Route path="search" element={<SearchPage />} />
            <Route path="profil" element={<ProfilUser />} />
            <Route path="event/:id" element={<EventPage />} />
            <Route path="create-event" element={<CreateEvent />} />
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
