import React, { useState } from "react";
import { Label, Input } from "@rebass/forms";
import { Box, Flex, Button, Text, Link } from "rebass";

const SignIn = () => {
  const [userCredentials, setUserCredentials] = useState({
    email: "",
    password: "",
  });
  const [error, setError] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    const { email, password } = userCredentials;

    fetch(process.env.API_URL + "/api/user/login", {
      method: "POST",
      crossDomain: true,
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
        "Access-Control-Allow-Origin": "*",
        "Origin": process.env.REACT_APP_API_URL,
      },
      body: JSON.stringify({
        email,
        password,
      }),
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.errorCode) {
          setError(data.message);
        } else {
          setError("");
          localStorage.setItem("userJWT", data.userJWT);
          window.location.href = "/";
        }
      });
  };

  return (
    <>
      <Flex mt={"8%"}>
        <Box width={1 / 3}></Box>
        <Box width={1 / 3} py={3}>
          <Text className="title" mb={"5%"} fontSize={32}>
            Login to your account
          </Text>
          <Box as="form" onSubmit={handleSubmit}>
            <Flex mx={-2} mb={3}>
            <Box width={1 / 2} px={2}>
                <Label htmlFor="name">Email</Label>
                <Input
                  id="email"
                  name="email"
                  placeholder="jane@doe.com"
                  type="email"
                  value={userCredentials.email}
                  onChange={(e) =>
                    setUserCredentials({
                      ...userCredentials,
                      email: e.target.value,
                    })
                  }
                />
              </Box>
              <Box width={1 / 2} px={2}>
                <Label htmlFor="name">Password</Label>
                <Input
                  id="password"
                  name="password"
                  placeholder="••••••••"
                  type="password"
                  value={userCredentials.password}
                  onChange={(e) =>
                    setUserCredentials({
                      ...userCredentials,
                      password: e.target.value,
                    })
                  }
                />
              </Box>
            </Flex>
            <Button
              type="submit"
              color="white"
              backgroundColor="black"
              width={1}
              mt={3}
            >
              Login
            </Button>
          </Box>
          <Text mt={3}>Don't have an account? <Link href="/register">Register</Link></Text>
          <Text color="red" mt={3}>
            {error}
          </Text>
        </Box>
        <Box width={1 / 3}></Box>
      </Flex>
    </>
  );
};
export default SignIn;
