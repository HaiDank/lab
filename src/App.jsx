import { useContext, useState } from "react";
import Header from "./components/header/Header";
import Footer from "./components/footer/Footer";
import Content from "./components/content/Content";
import { Route, Routes } from "react-router-dom";
import "./index.css";
import FilmDetail from "./components/content/FilmDetail";
import Contact from "./components/content/Contact";
import { ThemeContext } from "./shared/ThemeContext";
import News from "./components/content/News";
import About from "./components/content/About";

function App() {
  const { theme } = useContext(ThemeContext);

  return (
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
  );
}

export default App;
