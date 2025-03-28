import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import Layout from "./Components/Homepage/Layout";
import Body from "./Components/Homepage/Body";
import About from "./Components/Homepage/About";
import LoginPage from "./pages/Login";
import AdditionalInfo from "./pages/Additional-info";
import PrivateRoute from "./Components/PrivateRoutes"; // Import du composant

const App: React.FC = () => {
  return (
    <BrowserRouter>
      <Routes>
        {/* Routes accessibles sans authentification */}
        <Route path="/login" element={<LoginPage />} />
        <Route path="/login/additional-info" element={<AdditionalInfo />} />

        {/* Routes protégées */}
        <Route element={<PrivateRoute />}>
          <Route path="/" element={<Layout />}>
            <Route index element={<Body />} />
            <Route path="about" element={<About />} />
          </Route>
        </Route>
      </Routes>
    </BrowserRouter>
  );
};

export default App;
