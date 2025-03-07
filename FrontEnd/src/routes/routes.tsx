import { Route, Routes } from 'react-router-dom';
import HomePage from '../pages/Home';
import ConditionsUtilisation from "../pages/ConditionsUtilisation.tsx";
import SearchPage from "../pages/Search.tsx";

const routes = () => {
    return (
        <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/conditions-utilisation" element={<ConditionsUtilisation />} />
            <Route path="/search" element={<SearchPage />} />
        </Routes>
    );
};

export default routes;
