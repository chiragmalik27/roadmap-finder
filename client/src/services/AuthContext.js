// src/context/AuthContext.js
import { createContext, useState, useEffect } from 'react';
import authService from '../services/auth';

const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const checkAuth = async () => {
      try {
        const user = JSON.parse(localStorage.getItem('user'));
        if (user?.token) {
          setUser(user);
          setIsAuthenticated(true);
        }
      } catch (err) {
        console.error(err);
      } finally {
        setIsLoading(false);
      }
    };
    checkAuth();
  }, []);

  const register = async (userData) => {
    const response = await authService.register(userData);
    setUser(response);
    setIsAuthenticated(true);
    return response;
  };

  const login = async (userData) => {
    const response = await authService.login(userData);
    setUser(response);
    setIsAuthenticated(true);
    return response;
  };

  const logout = () => {
    authService.logout();
    setUser(null);
    setIsAuthenticated(false);
  };

  return (
    <AuthContext.Provider
      value={{
        user,
        isAuthenticated,
        isLoading,
        register,
        login,
        logout
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};

export default AuthContext;