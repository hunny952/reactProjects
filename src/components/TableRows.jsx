import React from "react";
import { TableCell, TableRow, Box, Chip } from "@mui/material";
import Avatar from "./Avatar";
import "../Components.css";

const nameColors = [
  "bg-darkturquoise",
  "bg-blue-2",
  "bg-green-2",
  "bg-yellow",
  "bg-orange1",
  "bg-orange",
  "bg-goldenrod",
  "bg-darkturquoise",
];

const getRandomColorClass = (lst) => {
  const randomIndex = Math.floor(Math.random() * lst.length);
  return lst[randomIndex];
};

const getImgSrc = (gender) => {
  let imgSrc;
  switch (gender) {
    case "female":
      imgSrc = "/wom.png";
      break;
    case "male":
      imgSrc = "/man2.png";
      break;
    default:
      imgSrc = "/unknown.png";
  }
  return imgSrc;
};

const eyeColorStyles = {
  backgroundColor: (eyeColor) => {
    switch (eyeColor.toLowerCase()) {
      case "blue":
        return "#ADD8E6"; // Light Blue
      case "brown":
        return "rgba(247, 203, 127, 1)"; // Brown
      case "red":
        return "rgba(253, 224, 233, 1)"; // Red
      case "yellow":
        return "#FFFF00"; // Yellow
      case "black":
        return "rgba(156, 158, 159, 1)"; // Black
      case "hazel":
        return "#8E7618"; // Hazel
      case "grey":
        return "#808080"; // Grey
      case "orange":
        return "rgba(234, 144, 63, 1)"
      default:
        return "#D3D3D3"; // Default to Light Grey
    }
  },
};

const getEyeColorStyle = (eyeColor) => {
  return {
    backgroundColor: eyeColorStyles.backgroundColor(eyeColor),
    position: "relative",
    top: "5px",
    color: "#000000", // Text color for contrast
  };
};

const TableRows = ({ person }) => {
  const randomColorClass = getRandomColorClass(nameColors);

  return (
    <TableRow className="table-row">
      <TableCell>
        <Box className="avatar-container">
          <Box className="avatar-subcontainer">
            <Avatar person={person} colorClass={randomColorClass} />
          </Box>
        </Box>
      </TableCell>

      <TableCell>
        <Box className="hair-color">
          <Box className="hair-color-subcontainer">
            {person.hair_color.toUpperCase()}
          </Box>
        </Box>
      </TableCell>

      <TableCell>
        <Box className="skin-color">
          <Box className="skin-color-container">
            <Box className="skin-color-circle-wrapper">
              <Box className={`skin-color-circle ${randomColorClass}`} />
            </Box>
            <Box className="skin-color-sub-container">
              {person.skin_color.toUpperCase()}
            </Box>
          </Box>
        </Box>
      </TableCell>

      <TableCell>
        <Box className="gender">
          <Box className="gender-container">
            <img
              className="gender-icon"
              loading="lazy"
              alt=""
              src={`${getImgSrc(person.gender)}`}
            />

            <Box className="gender-text-container">
              <Box className="gender-text">
                {person.gender.toUpperCase()}
              </Box>
            </Box>
          </Box>
        </Box>
      </TableCell>

      <TableCell>
        <Chip
          label={person.eye_color.toUpperCase()}
          style={getEyeColorStyle(person.eye_color)}
          className="eye-color-chip"
        />
      </TableCell>

      <TableCell>
        <Box className="birth-year">
          <Box className="birth-year-sub">
            {person.birth_year}
          </Box>
        </Box>
      </TableCell>
    </TableRow>
  );
};

export default TableRows;
