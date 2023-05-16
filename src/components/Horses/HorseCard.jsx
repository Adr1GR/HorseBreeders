import React from "react";
import { Card, Image, Heading } from "rebass";
import { Link } from "react-router-dom";

const HorseCard = ({ horse }) => {
  const randomImage = `https://source.unsplash.com/400x300/?horse/` + horse._id;

  return (
    <Link to={`/horse/${horse._id}`}>
      <Card width={400} variant="primary" bg={"#ebebeb"} p={4}>
        <Image src={randomImage} />

        <Heading as="h3">{horse.name}</Heading>
        <p>Breed: {horse.breed}</p>
        <p>Age: {horse.age}</p>
        <p>Gender: {horse.gender}</p>
        <p>Owner: {horse.owner}</p>
      </Card>
    </Link>
  );
};

export default HorseCard;
