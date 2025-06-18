import axiosInstance from './axiosInstance';

export const getServices = async (params = {}) => {
  const query = new URLSearchParams(params).toString();
  const response = await axiosInstance.get(`/services?${query}`);
  return response.data;
};

export const getServiceById = async (id) => {
  const response = await axiosInstance.get(`/services/${id}`);
  return response.data;
};