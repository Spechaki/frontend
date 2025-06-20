import axios from 'axios';


const API_URL = import.meta.env.VITE_API_KEY;


export const registerUser = async (data) => {
  const response = await axios.post(`${API_URL}/users`, data);
  
  return response.data;
};
