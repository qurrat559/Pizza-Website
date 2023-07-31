import React from 'react'
import { useState } from "react";
import logo from "../assests/pizzalogo.png"
import { Link } from 'react-router-dom'
import { IconButton } from '@mui/material';
import { Reorder } from '@mui/icons-material';
import "../styles/Navbar.css";

function Navbar() {
  const [openLinks, setOpenLinks] = useState(false);

  const toggleNavbar = () => {
    setOpenLinks(!openLinks);
  };

  return (
    <div className="navbar">
    <div className="leftSide" id={openLinks ? "open" : "close"}>
      <img src={logo} />
      <div className="hiddenLinks">
        <Link to="/"> Home </Link>
        <Link to="/menu"> Menu </Link>
        <Link to="/about"> About </Link>
        <Link to="/contact"> Contact </Link>
      </div>
    </div>
    <div className="rightSide">
      <Link to="/"> Home </Link>
      <Link to="/menu"> Menu </Link>
      <Link to="/about"> About </Link>
      <Link to="/contact"> Contact </Link>
      <IconButton onClick={toggleNavbar}>
        <Reorder />
      </IconButton>
    </div>
  </div>
);
}

export default Navbar