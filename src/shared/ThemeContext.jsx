import React, { useEffect, useState } from "react";

const ThemeContext = React.createContext();

const ThemeProvider = ({ children }) => {
  //false = light, true = dark
  const [isDark, setIsDark] = useState(false);
  const [theme, setTheme] = useState("light");

  useEffect(() => {
    if (localStorage.getItem("theme") === "dark") {
      setIsDark(true);
      setTheme("dark");
    }
  }, []);

  const toggleTheme = () => {
    const currentMode = !isDark;
    setIsDark(currentMode);
    if (currentMode) {
      localStorage.setItem("theme", "dark");
      setTheme("dark");
    } else {
      localStorage.setItem("theme", "light");
      setTheme("light");
    }
  };

  return (
    <ThemeContext.Provider value={{ isDark, theme, toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  );
};

export { ThemeProvider, ThemeContext };
