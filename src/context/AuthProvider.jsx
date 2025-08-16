import React, { createContext, useEffect, useState } from "react";
import { getLocalStorage, setLocalStorage } from "../utils/localStorage";

export const AuthContext = createContext();

const AuthProvider = ({ children }) => {
  const [userData, setUserData] = useState(null);

  // Load from localStorage on mount
  useEffect(() => {
    const { employees } = getLocalStorage();
    if (employees) {
      setUserData(employees);
    } else {
      // If nothing in localStorage, initialize it
      setLocalStorage();
      const { employees: initialEmployees } = getLocalStorage();
      setUserData(initialEmployees);
    }
  }, []);

  // Whenever userData changes, sync it back to localStorage
  useEffect(() => {
    if (userData) {
      setLocalStorage(userData);
    }
  }, [userData]);

  return (
    <AuthContext.Provider value={[userData, setUserData]}>
      {children}
    </AuthContext.Provider>
  );
};

export default AuthProvider; 