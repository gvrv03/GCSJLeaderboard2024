import Link from "next/link";
import React from "react";

const Footer = () => {
  return (
    <footer className=" hidden md:flex justify-center  bg-blue-50  py-5 mt-10 font-semibold">
      Developed By  <Link href="https://gvrv.in" className=" text-blue-700 ml-2">gvrv_n</Link>
    </footer>
  );
};

export default Footer;
