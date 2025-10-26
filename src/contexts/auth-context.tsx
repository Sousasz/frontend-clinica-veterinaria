'use client'

import { ReactNode, createContext, useState, useEffect } from 'react';
import { jwtDecode } from 'jwt-decode';

type JwtPayload = Record<string, unknown>;

type AuthContextType = {
  user: JwtPayload | null;
  setUser: React.Dispatch<React.SetStateAction<JwtPayload | null>>;
};

export const AuthContext = createContext<AuthContextType | undefined>(undefined);

export const AuthProvider = ({ children }: { children: ReactNode }) => {
  const [user, setUser] = useState<JwtPayload | null>(null);

  useEffect(() => {
    if (typeof window !== 'undefined') {
      const token = localStorage.getItem('token');
      if (!token) return;

      try {
        const decoded = jwtDecode<JwtPayload>(token);
        setUser(decoded);
      } catch {
        setUser(null);
      }
    }
  }, []);

  return (
    <AuthContext.Provider value={{ user, setUser }}>
      {children}
    </AuthContext.Provider>
  );
};