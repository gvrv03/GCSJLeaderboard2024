import React from "react";

const Statistics = () => {
  return (
    <div className="flex flex-col  md:border-none border-t  md:z-0 p-2 md:mt-0 justify-center gap-2 md:relative fixed z-10 bottom-0  bg-white w-full   left-0 right-0 md:p-0">
      <div className="flex w-full gap-2 ">
        <div className="bg-green-100  border border-red-200 text-green-600 rounded-md p-4 shadow-md text-center w-full">
          <p className="text-xs md:text-sm font-medium">
            Eligible Participants for swags
          </p>
          <p className="   text-xl md:text-2xl font-bold">60</p>
        </div>
        <div className="bg-blue-100  border border-blue-200 text-blue-600 rounded-md p-4 shadow-md text-center w-full">
          <p className="text-xs md:text-sm font-medium">
            Total No of Participants
          </p>
          <p className="   text-xl md:text-2xl font-bold">122</p>
        </div>
      </div>
      <button className="bg-blue-500 font-semibold  text-white py-2 rounded-md" >
        Fill Feedback Form
      </button>
    </div>
  );
};

export default Statistics;
