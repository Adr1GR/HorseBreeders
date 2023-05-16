import React, { useState, useEffect } from "react";
import { Box, Flex, Text } from "rebass";
import HorseCard from "./HorseCard";

const List = () => {
  const [horseList, setHorseList] = useState(null);

  useEffect(() => {
    fetch(`${process.env.REACT_APP_API_URL}/api/horse/`)
      .then((response) => response.json())
      .then((data) => {
        setHorseList(data);
      });
  }, []);

  if (!horseList) {
    return <Text>Loading...</Text>;
  }

  /**
   * {horseList.map((horse) => (
   *      <HorseCard key={horse._id} horseId={horse._id.$oid} />
   * ))}
   */

  return (
    <Box p={3}>
      <Text className="title" mb={"5%"} fontSize={32}>
        Horse List
      </Text>

      <Flex flexWrap="wrap">
        {horseList.map((horse) => (
          <Box width={["100%", "50%", "33.33%"]} key={horse._id}>
            <HorseCard horse={horse} />
          </Box>
        ))}
      </Flex>
    </Box>
  );
};

export default List;
