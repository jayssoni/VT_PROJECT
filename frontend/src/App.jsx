
import React, { useContext } from 'react';
import { Routes, Route } from 'react-router-dom';
import Registration from './pages/Registration.jsx';
import Home from './pages/Home.jsx';
import Login from './pages/Login.jsx';
import Nav from './component/Nav.jsx';
import { userDataContext } from './context/UserContext.jsx';


const App = () => {
  let {userdata} = useContext(userDataContext)
  return (
    <>
    {!userdata && <Nav />}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/registration" element={<Registration />} />
        <Route path="/login" element={<Login />} />
      </Routes>
    </>
  );
};

export default App;