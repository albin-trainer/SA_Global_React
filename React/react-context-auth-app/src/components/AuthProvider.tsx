import { useState, useEffect } from "react";
import { AuthContext } from "./AuthContext";

export const AuthProvider = ({ children }: { children: React.ReactNode }) => {
  
  const [user, setUser] = useState<any>(null); //uname
  const [loading, setLoading] = useState(true); 

  useEffect(() => {
    const stored = localStorage.getItem("user");

    if (stored) {
      //stores the user back to the context , usually when the page got reloaded ....
      setUser(JSON.parse(stored));
    }

    setLoading(false); 
  }, []);
    ///
  const login = (userData: any) => {
    setUser(userData); //react state
    localStorage.setItem("user", JSON.stringify(userData));
  };

  const logout = () => {
    setUser(null);
    localStorage.removeItem("user");
  };

  return (
    <AuthContext.Provider value={{ user, login, logout, loading }}>
      {children}
    </AuthContext.Provider>
  );
};