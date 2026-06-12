import api from './api';

export const galleryService = {
  getAll:  (params = {}) => api.get('/gallery', { params }).then((r) => r.data),
  upload:  (formData)    =>
    api.post('/gallery', formData, {
      headers: { 'Content-Type': 'multipart/form-data' },
    }).then((r) => r.data),
  remove:  (id)          => api.delete(`/gallery/${id}`).then((r) => r.data),
};
