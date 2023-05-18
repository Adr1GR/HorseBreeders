import React from "react";
import { Box, Flex, Text, Link } from "rebass";

const Home = () => {
  return (
    <Box sx={{ height: "100vh" }}>
      <Flex
        sx={{
          backgroundImage: "url(/imgs/menu-horse.webp)",
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
        <Box width={"70%"}>
          <Text className="title-font title-color" fontSize={[16, 24, 24]} sx={{}}>
            Welcome to
          </Text>
          <Text className="title-font title-color" fontSize={[42, 48, 64]}>
            HorseBreeders
          </Text>
          <Text
            className="title-font title-color"
            fontSize={[16, 24, 24]}
            mb={5}
          >
            Unleash the beauty of purebred horses
          </Text>
          <Flex width={["400px" , "440px", "480px"]}>
          <Link
            variant="primary"
            href="/register"
            className="title-font  title-color"
            width={["140px", "160px", "180px"]}
            fontSize={[16, 16, 20]}
            mr={3}
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
              border: "0.2px solid #000000",
              boxShadow: "0px 4px 4px rgba(0, 0, 0, 0.25)",
              borderRadius: "15px 0px 0px 0px",
              ":hover": {
                
                backgroundColor: "#f7f7f7",
              },
            }}
          >
            Join Us
          </Link>
          <Link
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
            About
          </Link>
          </Flex>
          
        </Box>
      </Flex>
      <Box bg={"#1D3557"} width={1} height={"10px"}></Box>
      <Box>
        <Text textAlign={"center"}>halo</Text>
      </Box>
    </Box>
  );
};

export default Home;
