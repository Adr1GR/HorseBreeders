import React, { useState, useEffect, useRef } from "react";
import { useLocation } from "react-router-dom";
import { Flex, Box, Text, Link, Button, Menu, IconButton } from "rebass";
import { FaBars } from "react-icons/fa";
import { AiOutlineCloseCircle } from "react-icons/ai";

function handleLogout() {
  localStorage.removeItem("userJWT");
  window.location.href = "/";
}

export default function NavBar() {
  const location = useLocation();
  const userJWT = localStorage.getItem("userJWT");
  const [isOpen, setIsOpen] = useState(false);
  const menuRef = useRef();

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const handleClickOutside = (event) => {
    if (menuRef.current && !menuRef.current.contains(event.target)) {
      setIsOpen(false);
    }
  };

  useEffect(() => {
    document.addEventListener("click", handleClickOutside);
    return () => {
      document.removeEventListener("click", handleClickOutside);
    };
  }, []);

  return (
    <>
      {!isOpen && (
        <Flex color="white" bg={"#1D3557"} alignItems="center" height={44}>
          <Link
            className="title-font"
            fontSize={26}
            width={1 / 3}
            ml={3}
            p={0}
            fontWeight="bold"
            href="/"
          >
            HorseBreeders
          </Link>

          <Flex width={[1, 1, 1 / 3]} display={["none", "flex", "flex"]}>
            <Link
              p={2}
              variant="nav"
              href="/"
              mx="auto"
              display={["none", "flex", "flex"]}
            >
              Home
            </Link> 
            <Link
              p={2}
              variant="nav"
              href="/finder"
              mx="auto"
              display={["none", "flex", "flex"]}
            >
              Finder
            </Link>
            <Link
              p={2}
              variant="nav"
              href="/"
              mx="auto"
              display={["none", "flex", "flex"]}
            >
              News
            </Link>
            <Link
              p={2}
              variant="nav"
              href="/"
              mx="auto"
              display={["none", "flex", "flex"]}
            >
              My ads
            </Link>
          </Flex>
          <Flex width={1 / 3} justifyContent="flex-end">
            {userJWT != null ? (
              <Button
                ml="auto"
                mr={4}
                onClick={handleLogout}
                display={["none", "flex", "flex"]}
              >
                Logout
              </Button>
            ) : (
              <>
                <Link
                  variant="nav"
                  href="/login"
                  ml="auto"
                  mr={2}
                  display={["none", "flex", "flex"]}
                >
                  Login
                </Link>
                <Link
                  variant="nav"
                  href="/register"
                  mr={5}
                  ml={5}
                  display={["none", "flex", "flex"]}
                >
                  Register
                </Link>
              </>
            )}
          </Flex>
            <Button
              aria-label="Toggle Menu"
              onClick={toggleMenu}
              display={["block", "none", "none"]}
            >
              <FaBars />
            </Button>
        </Flex>
      )}
      {isOpen && (
        <Box
          color="white"
          p={2}
          bg={"#1D3557"}
          display={["block", "none", "none"]}
        >
          <Flex flexDirection="column">
            <Link p={2} variant="nav" href="/" mx="auto">
              Home
            </Link>
            <Link p={2} variant="nav" href="/finder" mx="auto">
              Finder
            </Link>
            <Link p={2} variant="nav" href="/" mx="auto">
              News
            </Link>
            <Link p={2} variant="nav" href="/" mx="auto">
              My ads
            </Link>
            <Box p={2}></Box>
            {userJWT != null ? (
              <Button p={2} mx="auto" onClick={handleLogout}>
                Logout
              </Button>
            ) : (
              <>
                <Link p={2} variant="nav" href="/login" mx="auto">
                  Login
                </Link>
                <Link p={2} variant="nav" href="/register" mx="auto">
                  Register
                </Link>
              </>
            )}
            <Button
              p={2}
              aria-label="Toggle Menu"
              onClick={toggleMenu}
              mx="auto"
            >
              <AiOutlineCloseCircle />
            </Button>
          </Flex>
        </Box>
      )}
    </>
  );
}
