import {
  AppwriteDatabase,
  GDGCDatabase,
  ID,
  TshirtSizeCollection,
} from "@/app/appwrite";
import React, { useState } from "react";
import toast from "react-hot-toast";
import LoadingSpinner from "./LoadingSpinner";
import { CircularProgress } from "@mui/material";
import { Query } from "appwrite";

const TshirtCollect = ({ data }) => {
  const [studentName, setStudentName] = useState("NA");
  const [tshirtSize, setTshirtSize] = useState("NA");
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [loading, setloading] = useState(false);
  const openModal = () => setIsModalOpen(true);
  const closeModal = () => setIsModalOpen(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setloading(true);

    if (studentName === "NA" || tshirtSize === "NA") {
      toast.error("Please select both student name and t-shirt size.");
      return;
    }
    try {
      // Check if the student name already exists
      const existingDocuments = await AppwriteDatabase.listDocuments(
        GDGCDatabase,
        TshirtSizeCollection,
        [
          Query.equal("Student_Name", studentName), // Query by studentName field
        ]
      );

      if (existingDocuments.total > 0) {
        const documentId = existingDocuments.documents[0].$id;
        const response = await AppwriteDatabase.updateDocument(
          GDGCDatabase,
          TshirtSizeCollection,
          documentId,
          {
            Tshirt_Size: tshirtSize, // Update only the T-shirt size
          }
        );

        toast.success("Data updated successfully!");
      } else {
        // If no document exists, create a new one
        const documentData = {
          Student_Name: studentName,
          Tshirt_Size: tshirtSize,
        };

        const response = await AppwriteDatabase.createDocument(
          GDGCDatabase,
          TshirtSizeCollection,
          ID.unique(),
          documentData
        );

        toast.success("Data submitted successfully!");
      }
    } catch (e) {
      toast.error("An error occurred while submitting the data.");
    } finally {
      setloading(false); // End loading
    }
  };

  return (
    <div className="md:p-0 p-2 flex-col gap-5 flex">
      <form className="flex flex-col gap-5 md:flex-row">
        <div className="w-full flex flex-col gap-2">
          <label htmlFor="studentName" className="text-base font-semibold">
            Select Student Name:
          </label>
          <select
            name="studentName"
            id="studentName"
            className="bg-blue-50 p-3 rounded-md outline-none text-sm"
            value={studentName}
            onChange={(e) => setStudentName(e.target.value)}
          >
            <option value="NA">-----SELECT NAME-----</option>
            {data?.map((item, index) => (
              <option key={index} value={item?.Name}>
                {item?.Name}
              </option>
            ))}
          </select>
        </div>

        {/* T-shirt Size */}
        <div className="w-full flex flex-col gap-2">
          <label htmlFor="tshirtSize" className="text-base font-semibold">
            Select T-Shirt Size:
          </label>
          <select
            name="tshirtSize"
            id="tshirtSize"
            className="bg-blue-50 p-3 rounded-md outline-none text-sm"
            value={tshirtSize}
            onChange={(e) => setTshirtSize(e.target.value)}
          >
            <option value="NA">-----TSHIRT SIZE-----</option>
            <option value="XS">XS</option>
            <option value="S">S</option>
            <option value="M">M</option>
            <option value="L">L</option>
            <option value="XL">XL</option>
            <option value="2XL">2XL</option>
            <option value="3XL">3XL</option>
          </select>
          <button
            type="button"
            className="text-blue-500 hover:text-blue-800 font-semibold text-left"
            onClick={openModal}
          >
            View Size Chart
          </button>
        </div>
      </form>
      <button
        onClick={handleSubmit}
        type="submit"
        className="rounded-md bg-blue-500 p-3 px-32 text-white font-semibold uppercase"
      >
        {loading ? <CircularProgress size={20} color="white" /> : "Submit"}
      </button>

      {/* Modal */}
      {isModalOpen && <SizeChartModal onClose={closeModal} />}
    </div>
  );
};

const SizeChartModal = ({ onClose }) => {
  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
      <div className="bg-white absolute bottom-0 md:bottom-auto p-5 rounded-md w-full md:w-1/3">
        <h2 className="text-lg font-semibold mb-4">T-Shirt Size Chart</h2>
        <table className="w-full text-left border-gray-300">
          <thead>
            <tr>
              <th className="border-b pb-2 text-sm font-semibold border-gray-300">
                Size
              </th>
              <th className="border-b pb-2 text-sm text-center font-semibold border-gray-300">
                Chest
              </th>
              <th className="border-b pb-2 text-sm font-semibold text-right border-gray-300">
                Length
              </th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td className=" text-left py-2 border-b border-gray-300">XS</td>
              <td className="py-2 border-b text-center border-gray-300">36</td>
              <td className="py-2 border-b text-right border-gray-300">25</td>
            </tr>
            <tr>
              <td className=" text-left py-2 border-b border-gray-300">S</td>
              <td className="py-2 border-b text-center border-gray-300">38</td>
              <td className="py-2 border-b text-right border-gray-300">26.5</td>
            </tr>
            <tr>
              <td className=" text-left py-2 border-b border-gray-300">M</td>
              <td className="py-2 border-b text-center border-gray-300">40</td>
              <td className="py-2 border-b text-right border-gray-300">27.5</td>
            </tr>
            <tr>
              <td className=" text-left py-2 border-b border-gray-300">L</td>
              <td className="py-2 border-b text-center border-gray-300">42</td>
              <td className="py-2 border-b text-right border-gray-300">28.5</td>
            </tr>
            <tr>
              <td className=" text-left py-2 border-b border-gray-300">XL</td>
              <td className="py-2 border-b text-center border-gray-300">44</td>
              <td className="py-2 border-b text-right border-gray-300">29.5</td>
            </tr>
            <tr>
              <td className=" text-left py-2 border-b border-gray-300">2XL</td>
              <td className="py-2 border-b text-center border-gray-300">46</td>
              <td className="py-2 border-b text-right border-gray-300">30.5</td>
            </tr>
            <tr>
              <td className=" text-left py-2 border-b border-gray-300">3XL</td>
              <td className="py-2 border-b text-center border-gray-300">48</td>
              <td className="py-2 border-b text-right border-gray-300">31.5</td>
            </tr>
          </tbody>
        </table>
        <button
          onClick={onClose}
          className="mt-5 bg-blue-500 text-white p-2 px-5 rounded-md font-semibold"
        >
          Close
        </button>
      </div>
    </div>
  );
};


export default TshirtCollect;
