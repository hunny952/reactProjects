import React from "react";
import { Box } from "@mui/material";

const SkinColorChecks = ({ person, colorClass }) => {
  return (
    <>
      <Box className="flex flex-col items-start justify-start pt-[8.5px] px-0 pb-0">
        <Box
          className={`w-2.5 h-2.5 relative rounded-[50%] ${colorClass} z-[1]`}
        />
      </Box>
      <Box className="relative tracking-[0.02em] inline-block min-w-[91.1px] z-[1]">
        {person.skin_color.toUpperCase()}
      </Box>
    </>
  );
};

export default SkinColorChecks;
