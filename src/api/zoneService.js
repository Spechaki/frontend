import axiosInstance from './axiosInstance';

export const getZones = async () => {
  const res = await axiosInstance.get('/zones');
  return res.data;
};