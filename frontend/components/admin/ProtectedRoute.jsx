'use client';

import { useEffect } from 'react';
import { useRouter } from 'next/navigation';
import { useAuth } from '@/context/AuthContext';

export default function ProtectedRoute({ children, requiredRole }) {
  const { user, loading, isAdmin } = useAuth();
  const router = useRouter();

  useEffect(() => {
    if (loading) return;
    if (!user) {
      router.replace('/admin/login');
      return;
    }
    if (requiredRole && !isAdmin()) {
      router.replace('/admin/dashboard');
    }
  }, [user, loading, requiredRole, router, isAdmin]);

  if (loading) return null; // spinner added when building layout
  if (!user)   return null;

  return children;
}
