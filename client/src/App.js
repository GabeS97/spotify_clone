import React from 'react';
import Sidebar from './components/Sidebar/Sidebar';
import { Counter } from './features/counter/Counter';
import './App.css'
import Main from './components/Main/Main';
function App() {
  return (
    <div className="app">
      {/* Sidebar */}
      <Sidebar />
      {/* Main */}
      <Main />
      {/* MusicPlayer */}
    </div>
  );
}

export default App;
