import React, { useState } from "react";

const Support = () => {
  // State to manage modal visibility
  const [isModalOpen, setIsModalOpen] = useState(false);

  // Team data
  const teamData = [
    { name: "Gaurav Narnaware", contactNo: 7796305801 },
    { name: "Shubhankar Warkhade", contactNo: 7276040197 },
    { name: "Pranay Sangolkar", contactNo: 7249827592 },
    { name: "Suniti Bhavargade", contactNo: 9075461860 },
    { name: "Vinay Titarmare", contactNo: 8208869244 },
    { name: "Satvik Yewale", contactNo: 9309401976 },
    { name: "Ayush Nafdey", contactNo: 9689838637 },
  ];

  // Toggle modal visibility
  const toggleModal = () => {
    setIsModalOpen(!isModalOpen);
  };

  return (
    <>
      {/* Support Button */}
      <div
        onClick={toggleModal}
        className="fixed bg-blue-500 px-5 rounded-r-full bottom-5 md:bottom-20 left-0 py-2 flex items-center cursor-pointer"
      >
        <button className="uil uil-envelope-question text-4xl text-white"></button>
      </div>

      {/* Modal */}
      {isModalOpen && (
        <div className="fixed inset-0 bg-gray-800 bg-opacity-50 flex justify-center items-center z-20 transition-opacity duration-300 ease-in-out">
          <div className="bg-white w-10/12 md:w-1/2 rounded-lg shadow-lg overflow-hidden">
            <div className="flex justify-between items-center bg-blue-600 text-white p-4">
              <h2 className="text-lg">Support Team Contacts</h2>
              <button
                onClick={toggleModal}
                className="text-white text-xl font-bold cursor-pointer"
              >
                &times;
              </button>
            </div>
            <table className="min-w-full bg-white text-xs rounded-lg shadow-md overflow-hidden">
              <thead>
                <tr className=" text-black bg-blue-50 text-left">
                  <th className="p-4">Name</th>
                  <th className="p-4">Contact Number</th>
                </tr>
              </thead>
              <tbody className="text-gray-700">
                {teamData.map((team, index) => (
                  <tr
                    key={index}
                    className={
                      index % 2 === 0 ? "bg-gray-50 border-b" : "border-b"
                    }
                  >
                    <td className="p-4">{team.name}</td>
                    <td className="p-4">
                      <a
                        href={`https://wa.me/${team.contactNo}`}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-blue-500 hover:underline flex gap-2 items-center   "
                      >
                        <i className="uil uil-whatsapp-alt  text-xl" />
                        {team.contactNo}
                      </a>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      )}
    </>
  );
};

export default Support;
