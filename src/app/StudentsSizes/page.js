"use client";
import React, { useEffect, useState } from "react";
import MUITable from "@/components/MUITable";
import {
  AppwriteDatabase,
  GDGCDatabase,
  TshirtSizeCollection,
} from "../appwrite"; // Ensure you import the `databases` instance correctly

import LoadingSpinner from "@/components/LoadingSpinner";

const StudentsSizes = () => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await AppwriteDatabase.listDocuments(
          GDGCDatabase,
          TshirtSizeCollection
        ); // Replace with your actual IDs
        setData(response.documents);
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  if (loading)
    return (
      <div className="h-screen">
        <LoadingSpinner />
      </div>
    );
  if (error) return <div>Error: {error}</div>;

  const sizeCounts = data.reduce((acc, item) => {
    const size = item.Tshirt_Size; // Assuming `TshirtSize` is the key for the size
    acc[size] = (acc[size] || 0) + 1;
    return acc;
  }, {});
  console.log(sizeCounts);

  return (
    <div className="container m-auto flex-col flex gap-5">
      <div className="overflow-scroll mt-5 md:m-0 m-2 w-full flex gap-5">
        <div className="p-5 bg-blue-50  rounded-md border border-blue-200 w-full flex  items-center justify-center flex-col ">
          <p className="font-semibold text-base md:text-lg text-blue-500">
            {" "}
            (XS)
          </p>
          <p>{sizeCounts?.XS ? sizeCounts?.XS : "0"}</p>
        </div>
        <div className="p-5 bg-blue-50  rounded-md border border-blue-200 w-full flex  items-center justify-center flex-col ">
          <p className="font-semibold text-base md:text-lg text-blue-500">
            {" "}
            (S)
          </p>
          <p>{sizeCounts?.S ? sizeCounts?.S : "0"}</p>
        </div>
        <div className="p-5 bg-blue-50  rounded-md border border-blue-200 w-full flex  items-center justify-center flex-col ">
          <p className="font-semibold text-base md:text-lg text-blue-500">
            {" "}
            (M)
          </p>
          <p>{sizeCounts?.M ? sizeCounts?.M : "0"}</p>
        </div>
        <div className="p-5 bg-blue-50  rounded-md border border-blue-200 w-full flex  items-center justify-center flex-col ">
          <p className="font-semibold text-base md:text-lg text-blue-500">
            {" "}
            (L)
          </p>
          <p>{sizeCounts?.L ? sizeCounts?.L : "0"}</p>
        </div>
        <div className="p-5 bg-blue-50  rounded-md border border-blue-200 w-full flex  items-center justify-center flex-col ">
          <p className="font-semibold text-base md:text-lg text-blue-500">
            {" "}
            (XL)
          </p>
          <p>{sizeCounts?.XL ? sizeCounts?.XL : "0"}</p>
        </div>
        <div className="p-5 bg-blue-50  rounded-md border border-blue-200 w-full flex  items-center justify-center flex-col ">
          <p className="font-semibold text-base md:text-lg text-blue-500">
            {" "}
            (2XL)
          </p>
          <p>{sizeCounts?.["2XL"] ? sizeCounts?.["2XL"] : "0"}</p>
        </div>
        <div className="p-5 bg-blue-50  rounded-md border border-blue-200 w-full flex  items-center justify-center flex-col ">
          <p className="font-semibold text-base md:text-lg text-blue-500">
            {" "}
            (3XL)
          </p>
          <p>{sizeCounts?.["3XL"] ? sizeCounts?.["3XL"] : "0"}</p>
        </div>
      </div>
      <MUITable data={data} tableHeight={560} complform={false} />
    </div>
  );
};

export default StudentsSizes;
