"use client";
import { PlanContext } from "@/context/planContext";
import Image from "next/image";
import Link from "next/link";
import React, { useContext, useState } from "react";
import { FaRegStar } from "react-icons/fa";
import { IoIosCheckmark, IoIosTimer } from "react-icons/io";
import { RxCross2 } from "react-icons/rx";
import { SlEnergy } from "react-icons/sl";

const MyPlanSection = () => {
  const { todayPlan, saveLater } = useContext(PlanContext);

  //   const minutes = saveLater.map((plan)=> (plan.duration)).reduce((acc, cur)=> acc+cur,0)
  //   const calories = saveLater.map((plan)=> (plan.caloriesBurned)).reduce((acc, cur)=> acc+cur,0)
  //  console.log(calories)

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
              {active === "today" ? todayPlan.length : saveLater.length}
            </span>
          </div>
          <div className="flex flex-col px-5 space-y-1 border-r border-r-gray-500">
            <span className="text-gray-300 text-[16px]">Minutes</span>
            <span className="text-5xl font-bold">
              {active === "today"
                ? todayPlan
                    .map((plan) => plan.duration)
                    .reduce((acc, cur) => acc + cur, 0)
                : saveLater
                    .map((plan) => plan.duration)
                    .reduce((acc, cur) => acc + cur, 0)}
            </span>
          </div>
          <div className="flex flex-col px-5 space-y-1">
            <span className="text-gray-300 text-[16px]">Calories</span>
            <span className="text-5xl font-bold">
              {active === "today"
                ? todayPlan
                    .map((plan) => plan.caloriesBurned)
                    .reduce((acc, cur) => acc + cur, 0)
                : saveLater
                    .map((plan) => plan.caloriesBurned)
                    .reduce((acc, cur) => acc + cur, 0)}
            </span>
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

      {todayPlan.length || saveLater.length > 0 ? (
        <div className="my-10">
          <div>
            {active === "today" ? (
              <div className="  space-y-5  ">
                {todayPlan.map((plan, ind) => (
                  <div
                    key={ind}
                    className=" grid grid-cols-3 justify-between border bg-[#14171E] border-gray-700 p-4 overflow-hidden rounded-2xl"
                  >
                    <Image
                      src={plan.image}
                      width={120}
                      height={120}
                      alt={plan.name}
                      className="w-40 h-25 object-cover rounded-lg "
                    ></Image>

                    {/* card name and details  */}
                    <div className="-ml-57 flex flex-col px-4 justify- space-y-2">
                      <h2 className="text-2xl font-extrabold">{plan.name}</h2>
                      <p className="text-gray-400">{plan.equipment}</p>
                      <div className="flex gap-2">
                        <span className="flex gap-1 items-center">
                          <IoIosTimer className="text-[#ccff22] font-bold" />
                          {plan.duration} Min{" "}
                        </span>
                        <span className="flex gap-1 items-center">
                          <SlEnergy className="text-[#ccff22] font-bold" />
                          {plan.caloriesBurned} kcal
                        </span>
                        <span className="flex gap-1 items-center">
                          <FaRegStar className="text-[#ccff22] font-bold" />
                          {plan.rating}
                        </span>
                      </div>
                    </div>
                        {/* view details and cancel btn cta */}
                    <div className=" flex gap-2 items-center">
                        <button className=" border border-gray-500 w-33 h-8 rounded-2xl">View Details</button>
                        <button className="flex items-center bg-[#ccff22] text-black w-40 px-2 h-8 rounded-2xl"><IoIosCheckmark  className="text-2xl"/>Mark as Done</button>
                        <RxCross2 className="text-xl mx-3" />
                    </div>

                  </div>
                ))}
              </div>
            ) : (
              "save"
            )}
          </div>
        </div>
      ) : (
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
      )}
    </div>
  );
};

export default MyPlanSection;
