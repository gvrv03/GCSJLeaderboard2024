// pages/index.js
"use client";
import { useState, useEffect } from "react";
import Table from "./Table";
import MUITable from "./MUITable";
import { CircularProgress, Box, Typography } from "@mui/material"; // Import CircularProgress and Box

export default function HomePage() {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      const googleSheetUrl = "https://docs.google.com/spreadsheets/d/e/2PACX-1vRb7BabzcJ8SeaGga_1ukZQRxeM10NDc0x-L2pCB1VdmoYw--Kw0usTyMU3YmoLjNS3B1qOolibWExR/pub?gid=594514810&single=true&output=tsv";

      try {
        const response = await fetch(googleSheetUrl);
        const tsvData = await response.text();

        // Split the TSV rows by new line
        const rows = tsvData.split("\n");

        // Get the header row (split by tab '\t')
        const header = rows[0].split("\t");

        // Map the rest of the rows to JSON objects
        const jsonData = rows.slice(1).map((row) => {
          const values = row.split("\t"); // Split each row by tab '\t'
          const entry = {};
          header.forEach((key, index) => {
            entry[key] = values[index];
          });
          return entry;
        });

        setData(jsonData); 
        setLoading(false); // Turn off loading once the data is fetched
      } catch (err) {
        setError(err.message); // Catch any errors
        setLoading(false);
      }
    };

    fetchData();
  }, []); 

  if (loading) {
    // Full-screen loading spinner
    return (
      <Box
        sx={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          height: "100vh",
          backgroundColor: "#f9fafb", // Optional: Match the background color of the app
        }}
      >
        <CircularProgress />
        <Typography variant="h6" sx={{ marginLeft: 2 }}>
          Loading...
        </Typography>
      </Box>
    );
  }

  if (error) {
    return <p>Error: {error}</p>;
  }

  console.log(data);
  
  return (
    <div className="container m-auto flex gap-5">
      {/* <pre>{JSON.stringify(data, null, 2)}</pre> */}
      <MUITable data={data} />
    </div>
  );
}
