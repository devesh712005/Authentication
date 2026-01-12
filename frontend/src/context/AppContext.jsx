import { useState } from "react";
import { Children } from "react";
import { createContext } from "react";
import { useEffect } from "react";
import { useContext } from "react";
import api from "../apiIntercepter";
import { toast } from "react-toastify";
const AppContext = createContext(null);
export const AppProvider = ({ children }) => {
  const [user, setUser] = useState(null); //Logged-in user data
  const [loading, setLoading] = useState(true); //Checking login status
  const [isAuth, setIsAuth] = useState(false); //User logged in or not

  async function fetchUser() {
    setLoading(true);
    try {
      const { data } = await api.get(`/api/v1/me`);
      setUser(data);
      setIsAuth(true);
    } catch (error) {
      console.log(error);
    } finally {
      setLoading(false);
    }
  }

  async function logoutUser() {
    try {
      const { data } = await api.post("/api/v1/logout");
      toast.success(data.message);
      setIsAuth(false);
      setUser(null);
    } catch (error) {
      toast.error("Something went wrong");
    }
  }
  useEffect(() => {
    fetchUser();
  }, []);
  return (
    <AppContext.Provider
      value={{ setIsAuth, isAuth, user, setUser, loading, logoutUser }}
    >
      {children}
    </AppContext.Provider>
  );
};

export const AppData = () => {
  const context = useContext(AppContext);
  if (!context) {
    throw new Error("AppData must be used within an AppProvider");
  }
  return context;
};
