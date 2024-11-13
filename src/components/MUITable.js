"use client";
import { useState } from "react";
import Paper from "@mui/material/Paper";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import TextField from "@mui/material/TextField";
import SortIcon from "@mui/icons-material/Sort";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Link from "next/link";
import Completion from "./Completion";
import Image from "next/image";

export default function MUITable({ data, complform,tableHeight }) {
  const [searchTerm, setSearchTerm] = useState("");
  const [sortOrder, setSortOrder] = useState("desc");
  const [sortedColumn, setSortedColumn] = useState("Badge");

  const columnsToExclude = [
    "Timestamp",
    "Phone_No",
    "Email",
    "Extra",
    "Arcade"
  ];
  if (!data || data.length === 0) {
    return (
      <Typography variant="h6" textAlign="center" sx={{ marginTop: 4 }}>
        No data available
      </Typography>
    );
  }

  const headers = Object.keys(data[0]).filter(
    (header) => !columnsToExclude.includes(header)
  );

  const sortData = (data, column) => {
    return data.sort((a, b) => {
      const valA = parseFloat(a[column]) || 0;
      const valB = parseFloat(b[column]) || 0;
      return sortOrder === "asc" ? valA - valB : valB - valA;
    });
  };

  const filteredData = data.filter((row) => {
    return headers.some((header) => {
      return String(row[header])
        .toLowerCase()
        .includes(searchTerm.toLowerCase());
    });
  });

  const sortedData = sortData([...filteredData], sortedColumn);

  return (
    <Paper
      sx={{
        padding: "10px",
        boxShadow: "none",
        borderRadius: 3,
      }}
      className="container m-auto md:border   border-gray-200 "
    >
      <Box className="flex gap-2 items-center justify-center ">
        <TextField
          label="Search"
          // variant="outlined"
          fullWidth
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          sx={{
            outline: "none",
            backgroundColor: "white",
            borderRadius: 1,
            fontSize: "12px",
          }}
        />
        {complform && <Completion />}
      </Box>
      <TableContainer sx={{ maxHeight: tableHeight, marginTop: "10px" }}>
        <Table stickyHeader aria-label="sticky table">
          <TableHead>
            <TableRow>
              <TableCell
                className=" md:text-xs  text-[10px]"
                sx={{
                  fontWeight: "bold",
                  backgroundColor: "#e3f2fd",
                  color: "#1976d2",
                  fontSize: "13px",
                  padding: "15px 8px",
                }}
              >
                SN
              </TableCell>
              {headers.map((column) => {
                return (
                  <TableCell
                    className=" md:text-xs uppercase  text-[10px]"
                    key={column}
                    sx={{
                      fontWeight: "bold",
                      backgroundColor: "#e3f2fd",
                      color: "#1976d2",
                      width: " 100%",
                      fontSize: "13px",
                      padding: "15px 8px",
                    }}
                  >
                    {column}
                  </TableCell>
                );
              })}
            </TableRow>
          </TableHead>
          <TableBody>
            {sortedData.map((row, rowIndex) => (
              <TableRow
                hover
                key={rowIndex}
                sx={{
                  "&:hover": { backgroundColor: "#f1f3f4" },
                  transition: "background-color 0.3s ease",
                }}
              >
                <TableCell className=" ">{rowIndex + 1}</TableCell>
                {headers.map((header) => {
                  return (
                    <TableCell
                      className="uppercase"
                      sx={{
                        padding: "15px 8px",
                        fontSize: "12px",
                      }}
                      key={`${rowIndex}-${header}`}
                    >
                      {header == "Link" ? (
                        <Link
                          href={row[header]}
                          className=" bg-blue-50 text-center font-semibold text-[10px] p-3 rounded-md "
                          target="_blank"
                        >
                          Visit
                        </Link>
                      ) : header == "Profile" ? (
                        <Link
                          href={row[header]}
                          className=" bg-yellow-50 border border-yellow-200 text-center font-semibold text-[9px] p-3 rounded-md "
                          target="_blank"
                        >
                          Profile
                        </Link>
                      ) : header == "Lab_URL" ? (
                        <Link
                          href={row[header]}
                          className=" bg-blue-50 text-center font-semibold text-[10px] p-3 rounded-md "
                          target="_blank"
                        >
                          Open_Lab
                        </Link>
                      ) : header == "YouTube_Link" ? (
                        <Link
                          href={row[header]}
                          className=" bg-red-100 to-red-500 text-center font-semibold text-[10px] p-3 rounded-md "
                          target="_blank"
                        >
                          Youtube
                        </Link>
                      ) : header == "Name" ? (
                        <div className="flex gap-2">
                          <Image src="/badge.png" className="w-4 h-4"  width={10} height={10} />
                          <p  >{row[header]}</p>{" "}
                        </div>
                      ) : (
                        row[header]
                      )}
                    </TableCell>
                  );
                })}
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
      {!sortedData.length && (
        <Typography
          variant="body1"
          textAlign="center"
          sx={{ padding: "16px", color: "#f44336" }}
        >
          No data found
        </Typography>
      )}
    </Paper>
  );
}
