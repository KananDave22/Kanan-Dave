import { useEffect, useState } from "react";
import Navbar from "./components/Navbar";
import { ThemeContext } from "./ThemeContext";
import Hero from "./components/Hero";
import Technologies from "./components/Technologies";
import Experience from "./components/Experience";
import Projects from "./components/Projects";
import Education from "./components/Education";
import Contact from "./components/Contact";

const App = () => {
  const [theme, setTheme] = useState(() => {
    const savedTheme = window.localStorage.getItem("portfolio-theme");
    return savedTheme === "light" || savedTheme === "dark"
      ? savedTheme
      : window.matchMedia("(prefers-color-scheme: dark)").matches
        ? "dark"
        : "light";
  });

  useEffect(() => {
    window.localStorage.setItem("portfolio-theme", theme);
  }, [theme]);

  return (
    <div className="portfolio" data-theme={theme}>
      <ThemeContext.Provider value={{ theme, onToggleTheme: () => setTheme(theme === "light" ? "dark" : "light") }}>
        <div className="page-shell">
          <Navbar />
          <main className="portfolio-main">
            <Hero />
            <Technologies />
            <Experience />
            <Projects />
            <Education />
            <Contact />
            <footer className="site-footer">
              <span>Designed & built by Kanan Dave</span>
              <a href="#top">Back to top ↑</a>
            </footer>
          </main>
        </div>
      </ThemeContext.Provider>
    </div>
  );
};

export default App;
