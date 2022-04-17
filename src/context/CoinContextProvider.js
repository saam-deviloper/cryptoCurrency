import React, { createContext, useEffect, useState } from "react";
import { api } from "../services/api";

export const CoinContext = createContext();

export default function CoinContextProvider({ children }) {
  const [coin, setCoin] = useState([]);
  useEffect(() => {
    const getValue = async () => {
      setCoin(await api());
    };
    getValue();
  }, []);
  return (
  <CoinContext.Provider value={coin}>
  {children}
  </CoinContext.Provider>
  );
}
