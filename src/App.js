import React from "react";
import Navbar from './components/Navbar.jsx'
import Login from './scenes/auth/Login.jsx'
import './App.css'
import { Routes, Route } from 'react-router-dom';
import SignUp from "./scenes/auth/SignUp.jsx";
import Homepage from "./scenes/homepage/Homepage.jsx";
import SideBar from "./components/SideBar.jsx";
import Dashboard from "./scenes/dashboard/Dashboard.jsx";
import Image from "./scenes/dashboard/Image.jsx";

function App() {

  return (
    <div className="App ">
  <Navbar />
  
  <hr />
  <div className="flex">
  <SideBar/>
  <Routes>
  <Route path="/" element={<Homepage/>} />
  <Route path="/login" element={<Login/>} />
  <Route path="/signup" element={<SignUp/>}/>
  <Route path="/dashboard" element={<Dashboard/>}/>
  <Route path="/image" element={<Image/>}/>
</Routes>
</div>
    </div>
  );
}

export default App;
