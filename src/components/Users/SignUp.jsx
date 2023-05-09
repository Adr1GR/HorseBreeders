import React, { useState } from "react";
import { Label, Input } from "@rebass/forms";
import { Box, Flex, Button, Text, Link } from "rebass";

const SignUp = () => {
  const [userCredentials, setUserCredentials] = useState({
    name: "",
    email: "",
    password: "",
    confirmPassword: "",
  });
  const [error, setError] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    const { name, email, password, confirmPassword } = userCredentials;

    fetch(process.env.REACT_APP_SERVER_URL + "/api/user/add", {
      method: "POST",
      crossDomain: true,
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
        "Access-Control-Allow-Origin": "*",
      },
      body: JSON.stringify({
        name,
        email,
        password,
        confirmPassword,
      }),
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.errorCode) {
          setError(data.message);
        } else {
          setError("");
          localStorage.setItem("jwtToken", data.jwtToken);
          window.location.href = "/";
        }
      });
  };

  return (
    <>
      <Flex mt={"10%"}>
        <Box width={1 / 3}></Box>
        <Box width={1 / 3} py={3}>
          <Text className="title" mb={"5%"} fontSize={32}>Create an account</Text>
          <Box as='form' onSubmit={handleSubmit}>
            <Flex mx={-2} mb={3}>
              <Box width={1 / 2} px={2}>
                <Label htmlFor="name">Name</Label>
                <Input
                  id="name"
                  name="name"
                  placeholder="Jane Doe"
                  type="text"
                  value={userCredentials.name}
                  onChange={(e) =>
                    setUserCredentials({
                      ...userCredentials,
                      name: e.target.value,
                    })
                  }
                />
              </Box>
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
            </Flex>
            <Flex mx={-2} mb={3}>
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
              <Box width={1 / 2} px={2}>
                <Label htmlFor="name">Confirm password</Label>
                <Input
                  id="confirmPassword"
                  name="confirmPassword"
                  type="password"
                  placeholder="••••••••"
                  value={userCredentials.confirmPassword}
                  onChange={(e) =>
                    setUserCredentials({
                      ...userCredentials,
                      confirmPassword: e.target.value,
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
              Create account
            </Button>
            <Text mt={3}>Already have an account? <Link href="/login">Login</Link></Text>
          </Box>
          <Text color="red" mt={3}>{error}</Text>
        </Box>
        <Box width={1 / 3}></Box>
      </Flex>

    </>
  );
};

export default SignUp;
