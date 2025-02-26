"use client";

import type React from "react";
import { createContext, useState, useContext, useEffect, useMemo } from "react";

interface User {
  id: number;
  username: string;
  email: string;
  role: string;
}

interface AuthData {
  token: string;
  user: User;
}

interface AuthContextType {
  authData: AuthData | null;
  isLoading: boolean;
  login: (data: AuthData) => void;
  logout: () => void;
}

const AuthContext = createContext<AuthContextType | undefined>(undefined);

export const AuthProvider: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  const [authData, setAuthData] = useState<AuthData | null>(null);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const loadAuthData = async () => {
      const storedAuthData = localStorage.getItem("authData");
      if (storedAuthData) {
        setAuthData(JSON.parse(storedAuthData));
      }
      setIsLoading(false);
    };
    loadAuthData();
  }, []);

  const login = (data: AuthData) => {
    setAuthData(data);
    localStorage.setItem("authData", JSON.stringify(data));
  };

  const logout = () => {
    setAuthData(null);
    localStorage.removeItem("authData");
  };

  const value = useMemo(
    () => ({
      authData,
      isLoading,
      login,
      logout,
    }),
    [authData, isLoading]
  );

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
};

export const useAuth = () => {
  const context = useContext(AuthContext);
  if (context === undefined) {
    throw new Error("useAuth must be used within an AuthProvider");
  }
  return context;
};
