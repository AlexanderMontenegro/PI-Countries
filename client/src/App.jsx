import { Routes, Route, useLocation} from "react-router-dom";
import "./App.css";
import Landing from "./Components/Landing/Landing";
import Detail from "./Components/Detail/Detail";
import Home from "./Components/Home/Home";
import Form from "./Components/Form/Form";
import Nav from "./Components/Nav/Nav";

function App() {
  return (
    <div className="App">
      <div className='shadow'>
      { location.pathname !== '/' && location.pathname !== '/home' ? <Nav/>: null }
      <Routes>
         <Route path='/' element={<Landing/>}/>  
         <Route path='/home' element={<Home/>}/>
         <Route path='/detail/:id' element={<Detail/>}/>
         <Route path='/form' element={<Form/>}/>
      </Routes>
      </div>
    </div>
  );
}

export default App;
