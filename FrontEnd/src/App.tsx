import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import Layout from "./Components/Homepage/Layout";
import Body from "./Components/Homepage/Body";
import About from "./Components/Homepage/About";

const App: React.FC = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          {/* Route par défaut */}
          <Route index element={<Body />} />
          {/* Autres pages */}
          <Route path="about" element={<About />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
};

export default App;
