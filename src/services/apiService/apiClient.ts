import axios from 'axios';

const apiClient = () => {
  const BASE_URL = 'https://api.edamam.com';

  const axiosInstance = axios.create({
    baseURL: BASE_URL,
  });
  return axiosInstance;
};

export default apiClient;
