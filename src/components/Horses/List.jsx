import React, { useState, useEffect, useRef } from "react";
import { Box, Flex, Text, Button, Image } from "rebass";
import { Input, Label, Select } from "@rebass/forms";
import HorseCard from "./HorseCard";
import { AiOutlineCloseCircle } from "react-icons/ai";

const List = () => {
  const [horseList, setHorseList] = useState(null);
  const [filteredHorseList, setFilteredHorseList] = useState([]);
  const [searchValue, setSearchValue] = useState("");
  const [breedFilter, setBreedFilter] = useState("");
  const [minAgeFilter, setMinAgeFilter] = useState("");
  const [maxAgeFilter, setMaxAgeFilter] = useState("");
  const [genderFilter, setGenderFilter] = useState("");
  const [ownerFilter, setOwnerFilter] = useState("");
  const [stablesFilter, setStablesFilter] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [itemsPerPage, setItemsPerPage] = useState(20);

  const [isOpen, setIsOpen] = useState(false);
  const menuRef = useRef();

  const horseBreeds = [
    "Akhal-Teke",
    "American Cream Draft",
    "American Paint Horse",
    "American Quarter Horse",
    "Andalusian",
    "Appaloosa",
    "Arabian",
    "Australian Stock Horse",
    "Belgian",
    "Clydesdale",
    "Friesian",
    "Hanoverian",
    "Lipizzan",
    "Morgan",
    "Mustang",
    "Percheron",
    "Pinto",
    "Shire",
    "Thoroughbred",
    "Warmblood",
  ];

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

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
      let filteredList = horseList.filter((horse) =>
        horse.name.toLowerCase().includes(searchValue.toLowerCase())
      );

      if (breedFilter !== "") {
        filteredList = filteredList.filter(
          (horse) => horse.breed === breedFilter
        );
      }

      if (minAgeFilter !== "") {
        filteredList = filteredList.filter(
          (horse) => horse.age >= parseInt(minAgeFilter)
        );
      }

      if (maxAgeFilter !== "") {
        filteredList = filteredList.filter(
          (horse) => horse.age <= parseInt(maxAgeFilter)
        );
      }

      if (genderFilter !== "") {
        filteredList = filteredList.filter(
          (horse) => horse.gender === genderFilter
        );
      }

      if (ownerFilter !== "") {
        filteredList = filteredList.filter(
          (horse) => horse.owner === ownerFilter
        );
      }

      if (stablesFilter.length > 0) {
        filteredList = filteredList.filter((horse) =>
          horse.stables.some((stable) => stablesFilter.includes(stable))
        );
      }

      setFilteredHorseList(filteredList);
    }
  }, [
    searchValue,
    breedFilter,
    minAgeFilter,
    maxAgeFilter,
    genderFilter,
    ownerFilter,
    stablesFilter,
    horseList,
  ]);

  const handleSearchChange = (e) => {
    setSearchValue(e.target.value);
    setCurrentPage(1);
  };

  const handleFilterChange = () => {
    setCurrentPage(1);
  };

  const handlePageChange = (pageNumber) => {
    setCurrentPage(pageNumber);
    window.scrollTo(0, 0);
  };

  if (!horseList) {
    return (
      <Flex justifyContent="center" alignItems="center" mt="20%">
        <img
          width={["10%", "10%", "5%"]}
          src="https://media1.giphy.com/media/v1.Y2lkPTc5MGI3NjExZWM5OGM2MjVjMTM2NGNkNjk0ZDMxMmMxMmNkMmNkM2M4YmIyNmRhNSZlcD12MV9pbnRlcm5hbF9naWZzX2dpZklkJmN0PXM/sUaclfFkOtvm0vGNGf/giphy.gif"
          alt="Loading..."
        />
      </Flex>
    );
  }

  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentItems = filteredHorseList.slice(
    indexOfFirstItem,
    indexOfLastItem
  );

  const totalPages = Math.ceil(filteredHorseList.length / itemsPerPage);

  return (
    <Box>
      <Text className="title-font title-color" mb={"2%"} fontSize={32}>
        Horse List
      </Text>

      <Box display={["none", "block", "block"]}>
        <Box bg={"#ebebeb"} px={3} py={3} mb={4}>
          <Flex mb={4}>
            <Box width={"33%"} px={1}>
              <Label>Name:</Label>
              <Input
                width={1}
                type="text"
                value={searchValue}
                onChange={handleSearchChange}
              />
            </Box>
            <Box width={"33%"}  px={1}>
              <Label>Breed:</Label>
              <Select
                width={1}
                id="horseBreed"
                value={breedFilter}
                onChange={(e) => setBreedFilter(e.target.value)}
                onBlur={handleFilterChange}
              >
                <option value="">All</option>
                {horseBreeds.map((breed) => (
                  <option key={breed} value={breed}>
                    {breed}
                  </option>
                ))}
              </Select>
            </Box>

            <Flex width={"33%"}>
              <Box width={"50%"} px={1}>
                <Label>Min Age:</Label>
                <Input
                  width={1}
                  type="number"
                  value={minAgeFilter}
                  onChange={(e) => setMinAgeFilter(e.target.value)}
                  onBlur={handleFilterChange}
                />
              </Box>
              <Box width={"50%"} px={1}>
                <Label>Max Age:</Label>
                <Input
                  width={1}
                  type="number"
                  value={maxAgeFilter}
                  onChange={(e) => setMaxAgeFilter(e.target.value)}
                  onBlur={handleFilterChange}
                />
              </Box>
            </Flex>
          </Flex>
          <Box>
            <Label>Gender:</Label>
            <Select
              width={[1, 1 / 2, 1 / 4]}
              value={genderFilter}
              onChange={(e) => setGenderFilter(e.target.value)}
              onBlur={handleFilterChange}
            >
              <option value="">All</option>
              <option value="Male">Male</option>
              <option value="Female">Female</option>
            </Select>
          </Box>
          <Box>
            <Label>Owner:</Label>
            <Input
              width={[1, 1 / 2, 1 / 4]}
              type="text"
              value={ownerFilter}
              onChange={(e) => setOwnerFilter(e.target.value)}
              onBlur={handleFilterChange}
            />
          </Box>
          <Box>
            <Label>Stables:</Label>
            <Input
              width={[1, 1 / 2, 1 / 4]}
              type="text"
              value={stablesFilter}
              onChange={(e) => setStablesFilter(e.target.value.split(","))}
              onBlur={handleFilterChange}
            />
          </Box>
        </Box>
      </Box>
      <Box display={["block ", "none", "none"]}>
        {!isOpen && (
          <Flex justifyContent="center" mb={4}>
            <Box
              sx={{ cursor: "pointer" }}
              onClick={toggleMenu}
              width={["100%", "100%", "33.33%"]}
              p={2}
              mx={3}
              bg={"#1D3557"}
              color="white"
              fontSize={16}
              fontWeight="bold"
              textAlign="center"
            >
              Filter
            </Box>
          </Flex>
        )}
        {isOpen && (
          <Box bg={"#ebebeb"} px={4} py={3} mb={4}>
            <Box>
              <Label>Name:</Label>
              <Input
                width={[1, 1 / 2, 1 / 4]}
                type="text"
                value={searchValue}
                onChange={handleSearchChange}
              />
            </Box>
            <Box>
              <Label>Breed:</Label>
              <Select
                width={[1, 1 / 2, 1 / 4]}
                id="horseBreed"
                value={breedFilter}
                onChange={(e) => setBreedFilter(e.target.value)}
                onBlur={handleFilterChange}
              >
                <option value="">All</option>
                {horseBreeds.map((breed) => (
                  <option key={breed} value={breed}>
                    {breed}
                  </option>
                ))}
              </Select>
            </Box>
            <Flex>
              <Box width={"50%"} pr={1}>
                <Label>Min Age:</Label>
                <Input
                  width={[1, 1 / 2, 1 / 4]}
                  type="number"
                  value={minAgeFilter}
                  onChange={(e) => setMinAgeFilter(e.target.value)}
                  onBlur={handleFilterChange}
                />
              </Box>
              <Box width={"50%"} pl={1}>
                <Label>Max Age:</Label>
                <Input
                  width={[1, 1 / 2, 1 / 4]}
                  type="number"
                  value={maxAgeFilter}
                  onChange={(e) => setMaxAgeFilter(e.target.value)}
                  onBlur={handleFilterChange}
                />
              </Box>
            </Flex>
            <Box>
              <Label>Gender:</Label>
              <Select
                width={[1, 1 / 2, 1 / 4]}
                value={genderFilter}
                onChange={(e) => setGenderFilter(e.target.value)}
                onBlur={handleFilterChange}
              >
                <option value="">All</option>
                <option value="Male">Male</option>
                <option value="Female">Female</option>
              </Select>
            </Box>
            <Box>
              <Label>Owner:</Label>
              <Input
                width={[1, 1 / 2, 1 / 4]}
                type="text"
                value={ownerFilter}
                onChange={(e) => setOwnerFilter(e.target.value)}
                onBlur={handleFilterChange}
              />
            </Box>
            <Box>
              <Label>Stables:</Label>
              <Input
                width={[1, 1 / 2, 1 / 4]}
                type="text"
                value={stablesFilter}
                onChange={(e) => setStablesFilter(e.target.value.split(","))}
                onBlur={handleFilterChange}
              />
            </Box>
            <Button
              p={2}
              aria-label="Toggle Menu"
              onClick={toggleMenu}
              mx="auto"
              mt={3}
              color={"black"}
              display={"block"}
            >
              <AiOutlineCloseCircle mx="auto" />
            </Button>
          </Box>
        )}
      </Box>
      <Flex flexWrap="wrap" display={"flex"}>
        {currentItems.map((horse) => (
          <Box width={["100%", "100%", "100%", "50%"]} key={horse._id} pb={4} px={1}>
            <HorseCard horse={horse} />
          </Box>
        ))}
      </Flex>

      <Flex justifyContent="center" mt={4}>
        {currentPage > 1 && (
          <>
            <Box
              mr={[2, 2, 4]}
              sx={{ cursor: "pointer" }}
              onClick={() => handlePageChange(1)}
            >
              {"First"}
            </Box>
            <Box
              mr={[2, 2, 4]}
              sx={{ cursor: "pointer" }}
              onClick={() => handlePageChange(currentPage - 1)}
            >
              {"< Prev "}
            </Box>
          </>
        )}
        <Box mx={[2, 2, 4]}>{currentPage}</Box>
        {currentPage < totalPages && (
          <>
            <Box
              ml={[2, 2, 4]}
              sx={{ cursor: "pointer" }}
              onClick={() => handlePageChange(currentPage + 1)}
            >
              {" Next >"}
            </Box>
            <Box
              ml={[2, 2, 4]}
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
