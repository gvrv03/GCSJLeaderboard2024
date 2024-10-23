import Link from "next/link";
import React from "react";

const Footer = () => {
  return (
    <footer className=" hidden md:flex justify-center text-white bg-gray-900  py-5 mt-10 font-semibold">
      Developed By  <Link href="https://gvrv.in" className="  font-semibold text-yellow-300 ml-2">gvrv_n</Link>
    </footer>
  );
};

export default Footer;
