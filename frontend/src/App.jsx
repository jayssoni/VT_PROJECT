
import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Registration from './pages/Registration.jsx';
import Home from './pages/Home.jsx';
import Login from './pages/Login.jsx';


const App = () => {
  return (
    <>
     
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/registration" element={<Registration />} />
        <Route path="/login" element={<Login />} />
      </Routes>
    </>
  );
};

export default App;