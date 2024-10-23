import Link from "next/link";
import React from "react";

const Completion = () => {
  return (
    <section className="fixed md:relative md:py-1 flex-col flex w-full md:w-[30%]  md:bottom-auto  md:bg-auto bottom-0 items-center md:top-0  rounded-t-md md:rounded-md  bg-blue-500 text-white">
      <div className=" px-5 py-2 font-semibold  flex gap-2 items-center" >
        <i className="uil uil-file-info-alt text-2xl" />
        <Link href="https://forms.gle/UtkhQDjeR5gk7K7HA" target="_blank" >Fill Course Completion Form</Link>
      </div>
      <div  className="md:hidden bg-gray-900  font-semibold w-full  text-xs p-2 text-center " >
        Developed by{" "}
        <Link href="http://gvrv.in/" target="_blank" className=" text-yellow-300 font-semibold ">
          gvrv_n
        </Link>{" "}
      </div>
    </section>
  );
};

export default Completion;
