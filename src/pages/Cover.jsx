// import { useState, useEffect } from "react";
// import axios from "axios";
// import styled from "@emotion/styled";
// import Searching from "../components/Searching";
// import {
//   Table,
//   TableBody,
//   TableCell,
//   TableContainer,
//   TableHead,
//   TableRow,
//   Paper,
//   Button,
//   Typography,
//   Box,
// } from "@mui/material";

// const nameColors = [
//   "bg-darkturquoise",
//   "bg-blue-2",
//   "bg-green-2",
//   "bg-yellow",
//   "bg-orange1",
//   "bg-orange",
//   "bg-goldenrod",
//   "bg-darkturquoise",
// ];

// const eyeColors = ["bg-oldlace", "bg-lavenderblush", "bg-mintcream"];
// const eyeText = ["text-indianred", "text-mediumaquamarine", "text-orange1"];

// function getInitials(name) {
//   const nameArray = name.split(" ");
//   if (nameArray.length === 1) {
//     // Single word name, return the first two letters
//     return nameArray[0].substring(0, 2).toUpperCase();
//   } else {
//     // Multiple words, return the first letter of the first two words
//     const initials = nameArray
//       .slice(0, 2)
//       .map((part) => part.charAt(0).toUpperCase())
//       .join("");
//     return initials.length === 1
//       ? nameArray[0].substring(0, 2).toUpperCase()
//       : initials;
//   }
// }

// function getRandomColorClass(lst) {
//   const randomIndex = Math.floor(Math.random() * lst.length);
//   return lst[randomIndex];
// }

// function getImgSrc(gender) {  
//   let imgSrc = "/unknown.png"

//   if (gender === "female") {
//     imgSrc = "/wom.png"
//   }
//   if (gender === "male"){
//     imgSrc = "/man2.png"
//   }
//   return imgSrc
// }

// const Styledtableheadercell = styled(TableCell)({
//   fontFamily: "system-ui",
//   fontSize: "0.998rem",
//   lineHeight: "2.6rem",
//   borderBottom: "5px solid rgba(224, 224, 224, 1)",
//   padding: "16px",
//   color: "rgb(166 165 165)",
// });

// const Cover = () => {
//   const [peopleData, setPeopleData] = useState([]);
//   const [currentPage, setCurrentPage] = useState(1);
//   const [loading, setLoading] = useState(true);
//   const [nextPage, setNextPage] = useState(null);
//   const [prevPage, setPrevPage] = useState(null);
//   const [error, setError] = useState(null);
//   const [searchQuery, setSearchQuery] = useState("");
//   const [sortConfig, setSortConfig] = useState({
//     key: "name",
//     direction: "asc",
//   });

//   useEffect(() => {
//     const fetchPeopleData = async () => {
//       try {
//         const response = await axios.get(
//           `https:swapi.dev/api/people/?page=${currentPage}`
//         );
//         setPeopleData(response.data.results);
//         console.log("peopleData-->", peopleData);
//         setNextPage(response.data.next);
//         setPrevPage(response.data.previous);
//       } catch (error) {
//         setError("Error fetching data.");
//         console.error(error);
//       } finally {
//         setLoading(false);
//       }
//     };
//     fetchPeopleData();
//   }, [currentPage]);

//   const handlePageChange = (page) => {
//     setCurrentPage(page);
//   };

//   const handleSearchChange = (query) => {
//     setSearchQuery(query);
//   };

//   const filterPerson = (person, query) => {
//     console.log("searchQueryIN PERSON FUNC:", query);
//     const values = Object.values(person).flat();
//     return values.some((value) =>
//       value.toString().toLowerCase().includes(query.toLowerCase())
//     );
//   };

//   const filteredPeople = peopleData.filter((person) =>
//     filterPerson(person, searchQuery)
//   );

//   const sortedPeople = [...filteredPeople].sort((a, b) => {
//     let aValue = a[sortConfig.key];
//     let bValue = b[sortConfig.key];

//     if (!isNaN(aValue) && !isNaN(bValue)) {
//       aValue = Number(aValue);
//       bValue = Number(bValue);
//     }

//     if (Array.isArray(aValue)) aValue = aValue.join(", ");
//     if (Array.isArray(bValue)) bValue = bValue.join(", ");

//     if (aValue < bValue) {
//       return sortConfig.direction === "asc" ? -1 : 1;
//     }
//     if (aValue > bValue) {
//       return sortConfig.direction === "asc" ? 1 : -1;
//     }
//     return 0;
//   });

//   const handleSort = (key) => {
//     let direction = "asc";
//     if (sortConfig.key === key && sortConfig.direction === "asc") {
//       direction = "desc";
//     }
//     setSortConfig({ key, direction });
//   };

//   const getSortIcon = (key) => {
//     if (sortConfig.key === key) {
//       return sortConfig.direction === "asc" ? "▲" : "▼";
//     }
//     return "";
//   };

//   if (loading) {
//     return <Typography variant="body1">Loading...</Typography>;
//   }

//   if (error) {
//     return <Typography variant="body1">{error}</Typography>;
//   }

//   return (
//     <Box className="w-full relative bg-whitesmoke-400 overflow-hidden flex flex-col items-center justify-start pt-[76px] pb-5 pr-5 pl-[21px] box-border gap-[64px] leading-[normal] tracking-[normal] text-left text-101xl text-gray-200 font-space-grotesk mq750:gap-[32px] mq450:gap-[16px]">
//       <Box className="w-[1519px] flex flex-row items-start justify-center py-0 pr-0.5 pl-0 box-border max-w-full">
//         <Box className="flex flex-row items-start justify-start gap-[38px] max-w-full mq750:gap-[19px] mq1100:flex-wrap">
//           <b className="h-[162px] w-[287px] relative flex items-center min-w-[287px] mq750:text-29xl mq1100:flex-1 mq450:text-11xl">
//             Table
//           </b>
//           <Box className="h-[162px] w-[646px] relative font-medium text-lightslategray flex items-center min-w-[646px] max-w-full mq750:text-29xl mq750:min-w-full mq1100:flex-1 mq450:text-11xl">
//             Component
//           </Box>
//         </Box>
//       </Box>
//       <TableContainer component={Paper}>
//         <section className="w-[1518.2px] shadow-[0px_142.3px_113.83px_rgba(172,_175,_198,_0.07),_0px_59.4px_47.55px_rgba(172,_175,_198,_0.05),_0px_31.8px_25.42px_rgba(172,_175,_198,_0.04),_0px_17.8px_14.25px_rgba(172,_175,_198,_0.04),_0px_9.5px_7.57px_rgba(172,_175,_198,_0.03),_0px_3.9px_3.15px_rgba(172,_175,_198,_0.02)] rounded-[8.54px] bg-white box-border flex flex-col items-end justify-start pt-[18px] px-0 pb-[17px] gap-[12.8px] max-w-full text-left text-mid-1 text-darkgray font-helvetica-neue border-[1.4px] border-solid border-aliceblue">
//           <Box className="self-stretch h-[885px] relative shadow-[0px_142.3px_113.83px_rgba(172,_175,_198,_0.07),_0px_59.4px_47.55px_rgba(172,_175,_198,_0.05),_0px_31.8px_25.42px_rgba(172,_175,_198,_0.04),_0px_17.8px_14.25px_rgba(172,_175,_198,_0.04),_0px_9.5px_7.57px_rgba(172,_175,_198,_0.03),_0px_3.9px_3.15px_rgba(172,_175,_198,_0.02)] rounded-[8.54px] bg-white box-border hidden border-[1.4px] border-solid border-aliceblue" />
//           <img
//             className="w-[1478.3px] relative max-h-full hidden max-w-full"
//             alt=""
//             src="/vector-2.svg"
//           />
//           <Box className="self-stretch flex flex-row items-start justify-end py-0 px-5 box-border max-w-full">
//             <Searching handleSearchChange={handleSearchChange} />
//           </Box>

//           <Box className="w-[1506.3px] flex flex-row items-start justify-end pt-0 px-2 pb-[18.5px] box-border max-w-full">
//             <Box className="flex-1 flex flex-row flex-wrap items-end justify-start gap-[2.9px] max-w-full">
//               <Box className="flex-1 flex flex-col items-start justify-start gap-[22.8px] max-w-full mq1100:min-w-full">
//                 <Table>
//                   <TableHead>
//                     <TableRow>
//                       <Styledtableheadercell>
//                         <Box className="flex flex-row items-start justify-start gap-[14.2px]">
//                           <input
//                             className="m-0 h-[25.6px] w-[25.6px] relative [filter:drop-shadow(0px_2.8px_5.69px_rgba(0,_28,_63,_0.21))] rounded-[7.11px] box-border z-[1] border-[1.4px] border-solid border-gainsboro"
//                             type="checkbox"
//                           />
//                           <Box className="flex flex-col items-start justify-start pt-[2.9px] px-0 pb-0">
//                             <Box
//                               onClick={() => handleSort("name")}
//                               className="relative tracking-[0.02em] font-medium inline-block min-w-[81.1px] z-[1]"
//                             >
//                               Name {getSortIcon("name")}
//                             </Box>
//                           </Box>
//                         </Box>
//                       </Styledtableheadercell>

//                       <Styledtableheadercell>
//                         <Box className="w-32 flex flex-col items-start justify-start">
//                           <Box
//                             onClick={() => handleSort("hair_color")}
//                             className="relative tracking-[0.02em] font-medium inline-block min-w-[51.2px] z-[1]"
//                           >
//                             Hair Color {getSortIcon("hair_color")}
//                           </Box>
//                         </Box>
//                       </Styledtableheadercell>

//                       <Styledtableheadercell>
//                         <Box
//                           onClick={() => handleSort("skin_color")}
//                           className="relative tracking-[0.02em] font-medium z-[1]"
//                         >
//                           Skin Color {getSortIcon("skin_color")}
//                         </Box>
//                       </Styledtableheadercell>

//                       <Styledtableheadercell>
//                         <Box className="w-[133.9px] flex flex-col items-start justify-start py-0 pr-5 pl-0 box-border">
//                           <Box
//                             onClick={() => handleSort("gender")}
//                             className="relative tracking-[0.02em] font-medium inline-block min-w-[96.8px] z-[1]"
//                           >
//                             Gender {getSortIcon("gender")}
//                           </Box>
//                         </Box>
//                       </Styledtableheadercell>

//                       <Styledtableheadercell>
//                         <Box
//                           onClick={() => handleSort("eye_color")}
//                           className="relative tracking-[0.02em] font-medium inline-block min-w-[129.5px] z-[1]"
//                         >
//                           Eye Color {getSortIcon("eye_color")}
//                         </Box>
//                       </Styledtableheadercell>

//                       <Styledtableheadercell>
//                         <Box
//                           onClick={() => handleSort("birth_year")}
//                           className="relative tracking-[0.02em] font-medium inline-block min-w-[56.9px] z-[1]"
//                         >
//                           Birth Year {getSortIcon("birth_year")}
//                         </Box>
//                       </Styledtableheadercell>
//                     </TableRow>
//                   </TableHead>

//                   <TableBody>
//                     {sortedPeople.map((person) => (
//                       <TableRow key={person.url}>
//                         <TableCell>
//                           <Box className="flex-1 flex flex-row items-start justify-between max-w-full gap-[20px] mq1275:flex-wrap">
//                             <Box className="flex flex-row items-end justify-start py-0 pr-7 pl-0 gap-[14.2px] text-center text-base-4 text-white">
//                               <Box className="flex flex-col items-start justify-end pt-0 px-0 pb-[5.7px]">
//                                 <input
//                                   className="m-0 w-[25.6px] h-[25.6px] relative [filter:drop-shadow(0px_2.8px_5.69px_rgba(0,_28,_63,_0.21))] rounded-[7.11px] box-border z-[1] border-[1.4px] border-solid border-gainsboro"
//                                   type="checkbox"
//                                 />
//                               </Box>
//                               <Box className="flex flex-row items-start justify-start gap-[8.6px] z-[1]">
//                                 <Box className="h-[38.4px] w-[38.4px] relative shrink-0 [debug_commit:69da668]">
//                                   <Box
//                                     className={`absolute top-[0px] left-[0px] rounded-[50%] ${getRandomColorClass(
//                                       nameColors
//                                     )} w-full h-full`}
//                                   />
//                                   <Box className="absolute top-[10.2px] left-[9.4px] tracking-[0.02em] font-medium inline-block w-[20.5px] h-[19.2px] min-w-[20.5px] z-[1]">
//                                     {getInitials(person.name)}
//                                   </Box>
//                                 </Box>
//                                 <Box className="flex flex-col items-start justify-start pt-[7.2px] px-0 pb-0 text-left text-lgi-9 text-darkslategray-100">
//                                   <Box className="relative tracking-[0.02em] font-medium shrink-0 [debug_commit:69da668]">
//                                     {person.name}
//                                   </Box>
//                                 </Box>
//                               </Box>
//                             </Box>
//                           </Box>
//                         </TableCell>

//                         <TableCell>
//                           <Box className="flex flex-col items-start justify-start pt-[7.1px] px-0 pb-0">
//                             <Box className="relative tracking-[0.02em] inline-block min-w-[121px] whitespace-nowrap z-[1]">
//                               {person.hair_color.toUpperCase()}
//                             </Box>
//                           </Box>
//                         </TableCell>

//                         <TableCell>
//                           <Box className="w-[155.2px] flex flex-col items-start justify-start pt-[7.1px] px-0 pb-0 box-border text-gray-300">
//                             <Box className="flex flex-row items-start justify-start gap-[8.5px]">
//                               <Box className="flex flex-col items-start justify-start pt-[8.5px] px-0 pb-0">
//                                 <Box
//                                   className={`w-2.5 h-2.5 relative rounded-[50%] ${getRandomColorClass(
//                                     nameColors
//                                   )} z-[1]`}
//                                 />
//                               </Box>
//                               <Box className="relative tracking-[0.02em] inline-block min-w-[91.1px] z-[1]">
//                                 {person.skin_color.toUpperCase()}
//                               </Box>
//                             </Box>
//                           </Box>
//                         </TableCell>

//                         <TableCell>
//                           <Box className="w-[98.3px] flex flex-col items-start justify-start pt-[9.2px] pb-0 pr-[21px] pl-0 box-border text-center text-mid-1 text-slategray">
//                             <Box className="self-stretch flex flex-row items-start justify-start gap-[5.7px]">
                              
//                               <img
//                                 className="h-[25.6px] w-[25.6px] relative overflow-hidden shrink-0 min-h-[26px] z-[1]"
//                                 loading="lazy"
//                                 alt=""
//                                 src={`${getImgSrc(person.gender)}`}
//                               />

//                               <Box className="flex-1 flex flex-col items-start justify-start pt-[2.2px] px-0 pb-0">
//                                 <Box className="self-stretch relative tracking-[0.02em] font-medium inline-block min-w-[45.5px] z-[1]">
//                                   {person.gender.toUpperCase()}
//                                 </Box>
//                               </Box>
                            
//                             </Box>
//                           </Box>
//                         </TableCell>

//                         <TableCell>
//                           <Box
//                             className={`flex flex-col items-start justify-start pt-[2.8px] pb-0 pr-[22px] pl-0 text-mid-1 ${getRandomColorClass(
//                               eyeText
//                             )} font-product-sans`}
//                           >
//                             <Box
//                               className={`rounded-[38.42px] ${getRandomColorClass(
//                                 eyeColors
//                               )} flex flex-row items-start justify-start py-[5.7px] px-3.5 z-[1]`}
//                             >
//                               <b className="relative tracking-[0.02em] font-bold inline-block min-w-[78.3px]">
//                                 {person.eye_color.toUpperCase()}
//                               </b>
//                             </Box>
//                           </Box>
//                         </TableCell>

//                         <TableCell>
//                           <Box className="flex flex-col items-start justify-start pt-[7.1px] px-0 pb-0">
//                             <Box className="relative tracking-[0.02em] z-[1]">
//                               {person.birth_year}
//                             </Box>
//                           </Box>
//                         </TableCell>
//                       </TableRow>
//                     ))}
//                   </TableBody>
//                 </Table>
//               </Box>
//             </Box>
//           </Box>

//           <Box
//             style={{
//               display: "flex",
//               justifyContent: "center",
//               marginTop: "20px",
//               position: "relative",
//               right: "40rem",
//             }}
//           >
//             <Button
//               variant="contained"
//               onClick={() => handlePageChange(currentPage - 1)}
//               disabled={!prevPage}
//               style={{ marginRight: "10px", marginBottom: "10px" }}
//             >
//               Previous
//             </Button>
//             <Button
//               variant="contained"
//               onClick={() => handlePageChange(currentPage + 1)}
//               disabled={!nextPage}
//               style={{ marginBottom: "10px" }}
//             >
//               Next
//             </Button>
//           </Box>
//         </section>
//       </TableContainer>
//     </Box>
//   );
// };

// export default Cover;


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
          `https:swapi.dev/api/people/?page=${currentPage}`
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
          <TableComponent
            sortedPeople={sortedPeople}
            handleSort={handleSort}
            getSortIcon={getSortIcon}
          />
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
