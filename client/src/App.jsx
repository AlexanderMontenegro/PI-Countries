import { BrowserRouter, Routes, Route, Form } from "react-router-dom";

import "./App.css";
import Landing from "./Views/Landing/Landing";
import Details from "./Views/Details/Details";
import Home from "./Views/Home/Home";
import Formu from "./Views/Form/Formu";
import Navbar from "./Components/Navbar/Navbar";

function App() {
  return (
    <div className="div_a">
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/" element={<Landing />} />
          <Route path="/home" element={<Home />} />
          <Route path="/details:id" element={<Details />} />
          <Route path="/formu" element={<Formu />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
