import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import './normalize.css';
import App from './App';
import UserService from './services/UserService';
import HttpService from './services/HttpService';

const root = ReactDOM.createRoot(document.getElementById('root'));

const renderApp = () => root.render(
    <React.StrictMode>
        <App/>
    </React.StrictMode>
);

UserService.initKeycloak(renderApp);
HttpService.configure();