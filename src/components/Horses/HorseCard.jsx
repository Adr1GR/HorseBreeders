import React from "react";
import { Card, Image, Heading, Flex, Text } from "rebass";
import { Link } from "react-router-dom";
import HorseDetails from "./HorseDetails";

const HorseCard = ({ horse }) => {
  return (
    <Link width={"100%"} to={{ pathname: `/horse/${horse._id}` }}>
      <Flex justifyContent="center" alignItems="center">
        <Card
          variant="primary"
          bg={"#ebebeb"}
          p={4}
          sx={{
            width: "100%",
            borderRadius: 4,
            display: "flex", // Added display flex
          }}
        >
          <Image
            src={horse.pictures[0]}
            sx={{
              borderRadius: 4,
              flex: "0 0 50%", // Set the width of the image
              marginRight: "1rem", // Add some spacing between image and text
            }}
          />
          <Flex flexDirection="column"> {/* Flex container for text */}
            <Heading mt={2}>
              <Text className="title-font">{horse.name}</Text>
            </Heading>
            <Text>Breed: {horse.breed}</Text>
            <Text>Age: {horse.age}</Text>
            <Text>Gender: {horse.gender}</Text>
            <Text>Color: {horse.color}</Text>
            <Text>Owner: {horse.owner.name}</Text>
          </Flex>
        </Card>
      </Flex>
    </Link>
  );
};

export default HorseCard;
