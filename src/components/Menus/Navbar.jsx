import React from "react";
import { useLocation } from "react-router-dom";
import { Flex, Box, Text, Link, Button } from "rebass";

function handleLogout() {
  localStorage.removeItem("userJWT");
  window.location.href = "/";
}

export default function NavBar() {
  const location = useLocation();

  const userJWT = localStorage.getItem("userJWT");

  return (
    <>
      <Flex color="white" bg="black" alignItems="center">
        <Link
          className="title"
          fontSize={20}
          width={1 / 3}
          ml={3}
          p={0}
          fontWeight="bold"
          href="/"
        >
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
          {userJWT != null ? (
            <Button ml="auto" mr={4} onClick={handleLogout}>
              Logout
            </Button>
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
