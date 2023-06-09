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
        sx={{
          boxShadow: "none",
          marginBottom: "1rem",
        }}
      >
        <Toolbar
          className={theme}
          sx={{
            borderBottom: "1px solid",
          }}
        >
          <Button
            color='inherit'
            sx={{ justifyContent: "start", textTransform: "none" }}
          >
            <Link to='/'>
              <Typography variant='h4'>Lab 4</Typography>
            </Link>
          </Button>
          <Box sx={{ flexGrow: "1" }} />
          <Stack direction='row' spacing={{ xs: 0, md: 2 }}>
            <Link to='/about'>
              <Button color='inherit'>
                <InfoOutlinedIcon />
                <Typography
                  variant='button'
                  display={{ xs: "none", md: "block" }}
                >
                  About
                </Typography>
              </Button>
            </Link>
            <Link to='/contact'>
              <Button color='inherit'>
                <ContactPageOutlinedIcon />
                <Typography
                  variant='button'
                  display={{ xs: "none", md: "block" }}
                >
                  Contact
                </Typography>
              </Button>
            </Link>
            <Link to='/news'>
              <Button color='inherit'>
                <ArticleOutlinedIcon />
                <Typography
                  variant='button'
                  display={{ xs: "none", md: "block" }}
                >
                  News
                </Typography>
              </Button>
            </Link>
            <Switch checked={isDark} onChange={handleToggle} />
          </Stack>
        </Toolbar>
      </AppBar>
    </>
  );
}

export default Header;
