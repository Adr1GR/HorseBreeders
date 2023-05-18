import React from "react";
import List from "./List";
import { verifyUser } from "../Helpers/userHelper";

const Finder = () => {
  if (!verifyUser()) {
    window.location.href = "/needlogin";
  }

  return <List />;
};

export default Finder;
