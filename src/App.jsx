// src/App.js
import React, { useState } from 'react';
import './App.css';
//import PhaserGame from './PhaserGame';
import Login from './Login';

function App() {
  const [user, setUser] = useState(null);

  const handleLoginSuccess = (userData) => {
    setUser(userData);
  };

  return (
    <div className="App">
      <header className="App-header">
        <h1>My Phaser and React Game</h1>
        {user ? (
          <PhaserGame user={user} />
        ) : (
          <Login onLoginSuccess={handleLoginSuccess} />
        )}
      </header>
    </div>
  );
}

export default App;
