import { Route, Routes } from 'react-router-dom';
import HomePage from '../pages/Home';
import ProfilUser from '../pages/ProfilUser';

const routes = () => {
    return (
        <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/profil/:id" element={<ProfilUser />} />
        </Routes>
    );
};

export default routes;
