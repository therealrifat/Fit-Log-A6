"use client"
import logo from "@/app/assets/logo.png";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
const Navbar = () => {
   const pathname = usePathname()
  console.log(pathname)
    const links =<>
        <Link href={"/"} className={`${pathname==='/' ? " text-yellow-300 rounded-2xl bg-[#202020]" : ""} text-sm px-6 py-1`}><li>Workout</li></Link>
        <Link href={"my-plan"} className={`${pathname==='/my-plan' ? " text-yellow-300 rounded-2xl bg-[#202020]" : ""} text-sm px-6 py-1`}><li>My Plan</li></Link>
    </>

    const myPlan =<>
    <Link href={"/my-plan"}>
        <li>Plan <span className=" bg-[#ccff00] text-black px-2  py-1 font-semibold text-md rounded-full"> 0</span></li>
    </Link>
    <Link href={"/my-plan"}>
        <li>Saved <span className=" font-inter border border-gray-200 text-white px-2  py-1 font-semibold text-md rounded-full">0</span>
        </li>
    </Link>  
    </>
  return (
    <nav className="border-b border-[#202020]">
      <div className="flex justify-between items-center p-7 ">
            <div className="flex gap-2 items-center ">
                <Image src={logo} width={30} height={30} alt="logo"></Image>
                <h3 className="text-2xl font-semibold md:inline hidden">FITLOG</h3>
            </div>
            <div className="flex gap-1 list-none">
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
