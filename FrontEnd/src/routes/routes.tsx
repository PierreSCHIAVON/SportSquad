import { Route, Routes } from 'react-router-dom';
import HomePage from '../Components/HomeContent.tsx';
import LandingPage from '../pages/LandingPage';
import ConditionsUtilisation from "../Components/ConditionsUtilisation.tsx";
import SearchPage from "../Components/Search.tsx";
import ProfilUser from '../Components/ProfilUser.tsx';

const routes = () => {
    return (
        <Routes>
            <Route path="/" element={<LandingPage />} />
            <Route path="/home" element={<HomePage />} />
            <Route path="/search" element={<SearchPage />} />
            <Route path="/profil/:id" element={<ProfilUser />} />
            <Route path="/conditions-utilisation" element={<ConditionsUtilisation />} />
        </Routes>
    );
};

export default routes;
