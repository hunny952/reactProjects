import React from "react";
import { TableCell, TableRow, Box, TextField } from "@mui/material";
import styled from "@emotion/styled";
import "../Components.css";

const StyledTableHeaderCell = styled(TableCell)({
  fontFamily: "system-ui",
  fontSize: "0.998rem",
  lineHeight: "1.6rem",
  borderBottom: "5px solid rgba(224, 224, 224, 1)",
  padding: "16px",
  color: "rgb(166 165 165)",
});

const TableHeader = ({ handleSort, getSortIcon }) => {
  const headerCells = [
    { key: "name", label: "Name" },
    { key: "hair_color", label: "Hair Color" },
    { key: "skin_color", label: "Skin Color" },
    { key: "gender", label: "Gender" },
    { key: "eye_color", label: "Eye Color" },
    { key: "birth_year", label: "Birth Year" },
  ];

  return (
    <TableRow>
      {headerCells.map(({ key, label }) => (
        <StyledTableHeaderCell key={key}>
          {key === "name" && (
            <Box className="header-cell-box">
              <TextField className="header-cell-checkbox" type="checkbox" />
            </Box>
          )}
          <Box
            onClick={() => handleSort(key)}
            className={`header-cell-${label.toLowerCase().replace(/\s+/g, "-")}`}
            style={{ cursor: "pointer" }}
          >
            {label} {getSortIcon(key)}
          </Box>
        </StyledTableHeaderCell>
      ))}
    </TableRow>
  );
};

export default TableHeader;
