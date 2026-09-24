import logo from "@/app/assets/logo.png";
import Image from "next/image";
import Link from "next/link";
const Navbar = () => {
  return (
    <nav className="border-b border-[#202020]">
      <div className="flex justify-between items-center p-7 ">
            <div className="flex gap-2 items-center ">
                <Image src={logo} width={30} height={30} alt="logo"></Image>
                <h3 className="text-2xl font-semibold md:inline hidden">FITLOG</h3>
            </div>
            <div className="flex  gap-3 list-none">
            <Link href={"/"}>
                <li>Workout</li>
            </Link>
            <Link href={"/"}>
                <li>My Plan</li>
            </Link>
            </div>
            <div className="flex list-none gap-5">
                <Link href={"/"}>
                    <li>Plan  <span className=" bg-yellow-400 text-black px-2  py-1 font-semibold text-md rounded-full"> 0</span></li>
                </Link>
                <Link href={"/"}>
                    <li>Saved <span className=" font-inter border border-gray-200 text-white px-2  py-1 font-semibold text-md rounded-full">     0</span></li>
                </Link>
            </div>
      </div>
    </nav>
  );
};

export default Navbar;
