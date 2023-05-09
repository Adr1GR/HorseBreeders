import React from "react";
import { useLocation } from "react-router-dom";
import { Flex, Box, Text, Link } from "rebass";

export default function NavBar() {
  const location = useLocation();

  const jwtToken = localStorage.getItem("jwtToken");

  return (
    <>
      <Flex color="white" bg="black" alignItems="center">
        <Link className="title" width={1 / 3} ml={3}  p={2} fontWeight="bold" href="/">
          HorseBreeders
        </Link>

        <Flex width={1 / 3}>
          <Link p={2} variant="nav" href="/" mx="auto">
            Home
          </Link>
          <Link p={2} variant="nav" href="/" mx="auto">
            Finder
          </Link>
          <Link p={2} variant="nav" href="/" mx="auto">
            News
          </Link>
          <Link p={2} variant="nav" href="/" mx="auto">
            My ads
          </Link>
        </Flex>
        <Flex width={1 / 3}>
          {jwtToken != null ? (
            <Text ml="auto" mr={4}>You are logged in</Text>
          ) : (
            <>
              <Link variant="nav" href="/login" ml="auto" mr={2}>
                Login
              </Link>
              <Link variant="nav" href="/register" mr={5} ml={5}>
                Register
              </Link>
            </>
          )}
        </Flex>
      </Flex>
    </>
  );
}
