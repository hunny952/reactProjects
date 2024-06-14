import React from "react";
import { Table, TableBody, TableCell, TableHead, TableRow, Box } from "@mui/material";
import TableHeader from "./TableHeader";
import TableRows from "./TableRows";

const TableComponent = ({ sortedPeople, handleSort, getSortIcon }) => {
  return (
    <Table>
      <TableHead>
        <TableHeader handleSort={handleSort} getSortIcon={getSortIcon} />
      </TableHead>
      <TableBody>
        {sortedPeople.map((person) => (
          <TableRows key={person.url} person={person} />
        ))}
      </TableBody>
    </Table>
  );
};

export default TableComponent;
