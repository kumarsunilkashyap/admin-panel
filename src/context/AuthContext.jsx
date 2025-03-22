import { createContext, useState, useContext } from "react";

const AuthContext = createContext();

export function AuthProvider({ children }) {
  const [user, setUser] = useState(null);
  const [error, setError] = useState(null);

  const login = async (email, password) => {
    try {
      // Mock API call
      const response = await mockApiLogin(email, password);
      setUser(response.user);
      setError(null);
      return true;
    } catch (err) {
      setError(err.message);
      return false;
    }
  };

  const logout = () => {
    setUser(null);
    setError(null);
  };

  return (
    <AuthContext.Provider value={{ user, login, logout, error }}>
      {children}
    </AuthContext.Provider>
  );
}password123

export const useAuth = () => useContext(AuthContext);

// Mock API function
const mockApiLogin = (email, password) => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (email === "admin@example.com" && password === "") {
        resolve({ user: { email, name: "Admin User" } });
      } else {
        reject(new Error("Invalid credentials"));
      }
    }, 1000);
  });
};
