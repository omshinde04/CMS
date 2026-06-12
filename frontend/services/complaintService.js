import api from './api';

export const complaintService = {
  // Public: submit a complaint
  submit: (payload) =>
    api.post('/complaints', payload).then((r) => r.data),

  // Public: track complaint by ID
  track: (id) =>
    api.get(`/complaints/track/${id}`).then((r) => r.data),

  // Admin: get all complaints (supports ?page=&limit=&status=)
  getAll: (params = {}) =>
    api.get('/complaints/admin/all', { params }).then((r) => r.data),

  // Admin: update complaint status
  updateStatus: (id, status) =>
    api.patch(`/complaints/status/${id}`, { status }).then((r) => r.data),
};
