import React, { useContext } from "react";
import "./header.css";
import { Link } from "react-router-dom";
import {
  AppBar,
  Box,
  Button,
  Divider,
  FormControlLabel,
  Stack,
  Switch,
  Toolbar,
} from "@mui/material";
import { ThemeContext } from "../../shared/ThemeContext";
function Header() {
  const { isDark, theme, toggleTheme } = useContext(ThemeContext);

  const handleToggle = () => {
    toggleTheme();
  };

  return (
    <>
      <AppBar position='static'>
        <Toolbar className={"nav " + theme}>
          <Button color='inherit' sx={{ pr: "2rem" }}>
            <Link to='/' className='site-title'>
              Lab4
            </Link>
          </Button>
          <Stack direction='row' spacing={2} sx={{ width: "auto" }}>
            <Button color='inherit'>
              <Link to='/about'>About</Link>
            </Button>
            <Button color='inherit'>
              <Link to='/contact'>Contact</Link>
            </Button>
            <Button color='inherit'>
              <Link to='/news'>News</Link>
            </Button>
            <Switch
              checked={isDark}
              onChange={handleToggle}
              sx={{ ml: "auto!important" }}
            />
          </Stack>
        </Toolbar>
      </AppBar>

      {/* <nav className={"nav " + theme}>
      <Link to='/' className='site-title'>
        Lab 1
      </Link>
      <ul></ul>
      <FormControlLabel
        label=''
        control={<Switch checked={isDark} onChange={handleToggle} />}
      />
    </nav> */}
    </>
  );
}

export default Header;
