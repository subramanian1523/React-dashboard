import React, { createContext, useContext, useState, useEffect } from 'react';

const AuthContext = createContext(undefined);

export const AuthProvider = ({ children }) => {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [isDarkTheme, setIsDarkTheme] = useState(false);
  const [isCollapsed, setIsCollapsed] = useState(() => {
    return JSON.parse(localStorage.getItem('toggle')) ?? false; // Read from localStorage initially
  });

  useEffect(() => {
    localStorage.setItem('toggle', JSON.stringify(isCollapsed));
  }, [isCollapsed]); // Sync `isCollapsed` with localStorage on change

  const login = () => setIsAuthenticated(true);
  const logout = () => setIsAuthenticated(false);
  const toggleTheme = () => setIsDarkTheme((prev) => !prev);
  const toggleSidebar = () => setIsCollapsed((prev) => !prev); // Toggle sidebar state

  return (
    <AuthContext.Provider value={{ 
      isAuthenticated, 
      login, 
      logout, 
      isDarkTheme, 
      toggleTheme, 
      isCollapsed, 
      toggleSidebar 
    }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error('useAuth must be used within an AuthProvider');
  }
  return context;
};
