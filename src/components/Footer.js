import React from 'react'
import { Instagram, Facebook, LinkedIn, Twitter } from '@mui/icons-material';
import "../styles/Footer.css";

const Footer = () => {
  return (
    <div className="footer">
      <div className="socialMedia">
      <Instagram />
      <Facebook />
      <LinkedIn />
      <Twitter />
      </div>
      <p> &copy; 2023 pizzamania.com</p>
    </div>
  )
}

export default Footer