"use client";
import { PlanContext } from "@/context/planContext";
import { IPlanType } from "@/types/type";
import Image from "next/image";
import Link from "next/link";
import React, { useContext, useState } from "react";
import { FaRegStar } from "react-icons/fa";
import { IoIosCheckmark, IoIosTimer } from "react-icons/io";
import { RxCross2 } from "react-icons/rx";
import { SlEnergy } from "react-icons/sl";
import { toast } from "react-toastify";
import EmptyCard from "./emptyCard";






const MyPlanSection = () => {


  const { todayPlan, setTodayPlan, saveLater, setSavelater } =
    useContext(PlanContext);

  const [active, setActive] = useState("today");
  const handlesButtons = (clicked: "today" | "saved") => {
    setActive(clicked);
  };

  const handlesTodayPlan = (planCard: IPlanType) => {
    const removePlan = todayPlan.filter((tp) => tp.id !== planCard.id);
    setTodayPlan(removePlan);
    toast.success(`Remove ${planCard.name}`);
  };

  const handlesSavedPlan = (sevedPlan: IPlanType) => {
    const removePlan = saveLater.filter((tp) => tp.id !== sevedPlan.id);
    setSavelater(removePlan);
    toast.success(`Remove ${sevedPlan.name}`);
  };
  const markDone = (data: IPlanType) => {
    toast.success(`Done ${data.name}`);
  };

// sort functionality


  const [sortBy, setSortBy] =useState<"duration" | "calories" | "rating">("duration")
  // console.log(sortBy, "sortby")
   
  const sortWorkout =(workouts:IPlanType[])=>{
      const workoutsCopy =[...workouts]

      if(sortBy ==="duration"){
        workoutsCopy.sort((a,b)=> b.duration - a.duration)
      }else if(sortBy ==="calories"){
        workoutsCopy.sort((a,b)=> b.caloriesBurned - a.caloriesBurned)
      }else if(sortBy ==="rating"){
        workoutsCopy.sort((a,b)=> b.rating - a.rating)
      }
      return workoutsCopy
      
  }

  const sortedTodayWorkout = sortWorkout(todayPlan)
  const sortedSaveWorkout = sortWorkout(saveLater)

  // style part 



  return (
    <div>
      {/* bar display */}
      <div className="my-10">
        <div className="grid grid-cols-3 bg-[#13161D] lg:w-300  py-8 rounded-xl border border-gray-700 overflow-hidden justify-between">
          <div className="flex flex-col px-5 space-y-1 border-r border-r-gray-500 ">
            <span className="text-gray-300 text-[16px]">Exercises</span>
            <span className="text-[#ccff00] text-5xl font-bold font-oswald">
              {active === "today" ? todayPlan.length : saveLater.length}
            </span>
          </div>
          <div className="flex flex-col px-5 space-y-1 border-r border-r-gray-500">
            <span className="text-gray-300 text-[16px]">Minutes</span>
            <span className="text-5xl font-bold font-oswald">
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
            <span className="text-5xl font-bold font-oswald">
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


      
      <div className="flex justify-between items-center ">
        <div className="border border-[#232732] bg-[#151921] rounded-2xl px-2 py-2 sm:w-50 md:w-70 flex gap-1">
          <button
            onClick={() => handlesButtons("today")}
            className={`${active === "today" ? "border bg-[#1F242D] border-[#2B303D]" : " "} sm:rounded-2xl rounded-md sm:px-4 sm:py-1 cursor-pointer`}
          >
            Today’s Plan
          </button>
          <button
            onClick={() => handlesButtons("saved")}
            className={`${active === "saved" ? "border bg-[#1F242D] border-[#2B303D]" : " "} sm:rounded-2xl rounded-md sm:px-10 sm:py-1 cursor-pointer`}
          >
            Saved
          </button>
        </div>

          {/* sort by section */}
        
        <div className="flex w-45 items-center ">
          <p className="px-2 text-left">Sort By</p>
          <select
            value={sortBy}
            onChange={(e)=> setSortBy(e.target.value as "duration" | "calories" | "calories")}

            className=" w-25 select select-success  z-10"
          >

            <option value={"duration"}>Duration</option>
            <option value={"calories"}>Calories</option>
            <option value={"rating"}>Rating</option>
          </select>
        </div>
      </div>

      {/* workout card display */}

      <div className="my-10">
        <div>
          {/* today plan */}
          {active === "today" ? (
            todayPlan.length > 0 ? (
              <div className=" space-y-5  ">
                {sortedTodayWorkout.map((plan, ind) => (
                  <div
                    key={ind}
                    className=" flex gap-2 md:justify-between justify-center border bg-[#14171E] border-gray-700 p-2 md:p-4 overflow-hidden rounded-2xl"
                  >
                    <Image
                      src={plan.image}
                      width={120}
                      height={120}
                      alt={plan.name}
                      className="lg:w-40 w-25 md:w-35 h-25 object-cover rounded-lg "
                    ></Image>

                    {/* card name and details  */}
                    <div className="lg:-ml-100 -ml-5 flex flex-col px-4 space-y-2">
                      <h2 className='lg:text-2xl md:text-xl sm:text-[20px] text-[14px] font-extrabold'>{plan.name}</h2>
                      <p className='text-gray-400 md:text-[16px] text-[12px]'>{plan.equipment}</p>
                      <div className="flex gap-2 md:text-[14px] sm:text-[14px] text-[8px]">
                          <span className="flex gap-1 items-center">
                            <IoIosTimer className="text-[#ccff22] font-bold" />
                            {plan.duration} Min
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
                    <div className=" flex gap-2 items-center justify-end">
                      <Link href={`/details-page/${plan.id}`}>
                        <button className=" border px-1 border-gray-500 md:text-lg sm:text-[14px] text-[10px] md:w-33 md:h-8 md:rounded-2xl rounded-md cursor-pointer">
                          View Details
                        </button>
                      </Link>
                      <button
                        onClick={() => markDone(plan)}
                        className=" flex items-center px-1 text-[10px] sm:text-[14px] md:text-[16px] bg-[#ccff22] text-black md:w-40 sm:w-30 md:px-2 md:h-8 md:rounded-2xl rounded-md "
                      >
                        <IoIosCheckmark className="" />
                        Mark as Done
                      </button>
                      <RxCross2
                        onClick={() => handlesTodayPlan(plan)}
                        className="text-xl mx-3 cursor-pointer"
                      />
                    </div>
                  </div>
                ))}
              </div>
            ) : (
              <EmptyCard />
            )
          ) : 
          
        
          
          // saved tabs

          saveLater.length > 0 ? (
            <div className=" space-y-5  ">
              {sortedSaveWorkout.map((plan, ind) => (
                <div
                  key={ind}
                  className=" flex gap-2 md:justify-between justify-center border bg-[#14171E] border-gray-700 p-2 md:p-4 overflow-hidden rounded-2xl"
                >
                  <Image
                    src={plan.image}
                    width={120}
                    height={120}
                    alt={plan.name}
                    className="lg:w-40 w-25 md:w-35 h-25 object-cover rounded-lg "
                  ></Image>

                  {/* card name and details  */}
                  
                  <div className="lg:-ml-100 -ml-5 flex flex-col px-4 space-y-2">
                      <h2 className='lg:text-2xl md:text-xl sm:text-[20px] text-[14px] font-extrabold'>{plan.name}</h2>
                      <p className='text-gray-400 md:text-[16px] text-[12px]'>{plan.equipment}</p>
                      <div className="flex gap-2 md:text-[14px] sm:text-[14px] text-[8px]">
                          <span className="flex gap-1 items-center">
                            <IoIosTimer className="text-[#ccff22] font-bold" />
                            {plan.duration} Min
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
                  <div className=" flex gap-2 items-center justify-end">
                    <div className=" flex items-center px-1 text-[10px] sm:text-[14px] md:text-[16px] text-black md:w-40 sm:w-30 md:px-2 md:h-8 md:rounded-2xl rounded-md ">

                    </div>
                    <Link href={`/details-page/${plan.id}`}>
                      <button className=" border px-1 border-gray-500 md:text-lg text-[10px] md:w-33 md:h-8 md:rounded-2xl rounded-md cursor-pointer">
                        View Details
                      </button>
                    </Link>
                    
                    <RxCross2
                      onClick={() => handlesSavedPlan(plan)}
                      className="text-xl mx-3  cursor-pointer"
                    />
                  </div>
                </div>
              ))}
            </div>
          ) : (
            <EmptyCard />
          )}
        </div>
      </div>
    </div>
  );
};

export default MyPlanSection;
