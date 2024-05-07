import { BrowserRouter, Routes, Route, Form } from "react-router-dom";

import "./App.css";
import Landing from "./Views/Landing/Landing";
import Details from "./Views/Details/Details";
import Home from "./Views/Home/Home";
import Formu from "./Views/Form/Formu";
import Navbar from "./Components/Navbar/Navbar";

function App() {
  return (
      <div>
        <BrowserRouter>
          <Navbar />
          <Routes>
            <Route path="/" Component={Landing} />
            <Route path="/home" Component={Home} />
            <Route path="/details:id" Component={Details} />
            <Route path="/formu" Component={Formu} />
          </Routes>
        </BrowserRouter>
      </div>
  )
}

export default App;
