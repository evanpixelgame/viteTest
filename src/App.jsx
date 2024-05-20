// src/App.js
import React, { useState } from 'react';
import './App.css';
import Login from './Login';

function App() {
  const [user, setUser] = useState(null);

  const handleLoginSuccess = (userData) => {
    setUser(userData);
  };

  return (
    <div className="App">
      <header className="App-header">
        <h1>React Login Demo</h1>
        {user ? (
          <div>
            <h2>Welcome, {user.username}!</h2>
            <p>You are now logged in.</p>
          </div>
        ) : (
          <Login onLoginSuccess={handleLoginSuccess} />
        )}
      </header>
    </div>
  );
}

export default App;
