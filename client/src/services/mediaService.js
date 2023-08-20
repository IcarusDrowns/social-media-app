import axios from 'axios';

const API_URL = 'http://localhost:6001/api/media';

export const getAllMedia = async () => {
  return await axios.get(API_URL);
};

export const getMediaByType = async (type) => {
  return await axios.get(`${API_URL}/${type}`);
};

export const createMedia = async (media) => {
  return await axios.post(API_URL, media);
};

export const updateMedia = async (id, media) => {
  return await axios.patch(`${API_URL}/${id}`, media);
};

export const deleteMedia = async (id) => {
  return await axios.delete(`${API_URL}/${id}`);
};
