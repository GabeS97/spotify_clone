import React from 'react';
import Sidebar from './components/Sidebar/Sidebar';
import { Counter } from './features/counter/Counter';
import './App.css'
import { Routes, Route, Router, useNavigate } from 'react-router-dom';
import Home from './components/Home/Home';
import Login from './components/Authentication/Login/Login';
import Signup from './components/Authentication/Signup/Signup';

function App() {

  return (
    <div className="app">
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/login' element={<Login />} />
        <Route path='/signup' element={<Signup />} />
      </Routes>


    </div>
  );
}

export default App;
