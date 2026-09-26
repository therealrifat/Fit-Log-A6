export const dynamic = 'force-dynamic';
import MyPlanSection from "@/component/PlanSection/myPlanSection";
import { Suspense } from "react";


const MyPlanPage = () => {

  return (
    <section className="max-w-11/12 mx-auto">
      {/* my plan page title */}

      <div className="text-left my-10 space-y-2">
        <h1 className="text-4xl font-bold font-oswald">My Plan </h1>
        <p className=" text-gray-500">
          Cap of five lifts for today. Finish them, then load more.
        </p>
      </div>

      {/* my plan page bar, btn tab and card display section */}

      <Suspense fallback=
      // bars fallback
      <div>
      <div className="my-10">
        <div className="grid grid-cols-3 bg-[#13161D] md:w-300  py-8 rounded-xl border border-gray-700 overflow-hidden justify-between">
          <div className="flex flex-col px-5 space-y-1 border-r border-r-gray-500 ">
            <span className="text-gray-300 text-[16px]">Exercises</span>
            <span className="text-[#ccff00] text-5xl font-bold font-oswald">
              0
            </span>
          </div>
          <div className="flex flex-col px-5 space-y-1 border-r border-r-gray-500">
            <span className="text-gray-300 text-[16px]">Minutes</span>
            <span className="text-5xl font-bold font-oswald">
              0
            </span>
          </div>
          <div className="flex flex-col px-5 space-y-1">
            <span className="text-gray-300 text-[16px]">Calories</span>
            <span className="text-5xl font-bold font-oswald">
              0
            </span>
          </div>
        </div>
      </div>
      <h1 className="text-4xl text-center text-[#ccff22]">Loading Workouts…</h1>
      
      </div> >

      <div>
        <MyPlanSection />
      </div>
      </Suspense>
    </section>
  );
};

export default MyPlanPage;
