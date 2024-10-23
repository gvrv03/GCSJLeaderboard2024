import { CircularProgress } from "@mui/material";
import React from "react";
import Navbar from "./Navbar";

const LoadingSpinner = () => {
  return (
    <>
      <div className=" grid w-full   place-items-center fixed top-0 h-screen  ">
        <CircularProgress />
      </div>
    </>
  );
};

export default LoadingSpinner;
