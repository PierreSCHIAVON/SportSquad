import { Route, Routes } from 'react-router-dom';
import HomePage from '../Components/HomeContent.tsx';
import LandingPage from '../pages/LandingPage';
import LoginPage from '../pages/Login';
import ConditionsUtilisation from "../Components/ConditionsUtilisation.tsx";
import SearchPage from "../Components/Search.tsx";
import ProfilUser from '../Components/ProfilUser.tsx';

const routes = () => {
    return (
        <Routes>
            <Route path="/dashboard" element={<LandingPage />} />
            <Route path="/home" element={<HomePage />} />
            <Route path='/login' element={<LoginPage />} />
            <Route path="/search" element={<SearchPage />} />
            <Route path="/profil/:id" element={<ProfilUser />} />
            <Route path="/conditions-utilisation" element={<ConditionsUtilisation />} />
            <Route path="/search" element={<SearchPage />} />
            <Route path="/profil/:userId" element={<ProfilUser />} />
        </Routes>
    );
};

export default routes;
