import React, { useState } from "react";
import { Label, Input } from "@rebass/forms";
import { Box, Flex, Button, Text, Link } from "rebass";
import { verifyUser } from "../Helpers/userHelper";

const SignIn = () => {
  // Redirect to finder if user is already logged in
  if (verifyUser()) {
    window.location.href = "/finder";
  }

  const [userCredentials, setUserCredentials] = useState({
    email: "",
    password: "",
  });
  const [error, setError] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    const { email, password } = userCredentials;

    fetch(`${process.env.REACT_APP_API_URL}/api/user/login`, {
      method: "POST",
      crossDomain: true,
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
        "Access-Control-Allow-Origin": "*",
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
        <Box
          width={[1 / 5, 1 / 5, 1 / 3]}
          display={["none", "flex", "flex"]}
        ></Box>
        <Box width={[1, 1, 1 / 3]} py={3} mx={3}>
          <Text className="title-font title-color" mb={"5%"} fontSize={32}>
            Login to your account
          </Text>
          <Box as="form" onSubmit={handleSubmit}>
            <Box width={1}>
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
            <Box width={1} py={2}>
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
              <Button
                bg={"#1D3557"}
                type="submit"
                color="white"
                width={1}
                mt={3}
              >
                Login
              </Button>
            </Box>
          </Box>
          <Text mt={3}>
            Don't have an account?{" "}
            <Link href="/register" sx={{ textDecoration: "underline" }}>
              Register
            </Link>
          </Text>
          <Text color="red" mt={3}>
            {error}
          </Text>
        </Box>
        <Box
          width={[1 / 5, 1 / 5, 1 / 3]}
          display={["none", "flex", "flex"]}
        ></Box>
      </Flex>
    </>
  );
};
export default SignIn;
