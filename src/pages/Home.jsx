import React from "react";
import { Box, Flex, Text, Link } from "rebass";

const Home = () => {
  return (
    <Box sx={{
      height:"85vh",
      backgroundImage:"url(/src/imgs/menu-horse.jpg)",
      backgroundSize:"cover",
      backgroundPosition:"center",
      display:"flex",
      alignItems:"center",  
      justifyContent:"center",
      flexDirection:"column",
    }}
    px={4}
    >
      <Text className="title-font title-color" mb={5} fontSize={32}>
        HorseBreeders
      </Text>
      <Text fontSize={24} textAlign="center" mb={4}>
        Welcome to HorseBreeders
      </Text>
      <Text fontSize={16} textAlign="center" mb={6}>
        Find your horse, breed your horse
      </Text>
      <Link
        variant="primary"
        href="/register"
        sx={{
          backgroundColor: "#1D3557",
          color: "white",
          borderRadius: "5px",
          padding: "10px",
          fontSize: "16px",
          cursor: "pointer",
          outline: "none",
          border: "none",
          width: "200px",
          height: "50px",
          textDecoration: "none",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          ":hover": {
            backgroundColor: "#213c62",
          },
        }}
      >
        Get Started
      </Link>
    </Box>
  );
};

export default Home;
