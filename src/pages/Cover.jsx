import { useState, useEffect } from "react";
import axios from "axios";
import { Box, Button, Typography, TableContainer, Paper } from "@mui/material";
import TableComponent from "../components/TableComponent";
import Searching from "../components/Searching";

const Cover = () => {
  const [peopleData, setPeopleData] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [loading, setLoading] = useState(true);
  const [nextPage, setNextPage] = useState(null);
  const [prevPage, setPrevPage] = useState(null);
  const [error, setError] = useState(null);
  const [searchQuery, setSearchQuery] = useState("");
  const [sortConfig, setSortConfig] = useState({
    key: "name",
    direction: "asc",
  });

  useEffect(() => {
    const fetchPeopleData = async () => {
      try {
        const response = await axios.get(
          `https://swapi.dev/api/people/?page=${currentPage}`
        );
        setPeopleData(response.data.results);
        setNextPage(response.data.next);
        setPrevPage(response.data.previous);
      } catch (error) {
        setError("Error fetching data.");
        console.error(error);
      } finally {
        setLoading(false);
      }
    };
    fetchPeopleData();
  }, [currentPage]);

  const handlePageChange = (page) => {
    setCurrentPage(page);
  };

  const handleSearchChange = (query) => {
    setSearchQuery(query);
  };

  const filterPerson = (person, query) => {
    const values = Object.values(person).flat();
    return values.some((value) =>
      value.toString().toLowerCase().includes(query.toLowerCase())
    );
  };

  const filteredPeople = peopleData.filter((person) =>
    filterPerson(person, searchQuery)
  );

  const sortedPeople = [...filteredPeople].sort((a, b) => {
    let aValue = a[sortConfig.key];
    let bValue = b[sortConfig.key];

    if (!isNaN(aValue) && !isNaN(bValue)) {
      aValue = Number(aValue);
      bValue = Number(bValue);
    }

    if (Array.isArray(aValue)) aValue = aValue.join(", ");
    if (Array.isArray(bValue)) bValue = bValue.join(", ");

    if (aValue < bValue) {
      return sortConfig.direction === "asc" ? -1 : 1;
    }
    if (aValue > bValue) {
      return sortConfig.direction === "asc" ? 1 : -1;
    }
    return 0;
  });

  const handleSort = (key) => {
    let direction = "asc";
    if (sortConfig.key === key && sortConfig.direction === "asc") {
      direction = "desc";
    }
    setSortConfig({ key, direction });
  };

  const getSortIcon = (key) => {
    if (sortConfig.key === key) {
      return sortConfig.direction === "asc" ? "▲" : "▼";
    }
    return "";
  };

  if (loading) {
    return <Typography variant="body1">Loading...</Typography>;
  }

  if (error) {
    return <Typography variant="body1">{error}</Typography>;
  }

  return (
    <Box className="w-full relative bg-whitesmoke-400 overflow-hidden flex flex-col items-center justify-start pt-[76px] pb-5 pr-5 pl-[21px] box-border gap-[64px] leading-[normal] tracking-[normal] text-left text-101xl text-gray-200 font-space-grotesk mq750:gap-[32px] mq450:gap-[16px]">
      <Box className="w-[1519px] flex flex-row items-start justify-center py-0 pr-0.5 pl-0 box-border max-w-full">
        <Box className="flex flex-row items-start justify-start gap-[38px] max-w-full mq750:gap-[19px] mq1100:flex-wrap">
          <b className="h-[162px] w-[287px] relative flex items-center min-w-[287px] mq750:text-29xl mq1100:flex-1 mq450:text-11xl">
            Table
          </b>
          <Box className="h-[162px] w-[646px] relative font-medium text-lightslategray flex items-center min-w-[646px] max-w-full mq750:text-29xl mq750:min-w-full mq1100:flex-1 mq450:text-11xl">
            Component
          </Box>
        </Box>
      </Box>
      <TableContainer component={Paper}>
        <section className="w-[1518.2px] shadow-[0px_142.3px_113.83px_rgba(172,_175,_198,_0.07),_0px_59.4px_47.55px_rgba(172,_175,_198,_0.05),_0px_31.8px_25.42px_rgba(172,_175,_198,_0.04),_0px_17.8px_14.25px_rgba(172,_175,_198,_0.04),_0px_9.5px_7.57px_rgba(172,_175,_198,_0.03),_0px_3.9px_3.15px_rgba(172,_175,_198,_0.02)] rounded-[8.54px] bg-white box-border flex flex-col items-end justify-start pt-[18px] px-0 pb-[17px] gap-[12.8px] max-w-full text-left text-mid-1 text-darkgray font-helvetica-neue border-[1.4px] border-solid border-aliceblue">
          <Box className="self-stretch h-[885px] relative shadow-[0px_142.3px_113.83px_rgba(172,_175,_198,_0.07),_0px_59.4px_47.55px_rgba(172,_175,_198,_0.05),_0px_31.8px_25.42px_rgba(172,_175,_198,_0.04),_0px_17.8px_14.25px_rgba(172,_175,_198,_0.04),_0px_9.5px_7.57px_rgba(172,_175,_198,_0.03),_0px_3.9px_3.15px_rgba(172,_175,_198,_0.02)] rounded-[8.54px] bg-white box-border hidden border-[1.4px] border-solid border-aliceblue" />
          <img
            className="w-[1478.3px] relative max-h-full hidden max-w-full"
            alt=""
            src="/vector-2.svg"
          />
          <Box className="self-stretch flex flex-row items-start justify-end py-0 px-5 box-border max-w-full">
            <Searching handleSearchChange={handleSearchChange} />
          </Box>
          {sortedPeople && sortedPeople.length > 0 ? (
            <TableComponent
              sortedPeople={sortedPeople}
              handleSort={handleSort}
              getSortIcon={getSortIcon}
            />
          ) : (
            <Typography variant="body1">No data available.</Typography>
          )}
          <Box
            style={{
              display: "flex",
              justifyContent: "center",
              marginTop: "20px",
              position: "relative",
              right: "40rem",
            }}
          >
            <Button
              variant="contained"
              onClick={() => handlePageChange(currentPage - 1)}
              disabled={!prevPage}
              style={{ marginRight: "10px", marginBottom: "10px" }}
            >
              Previous
            </Button>
            <Button
              variant="contained"
              onClick={() => handlePageChange(currentPage + 1)}
              disabled={!nextPage}
              style={{ marginBottom: "10px" }}
            >
              Next
            </Button>
          </Box>
        </section>
      </TableContainer>
    </Box>
  );
};

export default Cover;
