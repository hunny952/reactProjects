import React from "react";
import { Box, TextField } from "@mui/material";
import "../Components.css";

const getInitials = (name) => {
  if (!name) return ""; // Handle empty string case

  const nameArray = name.trim().split(/\s+/);

  if (nameArray.length === 1) {
    // Single word name, return the first two letters
    return nameArray[0].substring(0, 2).toUpperCase();
  } else {
    // Multiple words, return the first letter of the first two words
    const [firstName, secondName] = nameArray;
    return `${firstName.charAt(0)}${secondName.charAt(0)}`.toUpperCase();
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
