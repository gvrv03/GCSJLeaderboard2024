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
import Button from "@mui/material/Button";
import SortIcon from "@mui/icons-material/Sort";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Link from "next/link";

import PersonIcon from "@mui/icons-material/Person";
export default function MUITable({ data }) {
  const [searchTerm, setSearchTerm] = useState("");
  const [sortOrder, setSortOrder] = useState("desc");
  const [sortedColumn, setSortedColumn] = useState("Badges");

  const columnsToExclude = [
    "Timestamp",
    "Phone_No",
    "Email",
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
        padding: "24px",
        backgroundColor: "#f9fafb",
        boxShadow: "0px 4px 20px rgba(0, 0, 0, 0.1)",
        borderRadius: 3,
        width: "100%",
      }}
    >
      <Box sx={{ display: "flex", alignItems: "center", marginBottom: 2 }}>
        <TextField
          label="Search"
          variant="outlined"
          fullWidth
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          sx={{
            marginBottom: "16px",
            backgroundColor: "white",
            borderRadius: 1,
          }}
        />
      </Box>
      <TableContainer sx={{ maxHeight: 600 }}>
        <Table stickyHeader aria-label="sticky table">
          <TableHead>
            <TableRow>
              <TableCell
                className=" md:text-xs text-[10px]"
                sx={{
                  fontWeight: "bold",
                  color: "#1976d2",
                  backgroundColor: "#e3f2fd",
                }}
              >
                SrNo
              </TableCell>
              {headers.map((column) => {
                return (
                  <TableCell
                    className=" md:text-xs  text-[10px]"
                    key={column}
                    sx={{
                      fontWeight: "bold",
                      backgroundColor: "#e3f2fd",
                      color: "#1976d2",
                      width:" 100%",
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
                <TableCell className=" md:text-xs text-[10px]">
                  {rowIndex + 1}
                </TableCell>

                {headers.map((header) => {
                  return (
                    <TableCell
                      className=" md:text-xs text-[10px]"
                      key={`${rowIndex}-${header}`}
                    >
                      {header == "Name" ? (
                        <div className="flex gap-2 items-center ">
                          <PersonIcon />
                          <p>{row[header]}</p>{" "}
                        </div>
                      ) : header == "Profile_URL" ? (
                        <Link
                          href={row[header]}
                          u
                          className=" bg-blue-50 text-center font-semibold text-[8px] p-2 rounded-full "
                          target="_blank"
                        >
                          Profile
                        </Link>
                      ) : header != "Name" ? (
                        <div className="text-center">{row[header]}</div>
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
