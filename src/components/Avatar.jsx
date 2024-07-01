import React from "react";
import { Box } from "@mui/material";

const getInitials = (name) => {
  const nameArray = name.split(" ");
  
  if (nameArray.length === 1) {
    // Single word name, return the first two letters
    return nameArray[0].substring(0, 2).toUpperCase();
  } else {
    // Multiple words, return the first letter of the first two words
    return nameArray
      .slice(0, 2)
      .map((part) => part.charAt(0).toUpperCase())
      .join("");
  }
};

const Avatar = ({ person, colorClass }) => {
  return (
    <>
      <Box className="flex flex-col items-start justify-end pt-0 px-0 pb-[5.7px]">
        <input
          className="m-0 w-[25.6px] h-[26.6px] relative top-[7px] [filter:drop-shadow(0px_2.8px_5.69px_rgba(0,_28,_63,_0.21))] rounded-[7.11px] box-border z-[1] border-[1.4px] border-solid border-gainsboro"
          type="checkbox"
        />
      </Box>
      <Box className="h-[38.4px] w-[38.4px] relative shrink-0 [debug_commit:69da668]">
        <Box
          className={`absolute top-[0px] left-[0px] rounded-[50%] ${colorClass} w-full h-full`}
        />
        <Box className="absolute top-[10.2px] left-[9.4px] tracking-[0.02em] font-medium inline-block w-[20.5px] h-[19.2px] min-w-[20.5px] z-[1]">
          {getInitials(person.name)}
        </Box>
      </Box>
      <Box className="flex flex-col items-start justify-start pt-[7.2px] px-0 pb-0 text-left text-lgi-9 text-darkslategray-100">
        <Box className="relative tracking-[0.02em] font-medium shrink-0 [debug_commit:69da668]">
          {person.name}
        </Box>
      </Box>
    </>
  );
};

export default Avatar;
