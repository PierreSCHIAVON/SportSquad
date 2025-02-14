import { Route, Routes } from 'react-router-dom';
import HomePage from '../pages/Home';
import ConditionsUtilisation from "../pages/ConditionsUtilisation.tsx";

const routes = () => {
    return (
        <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/conditions-utilisation" element={<ConditionsUtilisation />} />
        </Routes>
    );
};

export default routes;
