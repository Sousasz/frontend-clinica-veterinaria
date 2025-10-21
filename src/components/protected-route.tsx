  import { useAuth } from '../contexts/auth-context';
  import { useRouter } from 'next/router';
  import { useEffect, ReactNode } from 'react';

  interface ProtectedRouteProps {
    children: ReactNode;
    requiredRole?: 'admin' | 'user';
  }

  const ProtectedRoute: React.FC<ProtectedRouteProps> = ({ children, requiredRole = 'user' }) => {
    const { user } = useAuth();
    const router = useRouter();

    useEffect(() => {
      if (!user || user.role !== requiredRole) {
        router.push('/user-signup');
      }
    }, [user, requiredRole, router]);

    if (!user || user.role !== requiredRole) {
      return <div>Carregando...</div>;
    }

    return <>{children}</>;
  };

  export default ProtectedRoute;
  