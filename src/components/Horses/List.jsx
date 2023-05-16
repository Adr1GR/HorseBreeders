import React, { useState, useEffect } from "react";
import { Box, Flex, Text } from "rebass";
import HorseCard from "./HorseCard";

const List = () => {
  const [horseList, setHorseList] = useState(null);
  const [filteredHorseList, setFilteredHorseList] = useState([]);
  const [searchValue, setSearchValue] = useState("");
  const [currentPage, setCurrentPage] = useState(1);
  const [itemsPerPage, setItemsPerPage] = useState(21);

  useEffect(() => {
    const fetchHorses = async () => {
      const response = await fetch(
        `${process.env.REACT_APP_API_URL}/api/horse/?page=${currentPage}&limit=${itemsPerPage}`
      );
      const data = await response.json();
      setHorseList(data);
    };

    fetchHorses();
  }, [currentPage, itemsPerPage]);

  useEffect(() => {
    if (horseList) {
      const filteredList = horseList.filter((horse) =>
        horse.name.toLowerCase().includes(searchValue.toLowerCase())
      );
      setFilteredHorseList(filteredList);
    }
  }, [searchValue, horseList]);

  const handleSearchChange = (e) => {
    setSearchValue(e.target.value);
    setCurrentPage(1);
  };

  const handlePageChange = (pageNumber) => {
    setCurrentPage(pageNumber);
  };

  if (!horseList) {
    return <Text>Loading...</Text>;
  }

  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentItems = filteredHorseList.slice(
    indexOfFirstItem,
    indexOfLastItem
  );

  const totalPages = Math.ceil(filteredHorseList.length / itemsPerPage);

  return (
    <Box p={3}>
      <Text className="title" mb={"5%"} fontSize={32}>
        Horse List
      </Text>

      <Box mb={3}>
        <input
          type="text"
          value={searchValue}
          onChange={handleSearchChange}
          placeholder="Search by name"
        />
      </Box>

      <Flex flexWrap="wrap">
        {currentItems.map((horse) => (
          <Box width={["100%", "50%", "33.33%"]} key={horse._id} pb={4}>
            <HorseCard horse={horse} />
          </Box>
        ))}
      </Flex>

      <Flex justifyContent="center" mt={4}>
        {currentPage > 1 && (
          <>
            <Box
              mr={4}
              sx={{ cursor: "pointer" }}
              onClick={() => handlePageChange(1)}
            >
              {"First"}
            </Box>
            <Box
              mr={4}
              sx={{ cursor: "pointer" }}
              onClick={() => handlePageChange(currentPage - 1)}
            >
              {"< Prev "}
            </Box>
          </>
        )}

        <Box mx={4}>{currentPage}</Box>
        {currentPage < totalPages && (
          <>
            <Box
              ml={4}
              sx={{ cursor: "pointer" }}
              onClick={() => handlePageChange(currentPage + 1)}
            >
              {" Next >"}
            </Box>
            <Box
              ml={4}
              sx={{ cursor: "pointer" }}
              onClick={() => handlePageChange(totalPages)}
            >
              {"Last"}
            </Box>
          </>
        )}
      </Flex>
    </Box>
  );
};

export default List;
