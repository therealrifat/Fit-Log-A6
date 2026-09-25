"use client";
import { PlanContext } from "@/context/planContext";
import Link from "next/link";
import React, { useContext, useState } from "react";

const MyPlanSection = () => {
  const { todayPlan, saveLater  } = useContext(PlanContext);
 
//   const minutes = saveLater.map((plan)=> (plan.duration)).reduce((acc, cur)=> acc+cur,0)
  const calories = saveLater.map((plan)=> (plan.caloriesBurned)).reduce((acc, cur)=> acc+cur,0)
 console.log(calories)
//   saveLater
  const [active, setActive] = useState("today");
  const handlesButtons = (clicked: "today" | "saved") => {
    setActive(clicked);
  };

  return (
    <div>
      {/* bar display */}
      <div className="my-10">
        <div className="grid grid-cols-3 bg-[#13161D] md:w-300  py-8 rounded-xl border border-gray-700 overflow-hidden justify-between">
          <div className="flex flex-col px-5 space-y-1 border-r border-r-gray-500 ">
            <span className="text-gray-300 text-[16px]">Exercises</span>
            <span className="text-[#ccff00] text-5xl font-bold">
              {active === "today" ? (todayPlan.length) : (saveLater.length) }
            </span>
          </div>
          <div className="flex flex-col px-5 space-y-1 border-r border-r-gray-500">
            <span className="text-gray-300 text-[16px]">Minutes</span>
            <span className="text-5xl font-bold">{active === "today" ? (todayPlan.map((plan)=> (plan.duration)).reduce((acc, cur)=> acc+cur,0)): (saveLater.map((plan)=> (plan.duration)).reduce((acc, cur)=> acc+cur,0)) }</span>
          </div>
          <div className="flex flex-col px-5 space-y-1">
            <span className="text-gray-300 text-[16px]">Calories</span>
            <span className="text-5xl font-bold">{active === "today" ? (todayPlan.map((plan)=> (plan.caloriesBurned)).reduce((acc, cur)=> acc+cur,0)):(saveLater.map((plan)=> (plan.caloriesBurned)).reduce((acc, cur)=> acc+cur,0))}</span>
          </div>
        </div>
      </div>



      {/* tab button activity  */}
      <div className="border border-[#232732] bg-[#151921] rounded-2xl px-2 py-2 w-70 flex gap-1">
        <button
          onClick={() => handlesButtons("today")}
          className={`${active === "today" ? "border bg-[#1F242D] border-[#2B303D]" : " "} rounded-2xl px-4 py-1 cursor-pointer`}
        >
          Today’s Plan
        </button>
        <button
          onClick={() => handlesButtons("saved")}
          className={`${active === "saved" ? "border bg-[#1F242D] border-[#2B303D]" : " "} rounded-2xl px-10 py-1 cursor-pointer`}
        >
          Saved
        </button>
      </div>




      {/* empty card display */}
      <div className="my-10">
            <div className=" flex flex-col items-center py-25 border border-gray-800 space-y-5 rounded-2xl">
            <h4 className="text-4xl font-extrabold">NOTHING HERE YET</h4>
            <p className="text-gray-600">
                Browse the library and add a lift to get today moving.
            </p>
            <Link href={"/"}>
                <button className=" bg-[#ccff00] text-black px-5 py-1 rounded-2xl cursor-pointer">
                Go to workouts
                </button>
            </Link>
            </div>
      </div>


    </div>
  );
};

export default MyPlanSection;
