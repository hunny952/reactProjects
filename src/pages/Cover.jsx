import { useState, useEffect } from "react";
import axios from "axios";
import { Box, Button, Typography, TableContainer, Paper } from "@mui/material";
import TableComponent from "../components/TableComponent";
import Searching from "../components/Searching";
import "../Cover.css";

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

  const fetchPeopleData = async (page) => {
    try {
      const response = await axios.get(
        `https://swapi.dev/api/people/?page=${page}`
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

  useEffect(() => {
    setLoading(true);
    fetchPeopleData(currentPage);
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
    <Box className="cover-container">
      <Box className="cover-header">
        <Box className="cover-header-text">
          <b className="cover-title">
            Star Wars
          </b>
          <Box className="cover-subtitle">
            Characters
          </Box>
        </Box>
      </Box>
      <TableContainer component={Paper}>
        <section className="cover-section">
          <Box className="search-container">
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
        </section>

        <Box className="cover-buttons">
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
      </TableContainer>
    </Box>
  );
};

export default Cover;
