'use client';

import { createContext, useContext, useEffect, useState } from 'react';
import { useRouter } from 'next/navigation';
import { authService } from '@/services/authService';
import { ROLES } from '@/utils/constants';

const AuthContext = createContext(null);

export function AuthProvider({ children }) {
  const router   = useRouter();
  const [user,    setUser]    = useState(null);
  const [loading, setLoading] = useState(true);

  // Hydrate user from localStorage on mount
  useEffect(() => {
    const stored = authService.getUser();
    if (stored && authService.isAuthenticated()) setUser(stored);
    setLoading(false);
  }, []);

  const login = async (credentials) => {
    const data = await authService.login(credentials);
    setUser(data.user);
    return data;
  };

  const logout = () => {
    authService.logout();
    setUser(null);
    router.replace('/admin/login');
  };

  const hasRole = (role) => user?.role === role;

  const isAdmin = () =>
    user?.role === ROLES.SUPER_ADMIN || user?.role === ROLES.ADMIN;

  return (
    <AuthContext.Provider value={{ user, loading, login, logout, hasRole, isAdmin }}>
      {children}
    </AuthContext.Provider>
  );
}

export function useAuth() {
  const ctx = useContext(AuthContext);
  if (!ctx) throw new Error('useAuth must be used within AuthProvider');
  return ctx;
}
