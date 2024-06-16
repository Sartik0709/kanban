import './App.css'
import { Routes, Route,Navigate } from "react-router-dom";
import { Login } from './components/Login'; 
import { Register } from './components/Register';
import Home from './components/home';

function App() {


  return (
    <>
    <Routes>
      <Route path="/" element={<Navigate to="/login" />} />
      <Route path="/login" element={<Login />} />
      <Route path="/register" element={<Register />} />
      <Route path="/home" element={<Home />} />
    </Routes>
    </>
  )
}

export default App