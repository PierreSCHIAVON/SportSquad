import { Route, Routes } from 'react-router-dom';
import HomePage from '../pages/Home';
import LoginPage from '../pages/Login';

const routes = () => {
    return (
        <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path='/login' element={<LoginPage />} />
        </Routes>
    );
};

export default routes;
