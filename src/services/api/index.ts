import axios from 'axios';
import AppConfig from 'constants/config';

const restApi = axios.create({baseURL: AppConfig.URL});

export default restApi;
