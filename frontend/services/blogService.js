import api from './api';

export const blogService = {
  getAll:  (params = {}) => api.get('/blogs', { params }).then((r) => r.data),
  getById: (id)           => api.get(`/blogs/${id}`).then((r) => r.data),
  create:  (payload)      => api.post('/blogs', payload).then((r) => r.data),
  remove:  (id)           => api.delete(`/blogs/${id}`).then((r) => r.data),
};
