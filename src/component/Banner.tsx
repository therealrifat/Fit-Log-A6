import Image from "next/image";
import bannerImage from "@/app/assets/banner.png";
const Banner = () => {
  return (
    <div className="flex items-center max-w-11/12 mx-auto bg-[#15171D] gap-20 p-15  mt-10 rounded-2xl">
      <div className=" space-y-5">
        <h4 className="text-[#C2F800] text-sm">WORKOUT LIBRARY</h4>
        <h2 className="text-6xl font-extrabold">TRAIN WITH INTENT. LOG EVERY SET.</h2>
        <h3 className="w-[59%]">
          FitLog is a dark, no-nonsense gym companion: pick a lift, lock it into
          today's plan, and watch the week's work add up.
        </h3>
        <button className="border bg-[#C2F800] py-2 px-4 rounded-lg text-black font-semibold">BROWSE WORKOUTS</button>
      </div>
      <div>
        <Image
          src={bannerImage}

          alt="Baner Image"
          className=" w-md"
        ></Image>
      </div>
    </div>
  );
};

export default Banner;
