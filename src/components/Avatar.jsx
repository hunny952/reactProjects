import React from "react";
import { Box, TextField } from "@mui/material";
import "../Components.css";

const getInitials = (name) => {
  const nameArray = name.split(" ");
  return nameArray
  .slice(0, 2)
  .map((part, index) => (index === 0 && nameArray.length === 1 ? part.substring(0, 2) : part.charAt(0)))
  .join("")
  .toUpperCase();
  
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
