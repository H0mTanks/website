import { createContext, useState } from "react";

export const GlobalContext = createContext(null);

export function GlobalProvider({ children }) {
  const [isLogin, setIsLogin] = useState(true);
  const [data, setData] = useState([
    { id: 1, task: "Wake up", complete: false },
    { id: 2, task: "Eat breakfast", complete: false },
    { id: 3, task: "Go to work", complete: false },
  ]);

  return (
    <GlobalContext.Provider value={{ isLogin, setIsLogin, data, setData }}>
      {children}
    </GlobalContext.Provider>
  );
}
