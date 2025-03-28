import { Route, Routes } from 'react-router-dom';
import HomePage from '../pages/Home';
import LoginPage from '../pages/Login';
import ConditionsUtilisation from "../pages/ConditionsUtilisation.tsx";
import SearchPage from "../pages/Search.tsx";
import ProfilUser from '../pages/ProfilUser';

const routes = () => {
    return (
        <Routes>
            <Route path="/dashboard" element={<HomePage />} />
            <Route path='/login' element={<LoginPage />} />
            <Route path="/conditions-utilisation" element={<ConditionsUtilisation />} />
            <Route path="/search" element={<SearchPage />} />
            <Route path="/profil/:userId" element={<ProfilUser />} />
        </Routes>
    );
};

export default routes;
