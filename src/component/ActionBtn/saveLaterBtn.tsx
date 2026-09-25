"use client"
import { PlanContext } from '@/context/planContext';
import { IPlanType } from '@/types/type';

import React, { useContext } from 'react';
import { MdOutlineBookmarkAdded } from 'react-icons/md';
import { toast } from 'react-toastify';



const SaveLaterBtn = ({findPlan}:{findPlan: IPlanType}) => {
    const {saveLater, setSavelater}= useContext(PlanContext)
     const handlesSaveLaterBtn =()=>{   
          setSavelater([...saveLater, findPlan])
            toast.success("Added Save for later")
        }

    return  <button onClick={()=>handlesSaveLaterBtn()} className="cursor-pointer flex items-center gap-2 border border-gray-500 py-2 px-4 rounded-3xl "><MdOutlineBookmarkAdded/>Save for later</button>

};

export default SaveLaterBtn;