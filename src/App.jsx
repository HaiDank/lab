import { useContext, useMemo, useState } from "react";
import Header from "./components/header/Header";
import Footer from "./components/footer/Footer";
import Content from "./components/content/Content";
import { Route, Routes } from "react-router-dom";
import "./index.css";

import Contact from "./components/content/Contact";
import { ThemeContext } from "./shared/ThemeContext";
import News from "./components/content/News";
import About from "./components/content/About";
import { ThemeProvider, createTheme } from "@mui/material";

function App() {
  const { theme, isDark } = useContext(ThemeContext);
  const darkTheme = createTheme({
    palette: {
      mode: "dark",
    },
  });

  const lightTheme = createTheme({
    palette: {
      mode: "light",
    },
  });

  return (
    <ThemeProvider theme={isDark ? darkTheme : lightTheme}>
      <div className={"body " + theme}>
        <Header />
        <Routes>
          <Route path='/' element={<Content />}></Route>
          <Route path='/contact' element={<Contact />}></Route>
          <Route path='/news' element={<News />}></Route>
          <Route path='/about' element={<About />}></Route>
        </Routes>

        <Footer />
      </div>
    </ThemeProvider>
  );
}

export default App;
