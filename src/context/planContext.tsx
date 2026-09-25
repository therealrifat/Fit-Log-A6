"use client"
import { IPlanType } from "@/types/type";
import React, { createContext, ReactNode, useState } from "react";

interface PlanContext {
  todayPlan: IPlanType[];
  setTodayPlan: React.Dispatch<React.SetStateAction<IPlanType[]>>
  saveLater: IPlanType[];
  setSavelater: React.Dispatch<React.SetStateAction<IPlanType[]>>
}

export const PlanContext = createContext<PlanContext>({
    todayPlan: [],
    setTodayPlan: () => {},
    saveLater:[],
    setSavelater: ()=>{}
});

const PlanProviderContext = ({ children }: { children: ReactNode }) => {
  const [todayPlan, setTodayPlan] = useState<IPlanType[]>([]);
  const [saveLater, setSavelater] = useState<IPlanType[]>([]);

  const shared = {
    todayPlan,
    setTodayPlan,
    saveLater,
    setSavelater,
  };

  return <PlanContext.Provider value={shared}>{children}</PlanContext.Provider>;
};

export default PlanProviderContext;
