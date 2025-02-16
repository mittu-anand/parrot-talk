import { enqueueSnackbar } from "notistack";
import React, { createContext, useContext, useState, useEffect } from "react";
import { SESSION_URL } from "../common/Url";

const SessionContext = createContext();

export const useSessionContext = () => {
  return useContext(SessionContext);
};

export const SessionProvider = ({ children }) => {
  const [session, setSession] = useState(null);
  const [loading, setLoading] = useState(true);

  const fetchSession = async () => {
    try {
      const res = await fetch(SESSION_URL.base);
      const data = await res.json();
      setSession(data);
    } catch (error) {
      enqueueSnackbar(`Failed to fetch session:${error}`, {variant: 'error'});
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchSession();
  }, []);

  return (
    <SessionContext.Provider value={{ session, loading }}>
      {children}
    </SessionContext.Provider>
  );
};
