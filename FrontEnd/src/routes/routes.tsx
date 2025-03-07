import { Route, Routes } from 'react-router-dom';
import HomePage from '../pages/Home';
import ConditionsUtilisation from "../pages/ConditionsUtilisation.tsx";
import ProfilUser from '../pages/ProfilUser';

const routes = () => {
    return (
        <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/conditions-utilisation" element={<ConditionsUtilisation />} />
            <Route path="/profil/:id" element={<ProfilUser />} />
        </Routes>
    );
};

export default routes;
