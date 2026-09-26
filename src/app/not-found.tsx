import Link from "next/link";
import React from "react";

const NotFound = () => {
  return (
    <div className=" max-w-11/12 mx-auto ">
      <div className="my-20 px-40 py-30 text-center border rounded-2xl border-gray-800 space-y-5">
        <h1 className="text-4xl">Page Not-Found</h1>
        <Link href={"/#library"}>
          <button className="border bg-[#C2F800] py-2 md:px-4 px-2 rounded-lg text-black md:font-semibold md:text-md text-sm md:mx-0 cursor-pointer">
            BROWSE WORKOUTS
          </button>
        </Link>
      </div>
    </div>
  );
};

export default NotFound;
