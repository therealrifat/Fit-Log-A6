"use client"
import React, { createContext, ReactNode, useState } from "react";

export const PlanContext = createContext({});

const PlanProviderContext = ({ children }: { children: ReactNode }) => {
  const [todayPlan, setTodayPlan] = useState([]);
  const [saveLater, setSavelater] = useState([]);

  const shared = {
    todayPlan,
    setTodayPlan,
    saveLater,
    setSavelater,
  };

  return <PlanContext.Provider value={shared}>{children}</PlanContext.Provider>;
};

export default PlanProviderContext;
