import React, { useContext } from "react";
import "./header.css";
import { Link } from "react-router-dom";
import { Box, FormControlLabel, Switch } from "@mui/material";
import { ThemeContext } from "../../shared/ThemeContext";
function Header() {
  const { isDark, theme, toggleTheme } = useContext(ThemeContext);

  const handleToggle = () => {
    toggleTheme();
  };

  return (
    <nav className={"nav " + theme}>
      <Link to='/' className='site-title'>
        Lab 1
      </Link>
      <ul></ul>
      <FormControlLabel
        label=''
        control={<Switch checked={isDark} onChange={handleToggle} />}
      />
    </nav>
  );
}

export default Header;
