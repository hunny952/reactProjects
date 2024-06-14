import { TextField, Button } from "@mui/material";

const Searching = ({ className = "", handleSearchChange }) => {
  const handleInputChange = (event) => {
    handleSearchChange(event.target.value);
  };

  return (
    <div
      className={`flex-1 rounded-[11.38px] bg-whitesmoke-100 flex flex-row items-end justify-between pt-[14.2px] pb-[14.3px] pr-4 pl-3.5 box-border max-w-full gap-[20px] z-[1] mq1100:flex-wrap ${className}`}
    >
      <div className="h-[78.3px] w-[1478.3px] relative rounded-[11.38px] bg-whitesmoke-100 hidden max-w-full" />
      <TextField
        className="[border:none] bg-[transparent] h-[49.8px] w-[483.8px] font-product-sans text-mid-1 text-gray-100 max-w-full z-[2]"
        placeholder="Search for employees, salary amounts.."
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
      <div className="h-[48.3px] w-[200.6px] flex flex-col items-start justify-end pt-0 px-0 pb-[1.3px] box-border">
        <div className="self-stretch flex-1 flex flex-row items-start justify-start gap-[12.8px] z-[2]">
          <Button
            className="self-stretch flex-1 shadow-[0px_4.3px_5.69px_-1.42px_rgba(0,_39,_58,_0.03)]"
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
          <div className="w-[48.4px] shadow-[0px_4.3px_5.69px_-1.42px_rgba(0,_39,_58,_0.03)] rounded-[8.54px] bg-white box-border overflow-hidden shrink-0 flex flex-col items-center justify-center pt-[9px] px-2.5 pb-2 border-[1.4px] border-solid border-whitesmoke-300">
            <div className="flex flex-row items-center justify-center">
              <img
                className="h-[25.6px] w-[25.6px] relative overflow-hidden shrink-0 object-contain"
                loading="lazy"
                alt=""
                src="/morehorizontal@2x.png"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Searching;
