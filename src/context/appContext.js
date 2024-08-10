import React from "react";
import { useState, createContext, useContext } from "react";
import { useNavigate } from "react-router-dom";

const AppContext = createContext();

export const AppContextProvider = ({ children }) => {
  const history = useNavigate();

  const stateVariables = { history };

  return (
    <AppContext.Provider value={stateVariables}>{children}</AppContext.Provider>
  );
};

export function useAppContext() {
  return useContext(AppContext);
}
