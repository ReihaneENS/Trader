import axios from 'axios';
import axiosRetry from 'axios-retry';

axiosRetry(axios, {retries: 5});

axios.defaults.withCredentials = true;
const BASE_URL = 'http://85.239.33.142:8000/api/v1';
const API_URL = 'http://85.239.33.142:8000/api/v1';
export default {
  membershipList(pageNumber) {
    const promise = axios({
      method: 'get',
      url: `${BASE_URL}/membership/`,
      withCredentials: true,
      data: {
        pageNumber,
      }
    });
    return promise;
  },
}
