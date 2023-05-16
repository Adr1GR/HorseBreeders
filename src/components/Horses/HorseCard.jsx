import React from "react";
import { Card, Image, Heading, Flex, Text } from "rebass";
import { Link } from "react-router-dom";
import HorseDetails from "./HorseDetails";

const HorseCard = ({ horse }) => {
  return (
    <Link width={[350, 350, 400]} to={{ pathname: `/horse/${horse._id}` }}>
      <Flex justifyContent="center" alignItems="center">
        <Card
          width={[350, 350, 400]}
          variant="primary"
          bg={"#ebebeb"}
          p={4}
          sx={{
            width: ["100%", "50%"],
            borderRadius: 4,
          }}
        >
          <Image
            src={horse.pictures[0]}
            sx={{
              borderRadius: 4,
            }}
          />
          <Heading mt={2}>
            <Text className="title-font">{horse.name}</Text>
          </Heading>
          <Text>Breed: {horse.breed}</Text>
          <Text>Age: {horse.age}</Text>
          <Text>Gender: {horse.gender}</Text>
          <Text>Owner: {horse.owner}</Text>
        </Card>
      </Flex>
    </Link>
  );
};

export default HorseCard;
