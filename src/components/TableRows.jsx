import React from "react";
import { TableCell, TableRow, Box, Chip } from "@mui/material";
import Avatar from "./Avatar";

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
    color: "#000000", // Text color for contrast
  };
};

const TableRows = ({ person }) => {
  const randomColorClass = getRandomColorClass(nameColors);

  return (
    <TableRow>
      <TableCell>
        <Box className="flex-1 flex flex-row items-start justify-between max-w-full gap-[20px] mq1275:flex-wrap">
          <Box className="flex flex-row items-end justify-start py-0 pr-7 pl-0 gap-[14.2px] text-center text-base-4 text-white">
            <Box className="flex flex-row items-start justify-start gap-[8.6px] z-[1]">
              <Avatar person={person} colorClass={randomColorClass} />
            </Box>
          </Box>
        </Box>
      </TableCell>

      <TableCell>
        <Box className="flex flex-col items-start justify-start pt-[7.1px] px-0 pb-0">
          <Box className="relative tracking-[0.02em] inline-block min-w-[121px] whitespace-nowrap z-[1]">
            {person.hair_color.toUpperCase()}
          </Box>
        </Box>
      </TableCell>

      <TableCell>
        <Box className="w-[155.2px] flex flex-col items-start justify-start pt-[7.1px] px-0 pb-0 box-border text-gray-300">
          <Box className="flex flex-row items-start justify-start gap-[8.5px]">
            <Box className="flex flex-col items-start justify-start pt-[8.5px] px-0 pb-0">
              <Box
                className={`w-2.5 h-2.5 relative rounded-[50%] ${randomColorClass} z-[1]`}
              />
            </Box>
            <Box className="relative tracking-[0.02em] inline-block min-w-[91.1px] z-[1]">
              {person.skin_color.toUpperCase()}
            </Box>
          </Box>
        </Box>
      </TableCell>

      <TableCell>
        <Box className="w-[98.3px] flex flex-col items-start justify-start pt-[9.2px] pb-0 pr-[21px] pl-0 box-border text-center text-mid-2 text-slategray">
          <Box className="self-stretch flex flex-row items-start justify-start gap-[5.7px]">
            <img
              className="h-[25.6px] w-[25.6px] relative overflow-hidden shrink-0 min-h-[26px] z-[1]"
              loading="lazy"
              alt=""
              src={`${getImgSrc(person.gender)}`}
            />

            <Box className="flex-1 flex flex-col items-start justify-start pt-[2.2px] px-0 pb-0">
              <Box className="self-stretch relative tracking-[0.02em] font-medium inline-block min-w-[45.5px] z-[1]">
                {person.gender.toUpperCase()}
              </Box>
            </Box>
          </Box>
        </Box>
      </TableCell>

      <TableCell>
        <Chip label={person.eye_color.toUpperCase()} style={getEyeColorStyle(person.eye_color)} />
      </TableCell>

      <TableCell>
        <Box className="flex flex-col items-start justify-start pt-[7.1px] px-0 pb-0">
          <Box className="relative tracking-[0.02em] z-[1]">
            {person.birth_year}
          </Box>
        </Box>
      </TableCell>
    </TableRow>
  );
};

export default TableRows;
