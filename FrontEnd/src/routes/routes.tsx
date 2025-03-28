import { Route, Routes } from 'react-router-dom';
import HomePage from '../pages/Home';
<<<<<<< HEAD
import LoginPage from '../pages/Login';
=======
import ConditionsUtilisation from "../pages/ConditionsUtilisation.tsx";
import SearchPage from "../pages/Search.tsx";
import ProfilUser from '../pages/ProfilUser';
>>>>>>> develop

const routes = () => {
    return (
        <Routes>
            <Route path="/" element={<HomePage />} />
<<<<<<< HEAD
            <Route path='/login' element={<LoginPage />} />
=======
            <Route path="/conditions-utilisation" element={<ConditionsUtilisation />} />
>>>>>>> develop
        </Routes>
    );
};

export default routes;
