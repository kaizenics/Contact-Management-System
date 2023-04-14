import { Route, Routes } from 'react-router-dom';
import Login from "./pages/Login";
// import Signup from "./pages/Signup";
import Home from "./pages/Home";
import Contacts from "./pages/Contacts";
import Form from "./pages/Form";
import About from "./pages/About";
import './index.css';

function App() {
  return (
   <>
    <Routes>
        <Route path="/" element={<Login />} />
      { /* <Route path="/Signup" element={<Signup />} /> */ }
        <Route path="/Home" element={<Home />} />
        <Route path="/Contacts" element={<Contacts />} />
        <Route path="/Form" element={<Form />} />
        <Route path="/About" element={<About />} />
    </Routes>
   </>
  );
}

export default App;
