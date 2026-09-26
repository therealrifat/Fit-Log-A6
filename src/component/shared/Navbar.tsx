"use client"
import logo from "@/app/assets/logo.png";
import { PlanContext } from "@/context/planContext";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useContext } from "react";
const Navbar = () => {
    const {todayPlan, saveLater}=useContext(PlanContext)
   const pathname = usePathname()

    const links =<>
        <Link href={"/"} className={`${pathname==='/' ? " text-yellow-300 rounded-2xl bg-[#202020] hover:bg-gray-700" : ""} hover:bg-gray-700 rounded-2xl text-[12px] md:text-[16px] px-4 py-1  `}><li>Workouts</li></Link>
        <Link href={"/my-plan"} className={`${pathname==='/my-plan' ? " text-yellow-300 rounded-2xl bg-[#202020] hover:bg-gray-700" : ""}  hover:bg-gray-700 rounded-2xl text-[12px] md:text-[16px] px-4 py-1 `}><li >My Plan</li></Link>
    </>

    const myPlan =<>
    <Link href={"/my-plan"}>
        <li className=" md:text-[16px] text-[12px]">Plan <span className=" bg-[#ccff00] text-black px-2  py-1 font-semibold text-[12px] md:text-[16px] rounded-full ">{todayPlan.length}</span></li>
    </Link>
    <Link href={"/my-plan"}>
        <li className="md:text-[16px] text-[12px]">Saved <span className=" font-inter border border-gray-200 text-white px-2  py-1 font-semibold text-[12px] md:text-[16px]  rounded-full">{saveLater.length}</span>
        </li>
    </Link>  
    </>
  return (
    <nav className=" bg-[#0C0D10]/90  backdrop-blur-lg border-b border-[#202020] top-0 sticky z-40  ">
      <div className="flex justify-between items-center px-7 py-4">
            <Link href={"/"} className=" cursor-pointer">
                <div className="flex gap-2 items-center ">
                <Image src={logo} width={30} height={30} alt="logo"></Image>
                <h3 className="text-2xl font-semibold md:inline hidden font-oswald">FITLOG</h3>
            </div>
            </Link>
            <div className="flex list-none">
                {links}
            </div>
            <div className="flex list-none gap-3">
                {myPlan}  
            </div>
      </div>
    </nav>
  );
};

export default Navbar;
