import { TextField, Button, Box } from "@mui/material";
import "../Components.css";

const SearchToolbar = ({ className = "", handleSearchChange }) => {
  const handleInputChange = (event) => {
    handleSearchChange(event.target.value);
  };

  return (
    <Box className={`searching-container ${className}`}>
      <Box className="searching-background" />
      <TextField
        className="searching-textfield"
        placeholder="Search for names, gender, hair color.."
        variant="outlined"
        onChange={handleInputChange}
        InputProps={{
          startAdornment: (
            <img width="24.2px" height="24.2px" src="/search-1.svg" />
          ),
        }}
        sx={{
          "& fieldset": { borderColor: "rgba(230, 232, 234, 0.62)" },
          "& .MuiInputBase-root": {
            height: "49.8px",
            backgroundColor: "#fff",
            paddingLeft: "12.9px",
            borderRadius: "9.96px",
            fontSize: "17.1px",
          },
          "& .MuiInputBase-input": { paddingLeft: "11.3px", color: "#8d9196" },
          width: "483.8px",
        }}
      />
      <Box className="searching-button-container">
        <Box className="searching-button-group">
          <Button
            className="searching-filter-button"
            startIcon={<img width="25.6px" height="25.6px" src="/filter.svg" />}
            variant="contained"
            sx={{
              textTransform: "none",
              color: "#495d75",
              fontSize: "19.9",
              background: "#fff",
              border: "#e8eef1 solid 1.4px",
              borderRadius: "8.54px",
              "&:hover": { background: "#fff" },
            }}
          >
            Filters
          </Button>
          <Box className="searching-more-button-container">
            <Box className="flex flex-row items-center justify-center">
              <img
                className="searching-more-button"
                loading="lazy"
                alt=""
                src="/morehorizontal@2x.png"
              />
            </Box>
          </Box>
        </Box>
      </Box>
    </Box>
  );
};

export default SearchToolbar;
