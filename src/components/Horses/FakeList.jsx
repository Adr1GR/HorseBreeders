import React from "react";
import { Box, Flex, Text, Link } from "rebass";

const List = () => {
  return (
    <>
      <Box sx={{ height: "95vh" }}>
        <Flex
          sx={{
            backgroundImage: "url(/imgs/fake-finder.webp)",
            backgroundSize: "cover",
            backgroundPosition: "center",
            height: "100%",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            flexDirection: "column",
          }}
          pb={5}
          width={1}
        >
          <Box width={"100%"}>
            <Text
              textAlign="center"
              className="title-font title-color"
              fontSize={[16, 24, 24]}
              mb={5}
            >
              Please, log in or register<br/>  to access this page
            </Text>
            <Flex>
              <Link
                ml={"auto"}
                mr={3}
                variant="primary"
                href="/login"
                className="title-font  title-color"
                width={["140px", "160px", "180px"]}
                fontSize={[16, 16, 20]}
                sx={{
                  backgroundColor: "white",
                  padding: "10px",
                  paddingTop: "15px",
                  cursor: "pointer",
                  outline: "none",
                  height: "50px",
                  textDecoration: "none",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  border: "0.2px solid #1D3557",
                  boxShadow: "0px 4px 4px rgba(0, 0, 0, 0.25)",
                  borderRadius: "15px 0px 0px 0px",
                  ":hover": {
                    backgroundColor: "#f7f7f7",
                  },
                }}
              >
                Log In
              </Link>
              <Link
                mr={"auto"}
                ml={3}
                variant="primary"
                href="/register"
                className="title-font"
                width={["140px", "160px", "180px"]}
                fontSize={[16, 16, 20]}
                sx={{
                  backgroundColor: "#1D3557",
                  color: "white",
                  padding: "10px",
                  paddingTop: "15px",
                  cursor: "pointer",
                  outline: "none",
                  height: "50px",
                  textDecoration: "none",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  border: "0.2px solid #000000",
                  boxShadow: "0px 4px 4px rgba(0, 0, 0, 0.25)",
                  borderRadius: "15px 0px 0px 0px",
                  ":hover": {
                    backgroundColor: "#213c62",
                  },
                }}
              >
                Register
              </Link>
            </Flex>
          </Box>
        </Flex>
      </Box>
    </>
  );
};

export default List;
