import React, { useState, useEffect } from "react";
import { Box, Image, Heading, Text } from "rebass";
import { useParams } from "react-router-dom";

const HorseDetails = () => {
  const { id } = useParams();
  const [horse, setHorse] = useState(null);

  useEffect(() => {
    fetch(`${process.env.REACT_APP_API_URL}/api/horse/${id}`)
      .then((response) => response.json())
      .then((data) => {
        setHorse(data);
      });
  }, [id]);

  if (!horse) {
    return <Text>Loading...</Text>;
  }

  return (
    <Box p={4}>
      <Heading as="h2" fontSize={36} mb={3}>
        {horse.name}
      </Heading>
      <Box mb={3}>
        {horse.pictures && (
          <Image src={horse.pictures[0]} alt="Horse" width={400} height={300} />
        )}
      </Box>
      <Text>
        <strong>Breed:</strong> {horse.breed}
      </Text>
      <Text>
        <strong>Age:</strong> {horse.age}
      </Text>
      <Text>
        <strong>Gender:</strong> {horse.gender}
      </Text>
      <Text>
        <strong>Owner:</strong> {horse.owner}
      </Text>
    </Box>
  );
};

export default HorseDetails;
