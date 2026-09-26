import Banner from "@/component/hompage/Banner";
import Planner from "@/component/hompage/Planner";
import { Suspense } from "react";

const HomePage = async () => {
  return (
    <div>
      <Banner />
      <Suspense
        fallback={
          <div className=" max-w-11/12 mx-auto my-10">
            <div className="my-5 text-center md:text-left">
              <h2 className="text-[#ffffff] font-extrabold text-2xl font-oswald">
                THE LIBRARY
              </h2>
              <p className="text-gray-400 text-md">
                Twelve lifts covering every major muscle group.
              </p>
            </div>

            <div className="grid grid-cols-3 gap-5">
              <div className="flex w-100 flex-col gap-4">
                <div className="skeleton h-50 w-full"></div>
                <div className="skeleton h-4 w-28"></div>
                <div className="skeleton h-4 w-full"></div>
                <div className="skeleton h-4 w-full"></div>
              </div>
              <div className="flex w-100 flex-col gap-4">
                <div className="skeleton h-50 w-full"></div>
                <div className="skeleton h-4 w-28"></div>
                <div className="skeleton h-4 w-full"></div>
                <div className="skeleton h-4 w-full"></div>
              </div>
              <div className="flex w-100 flex-col gap-4">
                <div className="skeleton h-50 w-full"></div>
                <div className="skeleton h-4 w-28"></div>
                <div className="skeleton h-4 w-full"></div>
                <div className="skeleton h-4 w-full"></div>
              </div>
              <div className="flex w-100 flex-col gap-4">
                <div className="skeleton h-50 w-full"></div>
                <div className="skeleton h-4 w-28"></div>
                <div className="skeleton h-4 w-full"></div>
                <div className="skeleton h-4 w-full"></div>
              </div>
              <div className="flex w-100 flex-col gap-4">
                <div className="skeleton h-50 w-full"></div>
                <div className="skeleton h-4 w-28"></div>
                <div className="skeleton h-4 w-full"></div>
                <div className="skeleton h-4 w-full"></div>
              </div>
              <div className="flex w-100 flex-col gap-4">
                <div className="skeleton h-50 w-full"></div>
                <div className="skeleton h-4 w-28"></div>
                <div className="skeleton h-4 w-full"></div>
                <div className="skeleton h-4 w-full"></div>
              </div>
              
            </div>
          </div>
        }
      >
        <Planner />
      </Suspense>
    </div>
  );
};

export default HomePage;
