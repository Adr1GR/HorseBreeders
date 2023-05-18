import React, { useState } from "react";
import { Label, Input } from "@rebass/forms";
import { Box, Flex, Button, Text, Link } from "rebass";
import { verifyUser } from "../Helpers/userHelper";
//import { FaFacebookF } from "react-icons/fa";
//import { BsGoogle } from "react-icons/bs";

const SignUp = () => {
  // Redirect to finder if user is already logged in
  if (verifyUser()) {
    window.location.href = "/finder";
  }

  const [userCredentials, setUserCredentials] = useState({
    name: "",
    email: "",
    password: "",
    confirmPassword: "",
  });
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState([{}]);

  const handleSubmit = (e) => {
    e.preventDefault();
    setLoading(true);
    const { name, email, password, confirmPassword } = userCredentials;

    fetch(`${process.env.REACT_APP_API_URL}/api/user/add`, {
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
        setLoading(false);
        if (data.errors) {
          const newErrors = {};
          data.errors.forEach((e) => {
            newErrors[e.path] = e.msg;
          });
          setError(newErrors);
        } else {
          setError({});
          localStorage.setItem("userJWT", data.userJWT);
          window.location.href = "/finder";
        }
      });
  };

  return (
    <>
      <Flex sx={{ height: "96vh" }}>
        <Box width={1 / 2} display={["none", "none", "flex"]}>
          <Flex
            sx={{
              backgroundImage: "url(/imgs/register-horse.webp)",
              backgroundSize: "cover",
              backgroundPosition: "center",
              height: "100%",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              flexDirection: "column",
              boxShadow: "inset -20px 0 20px -20px rgba(0, 0, 0, 0.5)", // Apply the blur effect to the right border
              filter: "saturate(1.3)"
            }}
            pb={5}
            width={1}
          />
        </Box>

        <Box width={[1, 1, 1 / 2]} mx={3} mt={"9%"} px={5}  sx={{
              borderRadius: "0px 15px 15px 0px",
        }}>
          <Text className="title-font title-color" mb={"5%"} fontSize={32}>
            Create an account
          </Text>
          <Box as="form" onSubmit={handleSubmit}>
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
                {error.name && <Text color="red">{error.name} </Text>}
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
                {error.email && <Text color="red">{error.email} </Text>}
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
                {error.password && <Text color="red">{error.password} </Text>}
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
                {error.confirmPassword && (
                  <Text color="red">{error.confirmPassword} </Text>
                )}
              </Box>
            </Flex>
            <Text>
              By signing up, I agree to HB{" "}
              <Link href="#" sx={{ textDecoration: "underline" }}>
                Terms of Service
              </Link>{" "}
              and{" "}
              <Link href="#" sx={{ textDecoration: "underline" }}>
                Privacy Policy
              </Link>
            </Text>
            <Button bg={"#1D3557"} type="submit" color="white" width={1} mt={3}>
              <img src="" alt="" />
              {loading ? "Loading..." : "Sign Up"}
            </Button>
            <Text mt={3} width={1}>
              Already have an account?{" "}
              <Link href="/login" sx={{ textDecoration: "underline" }}>
                Login
              </Link>
            </Text>
          </Box>
          <Text color="red" mt={3}></Text>
        </Box>
      </Flex>
    </>
  );
};

export default SignUp;
