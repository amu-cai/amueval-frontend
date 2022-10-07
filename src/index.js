import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import './normalize.css';
import App from './App';
import KeyCloakService from './services/KeyCloakService';
import HttpService from './services/HttpService';

const root = ReactDOM.createRoot(document.getElementById('root'));

const renderApp = () => root.render(
    <React.StrictMode>
        <App/>
    </React.StrictMode>
);

KeyCloakService.initKeycloak(renderApp);
HttpService.configure();

renderApp();