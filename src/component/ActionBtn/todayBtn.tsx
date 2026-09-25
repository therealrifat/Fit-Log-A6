"use client"

import { PlanContext } from "@/context/planContext";
import { IPlanType } from "@/types/type";

import { useContext } from "react";
import { LuCalendarPlus } from "react-icons/lu";
import { toast } from "react-toastify";






const TodayBtn = ({findPlan}:{findPlan: IPlanType}) => {

    const {todayPlan, setTodayPlan}=useContext(PlanContext)

    console.log("okaay")
    const handlesTodaysBtn =()=>{
        setTodayPlan([...todayPlan, findPlan])
        toast.success("Added to today's plan")
    }

    return <button onClick={()=>handlesTodaysBtn()} className="cursor-pointer flex items-center gap-2 bg-[#ccff00] text-black py-2 px-4 rounded-3xl" ><LuCalendarPlus />{`Add to today's plan`}</button>

};

export default TodayBtn;