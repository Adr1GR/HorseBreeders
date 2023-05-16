import React from "react";
import { Link } from "react-router-dom";
import { Card, Image, Text, Heading } from "rebass";

const HorseCard = ({ horse }) => {
  const randomImage = `https://source.unsplash.com/300x200/?horse/${horse._id}`;

  return (
    <Link to={`/horse/${horse._id}`}>
    <Card width={256}>
      <Image src={randomImage} />
      <Heading>Horse Id: {horse._id}</Heading>
    </Card>
    </Link>
  );
};

export default HorseCard;
