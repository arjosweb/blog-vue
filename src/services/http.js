import axios from "axios";

const USER_TOKEN = window.localStorage.getItem("access_token")
const AuthStr = `Bearer ${USER_TOKEN}`;
const baseUrl = 'api/';

const axiosInstance = axios.create({
    baseURL: baseUrl,
    headers: {
        'Authorization': AuthStr,
        'Accept': 'application/json',
    },
    timeout: 8000
});

export const api = {
    /* Endpoints */
    get(endpoint) {
        return axiosInstance.get(endpoint);
    },
    post(endpoint, body) {
        return axiosInstance.post(endpoint, body);
    },
    put(endpoint, body) {
        return axiosInstance.put(endpoint, body);
    },
    delete(endpoint) {
        return axiosInstance.delete(endpoint);
    },
}
