"use client"

import { useState } from "react";

const TabButton = () => {
    const [active, setActive] =useState("saved")
    
    const handlesButtons = (clicked: "today" | "saved") => {
        setActive(clicked)
        
    }

    return (
        <div className="border border-[#232732] bg-[#151921] rounded-2xl px-2 py-2 w-70 flex gap-1">
            <button onClick={()=>handlesButtons("today")} className={`${active ==="today" ? "border bg-[#1F242D] border-[#2B303D]" : " "} rounded-2xl px-4 py-1 cursor-pointer`}>Today’s Plan</button>
            <button onClick={()=>handlesButtons("saved")} className={`${active ==="saved" ? "border bg-[#1F242D] border-[#2B303D]" : " "} rounded-2xl px-10 py-1 cursor-pointer`} >Saved</button>
        </div>
    );
};

export default TabButton;