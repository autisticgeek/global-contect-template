import { createContext, useState } from "react";

export const GlobalContext = createContext();

export function GlobalContextProvider({ children }) {
  const [globalContext, setGlobalContext] = useState({
    name: "",
    email: "",
  });
  const reducer = (action) => {
    console.log(action)
    switch (action.type) {
      default:
        break;
      case "update_name":
        setGlobalContext({ ...globalContext, name: action.payload });
        break;
      case "update_email":
        setGlobalContext({ ...globalContext, email: action.payload });
        break;
    }
  };

  const updateName = (payload) => reducer({ type: "update_name", payload });
  const updateEmail = (payload) => reducer({ type: "update_email", payload });

  return (
    <GlobalContext.Provider value={{ updateEmail, updateName, globalContext }}>
      {children}
    </GlobalContext.Provider>
  );
}
