import React from 'react';
import Sidebar from './components/Sidebar/Sidebar';
import { Counter } from './features/counter/Counter';
import './App.css'
import { Routes, Route, Router, useNavigate } from 'react-router-dom';
import Home from './components/Home/Home';
import Login from './components/Authentication/Login/Login';
import Signup from './components/Authentication/Signup/Signup';
import useAuth from './useAuth';
const code = new URLSearchParams(window.location.search).get('code');

function App() {
  // const accessToken = useAuth(code)
  return (
    <div className="app">

      <Routes>
        <Route path='/' element={<Home code={code} />} />
        <Route path='/login' element={<Login />} />
        <Route path='/signup' element={<Signup />} />
      </Routes>


    </div>
  );
}

export default App;
