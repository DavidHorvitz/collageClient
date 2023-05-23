import React, { useState } from "react";
import useIdleTimeout from "../useIdleTimeout/useIdleTimeout";
import AddWebmaster from "../CRUD/Webmaster/AddWebmaster";
import { WebmasterData } from "../CRUD/Webmaster/WebmasterData";
const AdminCodeChecker = () => {
  const ADMIN_USERNAME = 'David';
  const ADMIN_PASSWORD = '0522412371';

  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const handleLogin = (e) => {
    e.preventDefault();

    if (username === ADMIN_USERNAME && password === ADMIN_PASSWORD) {
      setIsLoggedIn(true);
    } else {
      alert('Invalid username or password');
    }
  };

  const logout = () => {
    setIsLoggedIn(false);
    setUsername('');
    setPassword('');
  };

  const resetTimeout = useIdleTimeout(120000, logout); // 30 seconds in milliseconds

  if (isLoggedIn) {
    const currentURL = window.location.href;
    if (currentURL.endsWith('/add-webmaster')) {
      return (
        <div>
          <AddWebmaster />
        </div>
      );
    } else if (currentURL.endsWith('/all-webmasters')) {
      return (
        <div>
          <WebmasterData />
        </div>
      );
    }
  }

  return (
    <div className="login-container">
      <div className="login-cube">
        <h1>Enter an administrator code</h1>
        <form onSubmit={handleLogin}>
          <label htmlFor="username">Username:</label>
          <input type="text" id="username" value={username} onChange={(e) => setUsername(e.target.value)} />
          <label htmlFor="password">Password:</label>
          <input type="password" id="password" value={password} onChange={(e) => setPassword(e.target.value)} />
          <button type="submit">Login</button>
        </form>
      </div>
    </div>
  );
};

export default AdminCodeChecker;

