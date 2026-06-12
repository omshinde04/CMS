import api from './api';

export const appointmentService = {
  // Public: book appointment
  book: (payload) =>
    api.post('/appointments', payload).then((r) => r.data),

  // Admin: get all appointments
  getAll: (params = {}) =>
    api.get('/appointments/admin/all', { params }).then((r) => r.data),

  // Admin: update appointment status
  updateStatus: (id, status) =>
    api.patch(`/appointments/status/${id}`, { status }).then((r) => r.data),
};
