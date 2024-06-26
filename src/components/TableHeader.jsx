import React from "react";
import { TableCell, TableRow, Box } from "@mui/material";
import styled from "@emotion/styled";

const Styledtableheadercell = styled(TableCell)({
      fontFamily: "system-ui",
      fontSize: "0.998rem",
      lineHeight: "2.6rem",
      borderBottom: "5px solid rgba(224, 224, 224, 1)",
      padding: "16px",
      color: "rgb(166 165 165)",
    })

const TableHeader = ({ handleSort, getSortIcon }) => {
  const headerCells = [
    "hair_color",
    "skin_color",
    "gender",
    "eye_color",
    "birth_year",
  ];

  const getHeaderCellClassName = (key) => {
    switch (key) {
      case "hair_color":
        return "relative tracking-[0.02em] font-medium inline-block min-w-[51.2px] z-[1]";
      case "skin_color":
        return "relative tracking-[0.02em] font-medium z-[1]";
      case "eye_color":
        return "relative tracking-[0.02em] font-medium inline-block min-w-[129.5px] z-[1]";
      case "birth_year":
        return "relative tracking-[0.02em] font-medium inline-block min-w-[56.9px] z-[1]";
      case "gender":
        return "relative tracking-[0.02em] font-medium inline-block min-w-[96.8px] z-[1]";
      default:
        return "w-32 bg-white";
    }
  };

  return (
    <TableRow>
      <Styledtableheadercell>
        <Box className="flex flex-row items-start justify-start gap-[14.2px]">
          <input
            className="m-0 h-[25.6px] w-[25.6px] relative top-[11px] [filter:drop-shadow(0px_2.8px_5.69px_rgba(0,_28,_63,_0.21))] rounded-[7.11px] box-border z-[1] border-[1.4px] border-solid border-gainsboro"
            type="checkbox"
          />
          <Box className="flex flex-col items-start justify-start pt-[2.9px] px-0 pb-0">
            <Box
              onClick={() => handleSort("name")}
              className="relative tracking-[0.02em] font-medium inline-block min-w-[81.1px] z-[1]"
            >
              Name {getSortIcon("name")}
            </Box>
          </Box>
        </Box>
      </Styledtableheadercell>
      {headerCells.map((key) => (
        <Styledtableheadercell key={key}>
          <Box
            onClick={() => handleSort(key)}
            className={`${getHeaderCellClassName(
              key
            )}`}
          >
              {key.charAt(0).toUpperCase() + key.slice(1)} {getSortIcon(key)}
          </Box>
        </Styledtableheadercell>
      ))}
    </TableRow>
  );
};

export default TableHeader;
