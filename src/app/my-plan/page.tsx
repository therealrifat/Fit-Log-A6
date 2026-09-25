"use client"
import { PlanContext } from '@/context/planContext';
import React, { useContext } from 'react';

const MyPlanPage = () => {
    const {todayPlan, saveLater} =useContext(PlanContext)
    console.log("todayPlan", todayPlan, "save later" , saveLater)
    return (
        <section className='max-w-11/12 mx-auto'>
            <div className='text-left'>
                <h1 className='text-4xl font-bold'>My Plan </h1>
                <p className=' text-gray-500'>Cap of five lifts for today. Finish them, then load more.</p>
            </div>
        </section>
    );
};


export default MyPlanPage;