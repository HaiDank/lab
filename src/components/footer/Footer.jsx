import React from "react";
import "./footer.css";
import { Typography } from "@mui/material";

function Footer() {
  return (
    <footer className='footer'>
      <hr />
      <Typography variant='subtitle2' m='auto'>
        copyright <span>&copy;</span> 2023
      </Typography>
    </footer>
  );
}

export default Footer;
