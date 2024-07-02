import React from "react";
import { Box, TextField } from "@mui/material";
import "../Components.css";

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
      <Box className="avatar-container">
        <TextField
          className="avatar-checkbox"
          type="checkbox"
        />
      </Box>
      <Box className="avatar-image-container">
        <Box
          className={`avatar-image ${colorClass}`}
        />
        <Box className="avatar-initials">
          {getInitials(person.name)}
        </Box>
      </Box>
      <Box className="avatar-name-container">
        <Box className="avatar-name">
          {person.name}
        </Box>
      </Box>
    </>
  );
};

export default Avatar;
