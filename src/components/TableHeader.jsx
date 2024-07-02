// import React from "react";
// import { TableCell, TableRow, Box } from "@mui/material";
// import styled from "@emotion/styled";
// import "../Components.css";

// const Styledtableheadercell = styled(TableCell)({
//       fontFamily: "system-ui",
//       fontSize: "0.998rem",
//       lineHeight: "2.6rem",
//       borderBottom: "5px solid rgba(224, 224, 224, 1)",
//       padding: "16px",
//       color: "rgb(166 165 165)",
//     })

// const TableHeader = ({ handleSort, getSortIcon }) => {
//   const headerCells = [
//     { key: "hair_color", label: "Hair Color" },
//     { key: "skin_color", label: "Skin Color" },
//     { key: "gender", label: "Gender" },
//     { key: "eye_color", label: "Eye Color" },
//     { key: "birth_year", label: "Birth Year" },
//   ];

//   const getHeaderCellClassName = (key) => {
//     switch (key) {
//       case "Hair Color":
//         return "header-cell-hair-color";
//       case "Skin Color":
//         return "header-cell-skin-color";
//       case "Eye Color":
//         return "header-cell-eye-color";
//       case "Birth Year":
//         return "header-cell-birth-year";
//       case "Gender":
//         return "header-cell-gender";
//       default:
//         return "header-cell-default";
//     }
//   };

//   return (
//     <TableRow>
//       <Styledtableheadercell>
//         <Box className="header-cell-box">
//           <input
//             className="header-cell-checkbox"
//             type="checkbox"
//           />
//           <Box className="header-cell-column">
//             <Box
//               onClick={() => handleSort("name")}
//               className="name-header-styling"
//               style={{ cursor: "pointer" }}  
//             >
//               Name {getSortIcon("name")}
//             </Box>
//           </Box>
//         </Box>
//       </Styledtableheadercell>

//       {headerCells.map(({ key, label }) => (
//         <Styledtableheadercell key={key}>
//         <Box
//           onClick={() => handleSort(key)}
//           className={`${getHeaderCellClassName(key)}`}
//           style={{ cursor: "pointer" }}
//           >
//             {label} {getSortIcon(key)}
//         </Box>
//         </Styledtableheadercell>
//       ))}
//     </TableRow>
//   );
// };

// export default TableHeader;



import React from "react";
import { TableCell, TableRow, Box, TextField } from "@mui/material";
import styled from "@emotion/styled";
import "../Components.css";

const Styledtableheadercell = styled(TableCell)({
  fontFamily: "system-ui",
  fontSize: "0.998rem",
  lineHeight: "2.6rem",
  borderBottom: "5px solid rgba(224, 224, 224, 1)",
  padding: "16px",
  color: "rgb(166 165 165)",
});

const TableHeader = ({ handleSort, getSortIcon }) => {
  const headerCells = [
    { key: "hair_color", label: "Hair Color" },
    { key: "skin_color", label: "Skin Color" },
    { key: "gender", label: "Gender" },
    { key: "eye_color", label: "Eye Color" },
    { key: "birth_year", label: "Birth Year" },
  ];

  return (
    <TableRow>
      <Styledtableheadercell>
        <Box className="header-cell-box">
          <TextField className="header-cell-checkbox" type="checkbox" />
          <Box className="header-cell-column">
            <Box
              onClick={() => handleSort("name")}
              className="name-header-styling"
              style={{ cursor: "pointer" }}
            >
              Name {getSortIcon("name")}
            </Box>
          </Box>
        </Box>
      </Styledtableheadercell>

      {headerCells.map(({ key, label }) => (
        <Styledtableheadercell key={key}>
          <Box
            onClick={() => handleSort(key)}
            className={`header-cell-${label.toLowerCase().replace(/\s+/g, "-")}`}
            style={{ cursor: "pointer" }}
          >
            {label} {getSortIcon(key)}
          </Box>
        </Styledtableheadercell>
      ))}
    </TableRow>
  );
};

export default TableHeader;
