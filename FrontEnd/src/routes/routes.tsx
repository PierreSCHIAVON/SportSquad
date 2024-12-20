import { Route, Routes } from 'react-router-dom';
import HomePage from '../pages/Home';
import LandingPage from '../pages/LandingPage';

const routes = () => {
    return (
        <Routes>
            <Route path="/" element={<LandingPage />} />
            <Route path="/home" element={<HomePage />} />
        </Routes>
    );
};

export default routes;
