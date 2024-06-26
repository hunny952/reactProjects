import React from "react";
import { TableCell, TableRow, Box } from "@mui/material";
import Avatar from "./Avatar";
import SkinColorChecks from "./SkinColorChecks";
import Gender from "./Gender";
import EyeColors from "./EyeColors";

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

const eyeColors = ["bg-oldlace", "bg-lavenderblush", "bg-mintcream"];
const eyeText = ["text-indianred", "text-mediumaquamarine", "text-orange1"];

function getRandomColorClass(lst) {
  const randomIndex = Math.floor(Math.random() * lst.length);
  return lst[randomIndex];
}

const TableRows = ({ person }) => {
  const randomColorClass = getRandomColorClass(nameColors);
  const eyeColor = getRandomColorClass(eyeColors);
  const eyeTextClass = getRandomColorClass(eyeText);

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
            <SkinColorChecks person={person} colorClass={randomColorClass} />
          </Box>
        </Box>
      </TableCell>

      <TableCell>
        <Box className="w-[98.3px] flex flex-col items-start justify-start pt-[9.2px] pb-0 pr-[21px] pl-0 box-border text-center text-mid-2 text-slategray">
          <Box className="self-stretch flex flex-row items-start justify-start gap-[5.7px]">
            <Gender person={person} />
          </Box>
        </Box>
      </TableCell>

      <TableCell>
        <EyeColors
          person={person}
          colorClass={eyeColor}
          textClass={eyeTextClass}
        />
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
