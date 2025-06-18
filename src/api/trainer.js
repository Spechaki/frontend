import axiosInstance from './axiosInstance';

// returns a trainer by id
export const getTrainerById = async (id) => {
  const response = await axiosInstance.get(`/trainers/${id}`);
  return response.data;
};

// returns services of a trainer by id
export const getTrainerServicesById = async (id) => {
  const response = await axiosInstance.get(`/trainers/${id}/services`);
  return response.data;
};

// returns reviews of a trainer by id
export const getTrainerReviewsById = async (id) => {
  const response = await axiosInstance.get(`/trainers/${id}/reviews`);
  return response.data;
};

export const getTrainerStatistics = async (id) => {
  const response = await axiosInstance.get(`/trainers/${id}/statistics`);
  return response.data;
};
