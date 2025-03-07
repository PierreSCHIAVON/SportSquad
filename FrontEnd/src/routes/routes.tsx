import { Route, Routes } from 'react-router-dom';
import HomePage from '../pages/Home';
<<<<<<< HEAD
=======
import ConditionsUtilisation from "../pages/ConditionsUtilisation.tsx";
import SearchPage from "../pages/Search.tsx";
>>>>>>> 0940df774802383dd5df823c1ee01706695fb49d

const routes = () => {
    return (
        <Routes>
            <Route path="/" element={<HomePage />} />
<<<<<<< HEAD
=======
            <Route path="/conditions-utilisation" element={<ConditionsUtilisation />} />
            <Route path="/search" element={<SearchPage />} />
>>>>>>> 0940df774802383dd5df823c1ee01706695fb49d
        </Routes>
    );
};

export default routes;
