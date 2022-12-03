import axios from 'axios';

const apiClient = () => {
  const appId: string = 'af104379';
  const appKey: string = 'f44b03cf3040a8d1818c523958dbc80b';

  const BASE_URL: string = `https://api.edamam.com/api/recipes/v2?type=public&&app_id=${appId}&app_key=${appKey}`;

  const axiosInstance = axios.create({
    baseURL: BASE_URL,
  });
  return axiosInstance;
};

export default apiClient;
