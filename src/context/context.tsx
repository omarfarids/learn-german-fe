import { ContextProps } from "data/dataTypes";
import React, { createContext, useEffect, useState } from "react";

export const URL = "https://learn-german-be.onrender.com";

const AppContext = createContext<Partial<ContextProps>>({});

const AppProvider = ({ children }: any) => {
  const [isLoginForm, setIsLoginForm] = useState(false);
  const [lessons, setLessons] = useState([]);
  const [user, setUser] = useState({
    firstName: localStorage.getItem("firstName"),
    lastName: localStorage.getItem("lastName"),
  });

  const fetchAPI = async () => {
    try {
      const data = await fetch(URL + "/lesson");
      const json = await data.json();
      setLessons(json.BODY);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    fetchAPI();
  }, []);

  return (
    <AppContext.Provider
      value={{
        isLoginForm,
        setIsLoginForm,
        lessons,
        user,
        setUser,
      }}
    >
      {children}
    </AppContext.Provider>
  );
};

export { AppProvider, AppContext };
