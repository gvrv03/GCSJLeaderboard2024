"use client";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/navigation";
import React, { useState, useEffect } from "react";

const Navbar = () => {
  const [isSticky, setIsSticky] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 100) {
        setIsSticky(true);
      } else {
        setIsSticky(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);
  const router = useRouter();
  return (
    <header
      className={`grid place-items-center  transition-all duration-300 ${
        isSticky ? "fixed top-0 left-0 w-full bg-white z-50" : ""
      }`}
    >
      <div className="flex gap-5 items-center justify-center py-3 text-white bg-gray-900 w-full">
        <img src="/cloud.png" className="md:w-8 w-5 " />
        <p className="font-semibold text-sm md:text-lg">
          Google Cloud Study Jam 2024-25{" "}
        </p>
      </div>
      <nav className="py-5  px-2 flex  border-b md:border-none justify-between container  w-full  items-center ">
        <div className=" flex   gap-2  items-center ">
          <Image
            onClick={() => {
              router.push("/");
            }}
            className=" w-10 cursor-pointer md:w-16 "
            src="/code.svg"
            width={100}
            height={100}
            alt="Logo"
          />
          <div className=" flex  flex-col ">
            <p className="font-semibold  text-sm md:text-lg">
              Google Developers Group On Campus
            </p>
            <p className="text-xs md:text-sm font-light text-gray-500">
              Government College Of Engineering, Nagpur
            </p>
          </div>
        </div>
        <div className="flex gap-2 ">
          <Link
            href="https://www.linkedin.com/in/gdgc-gcoen-b04655221/"
            target="_blank"
          >
            <i className="uil    text-blue-500 text-2xl uil-linkedin" />
          </Link>
          <Link href="https://www.instagram.com/gdgcgcoen/" target="_blank">
            <i className="uil    text-blue-500 text-2xl uil-instagram" />
          </Link>
        </div>
      </nav>
    </header>
  );
};

export default Navbar;
