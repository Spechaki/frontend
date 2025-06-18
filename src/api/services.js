import axiosInstance from './axiosInstance';

// returns featured services
export const featuredServices = async () => {
  const response = await axiosInstance.get(`/services`, { params: { limit: 3 } });
  return response.data;
};
