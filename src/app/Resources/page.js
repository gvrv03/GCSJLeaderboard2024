// pages/index.js
"use client";
import { useState, useEffect } from "react";
import MUITable from "@/components/MUITable";
import LoadingSpinner from "@/components/LoadingSpinner";
import Support from "@/components/Support";

export default function Resources() {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      const googleSheetUrl = "https://docs.google.com/spreadsheets/d/e/2PACX-1vRb7BabzcJ8SeaGga_1ukZQRxeM10NDc0x-L2pCB1VdmoYw--Kw0usTyMU3YmoLjNS3B1qOolibWExR/pub?gid=865384749&single=true&output=tsv";

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
      <div className="h-screen">
        <LoadingSpinner />
      </div>
    );
  }

  if (error) {
    return <p>Error: {error}</p>;
  }

  return (
    <div className="container m-auto flex gap-5">
      {/* <pre>{JSON.stringify(data, null, 2)}</pre> */}
      <MUITable data={data}  tableHeight={600} complform={false} />
      <Support/>
    </div>
  );
}
