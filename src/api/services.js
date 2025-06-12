import axios from 'axios';


const API_URL = import.meta.env.VITE_API_KEY;


export const featuredServices = async () => {
  const response = await axios.get(`${API_URL}/services`, { params: { limit: 3 } });
  return response.data;
};
