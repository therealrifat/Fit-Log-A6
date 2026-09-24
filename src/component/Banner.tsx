import Image from "next/image";
import bannerImage from "@/app/assets/banner.png";
const Banner = () => {
  return (
    <div className="flex md:flex-row flex-col  items-center max-w-11/12 mx-auto bg-[#15171D] gap-20 p-15  mt-10 rounded-2xl">
      <div className="md:inline flex flex-col space-y-5 items-center md:items-start">
        <h4 className="text-[#C2F800] text-sm text-center md:text-left">WORKOUT LIBRARY</h4>
        <h2 className=" md:text-6xl text-2xl md:font-extrabold font-bold text-center md:text-left">TRAIN WITH INTENT. LOG EVERY SET.</h2>
        <h3 className="md:w-[59%] text-center md:text-left text-sm md:text-lg">
          FitLog is a dark, no-nonsense gym companion: pick a lift, lock it into
          today's plan, and watch the week's work add up.
        </h3>
        <button className="border bg-[#C2F800] py-2 md:px-4 px-2 rounded-lg text-black md:font-semibold md:text-md text-sm  md:mx-0">BROWSE WORKOUTS</button>
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
