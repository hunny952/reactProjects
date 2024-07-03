import { useState, useEffect } from "react";
import axios from "axios";
import { Box, Button, Typography, TableContainer, Paper } from "@mui/material";
import TableComponent from "../components/table";
import Searching from "../components/searchToolbar";
import "../Cover.css";

const Cover = () => {
  const [peopleData, setPeopleData] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [loading, setLoading] = useState(true);
  const [pagination, setPagination] = useState({ next: null, prev: null });
  const [error, setError] = useState(null);
  const [searchQuery, setSearchQuery] = useState("");
  const [totalItems, setTotalItems] = useState(0); 
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
      setTotalItems(response.data.count); // Set total number of items
      setPagination({ next: response.data.next, prev: response.data.previous });
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

  const filteredPeople = searchQuery
    ? peopleData.filter((person) => filterPerson(person, searchQuery))
    : peopleData;

  const sortedPeople = [...filteredPeople].sort((a, b) => {
    let aValue = a[sortConfig.key];
    let bValue = b[sortConfig.key];

    if (typeof aValue === "string") {
      aValue = aValue.toLowerCase();
      bValue = bValue.toLowerCase();
    }

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

  // Calculate pagination details
  const itemsPerPage = 10
  const totalPages = Math.ceil(totalItems / itemsPerPage);
  const currentItemCount = sortedPeople.length;
  const startIndex = (currentPage - 1) * itemsPerPage + 1;
  const endIndex = startIndex + currentItemCount - 1;

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
          <Box className="cover-title">Star Wars</Box>
          <Box className="cover-subtitle">Characters</Box>
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
      </TableContainer>

      <section className="cover-footer">
        <Box className="cover-buttons">
          <Button
            variant="contained"
            onClick={() => handlePageChange(currentPage - 1)}
            disabled={!pagination.prev}
            style={{ marginRight: "10px", marginBottom: "5px" }}
          >
            Previous
          </Button>
          <Button
            variant="contained"
            onClick={() => handlePageChange(currentPage + 1)}
            disabled={!pagination.next}
            style={{ marginBottom: "5px" }}
          >
            Next
          </Button>
        </Box>
        <Box className="pagination-details">
          <Typography variant="body2" style={{ marginLeft: "15px",
          fontFamily: "Space Grotesk, sans-serif",
          fontSize:"0.998rem", lineHeight: 4.43, 
          letterSpacing: "0.01071em"}}>
            Page {currentPage} of {totalPages}, Showing {startIndex} to{" "}
            {endIndex} of {totalItems} items
          </Typography>
        </Box>
      </section>
    </Box>
  );
};

export default Cover;
