import React from "react";
import { Box } from "@mui/material";

function getImgSrc(gender) {
  let imgSrc = "/unknown.png";

  if (gender === "female") {
    imgSrc = "/wom.png";
  }
  if (gender === "male") {
    imgSrc = "/man2.png";
  }
  return imgSrc;
}

const Gender = ({ person }) => {
  return (
    <>
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
    </>
  );
};

export default Gender;
