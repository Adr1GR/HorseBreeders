import React from "react";
import { Card, Image, Heading } from "rebass";
import { Link } from "react-router-dom";
import HorseDetails from "./HorseDetails";

const HorseCard = ({ horse }) => {
  return (
    <Link width={400} to={{ pathname: `/horse/${horse._id}`}}>
      <Card width={400} variant="primary" bg={"#ebebeb"} p={4}>
        <Image src={horse.pictures[0]} />
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
