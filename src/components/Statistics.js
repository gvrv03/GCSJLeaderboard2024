import Link from "next/link";
import React from "react";

const Statistics = ({visible}) => {
  return (
    <div className={`flex flex-col  ${visible} md:border-none border-t  md:z-0  md:mt-0 justify-center gap-2 z-10 bottom-0  bg-white w-full   md:p-0`}>
      <div className="flex w-full gap-2 md:p-0 p-2 ">
        <div className="bg-green-100  border border-red-200 text-green-600 rounded-md p-4 shadow-md text-center w-full">
          <p className="text-[10px] md:text-sm font-medium">
            Eligible Participants for swags
          </p>
          <p className="   text-sm md:text-2xl font-bold">80</p>
        </div>
        <div className="bg-blue-100  border border-blue-200 text-blue-600 rounded-md p-4 shadow-md text-center w-full">
          <p className="text-[10px] md:text-sm font-medium">
            Total No of Participants
          </p>
          <p className="   text-sm md:text-2xl font-bold">122</p>
        </div>
      </div>
      <button className=" hidden bg-blue-500 font-semibold  text-white py-2 rounded-md">
        Fill Feedback Form
      </button>
      
    </div>
  );
};

export default Statistics;
