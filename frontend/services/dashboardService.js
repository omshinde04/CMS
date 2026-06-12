import api from './api';

export const dashboardService = {
  getStats:            () => api.get('/dashboard/stats').then((r) => r.data),
  getComplaintsChart:  () => api.get('/dashboard/complaints-chart').then((r) => r.data),
};
