import axios from 'axios';

export const axiosBase = axios.create({
    baseURL: 'https://blog-domino.firebaseio.com/'
});