import { IPlanType } from "@/types/type";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import { FaRegStar } from "react-icons/fa";
import { IoIosTimer } from "react-icons/io";
import { SlEnergy } from "react-icons/sl";

interface PlanCardProps {
  plan: IPlanType;
}

const PlanCard = ({ plan }: PlanCardProps) => {
  const {
    id,
    name,
    image,
    muscleGroups,
    equipment,
    duration,
    caloriesBurned,
    rating, 
  } = plan;
  return (
    <div className="max-w-11/12 mx-auto">
      <Link href={`/details-page/${id}`}>
        <div className="bg-[#222630] w-85 md:w-105 h-auto rounded-2xl overflow-hidden space-y-2 ">
          <Image
            src={image}
            width={480}
            height={480}
            alt={plan.name}
            className=" h-75 object-cover "
          ></Image>
          <div className=" p-5 space-y-2 p">
            <div className="">
              {muscleGroups.map((mm, ind) => (
                <span
                  className="border bg-[#ccff00] px-3 py-1 rounded-2xl text-black mx-1"
                  key={ind}
                >
                  {" "}
                  {mm}
                </span>
              ))}
            </div>
            <h1 className=" md:text-xl text-lg font-bold font-oswald">{name}</h1>
            <p className=" text-gray-300 text-md">{equipment}</p>
            <hr className=" text-[#505050] "></hr>
            <div className="flex gap-2">
              <span className="flex gap-1 items-center">
                <IoIosTimer />
                {duration} Min{" "}
              </span>
              <span className="flex gap-1 items-center">
                <SlEnergy />
                {caloriesBurned} kcal
              </span>
              <span className="flex gap-1 items-center">
                <FaRegStar />
                {rating}
              </span>
            </div>
          </div>
        </div>
      </Link>
    </div>
  );
};

export default PlanCard;
