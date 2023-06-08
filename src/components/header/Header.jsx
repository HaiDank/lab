import React, { useContext } from "react";
import "./header.css";
import { Link } from "react-router-dom";
import {
  AppBar,
  Box,
  Button,
  Icon,
  Stack,
  Switch,
  Toolbar,
  Typography,
} from "@mui/material";
import ContactPageOutlinedIcon from "@mui/icons-material/ContactPageOutlined";
import InfoOutlinedIcon from "@mui/icons-material/InfoOutlined";
import ArticleOutlinedIcon from "@mui/icons-material/ArticleOutlined";
import { ThemeContext } from "../../shared/ThemeContext";
function Header() {
  const { isDark, theme, toggleTheme } = useContext(ThemeContext);

  const handleToggle = () => {
    toggleTheme();
  };

  return (
    <>
      <AppBar
        position='static'
        sx={{ boxShadow: "none", marginBottom: "1rem" }}
      >
        <Toolbar className={theme}>
          <Button color='inherit' sx={{ justifyContent: "start" }}>
            <Link to='/'>
              <Typography component='div' variant='h3'>
                Lab 4
              </Typography>
            </Link>
          </Button>
          <Box sx={{ flexGrow: "1" }} />
          <Stack direction='row' spacing={2} sx={{ width: "auto" }}>
            <Button color='inherit'>
              <InfoOutlinedIcon />
              <Link to='/about'> About</Link>
            </Button>
            <Button color='inherit'>
              <ContactPageOutlinedIcon />
              <Link to='/contact'>Contact</Link>
            </Button>
            <Button color='inherit'>
              <ArticleOutlinedIcon />
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
