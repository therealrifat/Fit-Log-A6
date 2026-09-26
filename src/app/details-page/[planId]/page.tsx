import SaveLaterBtn from "@/component/ActionBtn/saveLaterBtn";
import TodayBtn from "@/component/ActionBtn/todayBtn";
import { getPlansData } from "@/lib/plan";
import { IPlanType } from "@/types/type";
import Image from "next/image";



const page = async ({ params }: { params: Promise<{ planId: string }> }) => {
  
  const allPlanData = await getPlansData();
  const { planId } = await params;
  const findPlan: IPlanType = allPlanData.find(
    (plan: IPlanType) => plan.id === parseInt(planId),
  );
  const { name, image, description, muscleGroups, instructions, equipment, difficulty, sets, reps, duration, caloriesBurned, rating } = findPlan;
  console.log(name);
  return (
    <div className="my-10 max-w-11/12 mx-auto">
      <div className=" grid grid-cols-2 gap-10">
        <div className=" flex justify-end">
          <Image
            src={image}
            height={750}
            width={750}
            alt={name}
            className="w-100 h-140 object-cover rounded-2xl"
          ></Image>
        </div>
        <div className=" space-y-2.5 ">
          <h1 className="text-4xl font-extrabold font-oswald">{name}</h1>
          <p className=" ">{description}</p>
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
            <div className=" overflow-hidden rounded-2xl">
                <div className="flex justify-between rounded-t-2xl border border-[#262a41] bg-[#1E2330] py-3 ">
                    <span className="mx-2">EQUIPMENT</span>
                    <span className="mx-2">{equipment}</span>
                </div>
                <div className="flex justify-between border   border-[#43454e] bg-[#1E2330] py-3 ">
                    <span className="mx-2">DIFFICULTY</span>
                    <span className="mx-2">{difficulty}</span>
                </div>
                <div className="flex justify-between border   border-[#43454e] bg-[#1E2330] py-3 ">
                    <span className="mx-2">SETS</span>
                    <span className="mx-2">{sets}</span>
                </div>
                <div className="flex justify-between border   border-[#43454e] bg-[#1E2330] py-3 ">
                    <span className="mx-2">REPS</span>
                    <span className="mx-2">{reps}</span>
                </div>
                <div className="flex justify-between border   border-[#43454e] bg-[#1E2330] py-3 ">
                    <span className="mx-2">DURATION</span>
                    <span className="mx-2">{duration}</span>
                </div>
                <div className="flex justify-between border   border-[#43454e] bg-[#1E2330] py-3 ">
                    <span className="mx-2">CALORIES</span>
                    <span className="mx-2">{caloriesBurned}</span>
                </div>

                <div className="flex justify-between border rounded-b-2xl  border-[#43454e] bg-[#1E2330] py-3 ">
                    <span className="mx-2">RATING</span>
                    <span className="mx-2">{rating}</span>
                </div>
            </div>

          <div>
            <h4 className="font-bold">INSTRUCTIONS</h4>
            {instructions.map((sentence, ind) => (
              <p key={ind}>{`${ind + 1}. ${sentence}`}</p>
            ))}
          </div>
          <div className="flex gap-3 items-center">
            <TodayBtn findPlan={findPlan} />
            <SaveLaterBtn findPlan={findPlan}/>
          </div>
        </div>
      </div>
    </div>
  );
};

export default page;