import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import Layout from "./Components/Layout.tsx";
import Body from "./Components/Layout/Body.tsx";
import About from "./Components/Layout/About.tsx";
import ConditionsUtilisation from "./Components/ConditionsUtilisation.tsx";
import SearchPage from "./Components/Search.tsx";
import ProfilUser from './Components/ProfilUser.tsx';

const App: React.FC = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          {/* Route par défaut */}
          <Route index element={<Body />} />
          {/* Autres pages */}
          <Route path="about" element={<About />} />
          <Route path="search" element={<SearchPage />} />
          <Route path="profil/:id" element={<ProfilUser />} />
          <Route path="conditions-utilisation" element={<ConditionsUtilisation />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
};

export default App;
