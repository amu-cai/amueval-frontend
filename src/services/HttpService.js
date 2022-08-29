import axios from 'axios';
import KeyCloakService from './KeyCloakService';

const HttpMethods = {
    GET: 'GET',
    POST: 'POST',
    DELETE: 'DELETE',
};

const _axios = axios.create();

const configure = () => {
    _axios.interceptors.request.use((config) => {
        if (KeyCloakService.isLoggedIn()) {
            const cb = () => {
                config.headers.Authorization = `Bearer ${KeyCloakService.getToken()}`;
                return Promise.resolve(config);
            };
            return KeyCloakService.updateToken(cb);
        }
    });
};

const getAxiosClient = () => _axios;

const HttpService = {
    HttpMethods,
    configure,
    getAxiosClient,
};

export default HttpService;