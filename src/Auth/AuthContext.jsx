import React, { createContext, useContext, useState } from "react";

const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(() => {
    const saved = localStorage.getItem("user");
    return saved ? JSON.parse(saved) : null;
  });
  const [loading, setLoading] = useState(false);

  // Save user in localStorage
  const saveUser = (userData) => {
    localStorage.setItem("user", JSON.stringify(userData));
  };

  // Login function
  const login = async (email, password) => {
    try {
      setLoading(true);
      const res = await fetch("https://hr-testing.onrender.com/api/auth/login", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email, password }),
      });

      const data = await res.json();      
       if (!res.ok) {
        return { error: data?.message || "Login failed" };
      }
      const userEmail = data?.data?.email;
      setUser(userEmail);
      saveUser(userEmail);
      return { data: userEmail };
    } catch (error) {
      console.error(error);
      return { error: "Login failed. Try again." };
    } finally {
      setLoading(false);
    }
  };

  const register = async (name, email, password) => {
    try {
      setLoading(true);
      const res = await fetch("https://hr-testing.onrender.com/api/auth/register", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ name, email, password }),
      });

      const data = await res.json();

      if (!res.ok) {
        return { error: data?.message || "Registration failed" };
      }

      const registeredUser = data?.data?.user?.email || email;
      setUser(registeredUser);
      saveUser(registeredUser);
      return { data: registeredUser };
    } catch (error) {
      console.error(error);
      return { error: "Registration failed. Try again." };
    } finally {
      setLoading(false);
    }
  };

  const logout = () => {
    localStorage.removeItem("user");
    setUser(null);
  };

  return (
    <AuthContext.Provider value={{ user, login, register, logout, loading }}>
      {children}
    </AuthContext.Provider>
  );
};

// Hook to use AuthContext
// eslint-disable-next-line react-refresh/only-export-components
export const useAuth = () => useContext(AuthContext);