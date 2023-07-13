import axios from "axios";

const api = axios.create({
  baseURL: "https://gcf5ck-5000.csb.app/",
});

export const createContact = (payload) => api.post(`/`, payload);
export const getContact = () => api.get(`/`);
export const updateContact = (id, payload) => api.put(`/${id}`, payload);
export const deleteContact = (id) => api.delete(`/${id}`);
export const getContactById = (id) => api.get(`/${id}`);

const apis = {
  createContact,
  getContact,
  updateContact,
  deleteContact,
  getContactById,
};

export default apis;
