import React, { useState } from 'react';
import './loginScreen.css';
import { useDispatch, useSelector } from "react-redux";
import { getWebmaster } from '../../store/actions/webmaster/getWebmaster';
import Header from '../Templates/Wrapper/Header';
import Aside from '../Templates/Wrapper/Aside';
import Main from '../Templates/Wrapper/Main';

const LoginScreen = () => {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [isLoggedIn, setIsLoggedIn] = useState(false);

    const dispatch = useDispatch();
    const webmasters = useSelector(state => state.webmaster.webmasters);

    const handleLogin = (e) => {
        console.log(username);
        e.preventDefault();
        const webmaster = webmasters.find(w => w.Name === username && w.Password === password);
        console.log(webmaster);
        console.log(password);

        if (webmaster) {
            dispatch(getWebmaster(webmaster));
            setIsLoggedIn(true);
        } else {
            alert('Invalid user');
        }
    };

    if (isLoggedIn) {
        return (
            <div>
                <Header />
                <Aside />
                <Main />
            </div>
        );
    }
    return (
        <div className="login-container">
            <div className="login-cube">
                <h1>Welcome to College Administration System</h1>
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

export default LoginScreen;


