"use client"
import logo from "@/app/assets/logo.png";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
const Navbar = () => {
   const pathname = usePathname()

    const links =<>
        <Link href={"/"} className={`${pathname==='/' ? " text-yellow-300 rounded-2xl bg-[#202020]" : ""} text-[12px] md:text-[16px] px-4 py-1`}><li>Workouts</li></Link>
        <Link href={"my-plan"} className={`${pathname==='/my-plan' ? " text-yellow-300 rounded-2xl bg-[#202020]" : ""} text-[12px] md:text-[16px] px-4 py-1`}><li >My Plan</li></Link>
    </>

    const myPlan =<>
    <Link href={"/my-plan"}>
        <li className=" md:text-[16px] text-[12px]">Plan <span className=" bg-[#ccff00] text-black px-2  py-1 font-semibold text-[12px] md:text-[16px] rounded-full"> 0</span></li>
    </Link>
    <Link href={"/my-plan"}>
        <li className="md:text-[16px] text-[12px]">Saved <span className=" font-inter border border-gray-200 text-white px-2  py-1 font-semibold text-[12px] md:text-[16px]  rounded-full">0</span>
        </li>
    </Link>  
    </>
  return (
    <nav className=" bg-[#0C0D10]/90  backdrop-blur-lg border-b border-[#202020] top-0 sticky">
      <div className="flex justify-between items-center px-7 py-4">
            <div className="flex gap-2 items-center ">
                <Image src={logo} width={30} height={30} alt="logo"></Image>
                <h3 className="text-2xl font-semibold md:inline hidden">FITLOG</h3>
            </div>
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
