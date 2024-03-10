import React from "react";
import Link from "next/link";


import CustomButton from "@/components/CustomButton";

const Navbar = () => {
  return (
    <header className="w-full absolute z-10 ">
      <nav
        className="max-w-[1440px] flex  items-center justify-between mx-auto
      sm:px-16 px-6 py-4"
      >
        <Link href={"/"} className="flex justify-center items-center">
         <h1 className="font-semibold text-2xl">Perfect-Rent</h1>
        </Link>
        <CustomButton
          title={"Sign In"}
          btnType="button"
          containerStyles={
            "text-slate-900 rounded-xl bg-white min-w-[130px] "
          }
        />
      </nav>
    </header>
  );
};

export default Navbar;
