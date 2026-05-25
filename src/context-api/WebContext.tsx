"use client";
import { createContext, useContext, useState } from "react";

interface WebContextProps {
  isOpenNavBar: boolean;
  setIsOpenNavBar: React.Dispatch<React.SetStateAction<boolean>>;
}

export const WebContext = createContext<WebContextProps>({
  isOpenNavBar: false,
  setIsOpenNavBar: () => {},
});

interface WebProviderProps {
  children: React.ReactNode;
}
export const WebProvider: React.FC<WebProviderProps> = ({ children }) => {
  const [isOpenNavBar, setIsOpenNavBar] = useState(false);
  const value = {
    isOpenNavBar,
    setIsOpenNavBar,
  };
  return <WebContext.Provider value={value}>{children}</WebContext.Provider>;
};

export const useWebContext = () => {
  const context = useContext(WebContext);
  if (!context) {
    throw new Error("useWebContext must be used within a WebProvider");
  }
  return context;
};
