import { Route, Routes } from 'react-router-dom';
import HomePage from '../pages/Home';
import LandingPage from '../pages/LandingPage';
import ConditionsUtilisation from "../pages/ConditionsUtilisation.tsx";
import SearchPage from "../pages/Search.tsx";
import ProfilUser from '../pages/ProfilUser';

const routes = () => {
    return (
        <Routes>
            <Route path="/" element={<LandingPage />} />
            <Route path="/home" element={<HomePage />} />
            <Route path="/conditions-utilisation" element={<ConditionsUtilisation />} />
        </Routes>
    );
};

export default routes;
