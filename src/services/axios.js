import axios from 'axios';

const axiosConfig = axios.create();

axiosConfig.defaults.baseURL = 'http://192.168.1.8';

export default axiosConfig;
