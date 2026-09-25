"use client";
import TabButton from "@/component/ActionBtn/tabButton";
import { PlanContext } from "@/context/planContext";
import React, { useContext, } from "react";


const MyPlanPage = () => {
  const { todayPlan, saveLater } = useContext(PlanContext);
  console.log("todayPlan", todayPlan, "save later", saveLater);


  return (
    <section className="max-w-11/12 mx-auto">
      <div className="text-left my-10 space-y-2">
        <h1 className="text-4xl font-bold">My Plan </h1>
        <p className=" text-gray-500">
          Cap of five lifts for today. Finish them, then load more.
        </p>
      </div>


      {/* bar display part */}


      <div className="my-10">
        <div className="grid grid-cols-3 bg-[#13161D] md:w-300  py-8 rounded-xl border border-gray-700 overflow-hidden justify-between">
          <div className="flex flex-col px-5 space-y-1 border-r border-r-gray-500 ">
            <span className="text-gray-300 text-[16px]">Exercises</span>
            <span className="text-[#ccff00] text-5xl font-bold">{todayPlan.length > 0 ? (todayPlan.length) : 0}</span>
          </div>
          <div className="flex flex-col px-5 space-y-1 border-r border-r-gray-500">
            <span className="text-gray-300 text-[16px]">Minutes</span>
            <span className="text-5xl font-bold">23</span>
          </div>
          <div className="flex flex-col px-5 space-y-1">
            <span className="text-gray-300 text-[16px]">Calories</span>
            <span className="text-5xl font-bold">190</span>
          </div>
        </div>
      </div>

    {/* btn activies add today plan / save plan */}
      <div>
        <TabButton />
      </div>
      

    </section>
  );
};

export default MyPlanPage;
