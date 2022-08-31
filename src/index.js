import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import './normalize.css';
import App from './App';

const root = ReactDOM.createRoot(document.getElementById('root'));

const renderApp = () => root.render(
    <React.StrictMode>
        <App/>
    </React.StrictMode>
);

renderApp();
//
// KeyCloakService.initKeycloak(renderApp);
// HttpService.configure();