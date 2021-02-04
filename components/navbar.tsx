import React from "react";
import NavLink from "./navLink";

export const NavBar = () => {
  return (
    <nav>
      <ul>
        <NavLink href="/" as="/" label="Home" />
        <NavLink href="/about" as="/about" label="About" />
      </ul>
    </nav>
  );
};
