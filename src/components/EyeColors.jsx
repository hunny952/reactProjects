import React from "react";
import { Box } from "@mui/material";

const EyeColors = ({ person, colorClass, textClass }) => {
  return (
    <Box
      className={`flex flex-col items-start justify-start pt-[2.8px] pb-0 pr-[22px] pl-0 text-mid-1 ${textClass} font-product-sans`}
    >
      <Box
        className={`rounded-[38.42px] ${colorClass} flex flex-row items-start justify-start py-[5.7px] px-3.5 z-[1]`}
      >
        <b className="relative tracking-[0.02em] font-bold inline-block min-w-[78.3px]">
          {person.eye_color.toUpperCase()}
        </b>
      </Box>
    </Box>
  );
};

export default EyeColors;
