import { useContext } from "react";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { LuMoon, LuSun } from "react-icons/lu";
import { ThemeContext } from "../ThemeContext";

const Navbar = () => {
  const { theme, onToggleTheme } = useContext(ThemeContext);
  return (
    <nav className="site-nav" id="top" aria-label="Main navigation">
      <a className="wordmark" href="#top" aria-label="Kanan Dave, home">
        <span className="wordmark-monogram">KD</span>
        <span className="wordmark-name">Kanan Dave<small>Developer & designer</small></span>
      </a>
      <p className="rail-caption">Digital craft <span>·</span> 2026</p>
      <div className="nav-links">
        <a href="#experience"><span className="nav-link-index">01</span>Experience</a>
        <a href="#projects"><span className="nav-link-index">02</span>Projects</a>
        <a href="#education"><span className="nav-link-index">03</span>Education</a>
        <a href="#contact"><span className="nav-link-index">04</span>Contact</a>
      </div>
      <div className="nav-actions">
        <div className="social-links">
          <a className="icon-link" href="https://www.linkedin.com/in/dave-kanan/" target="_blank" rel="noreferrer" aria-label="LinkedIn"><FaLinkedin /></a>
          <a className="icon-link" href="https://github.com/KananDave22" target="_blank" rel="noreferrer" aria-label="GitHub"><FaGithub /></a>
        </div>
        <div className="rail-utilities">
          <button className="theme-toggle" onClick={onToggleTheme} type="button" aria-label={`Switch to ${theme === "light" ? "dark" : "light"} mode`} title={`Switch to ${theme === "light" ? "dark" : "light"} mode`}>
            {theme === "light" ? <LuMoon /> : <LuSun />}
          </button>
          <a className="resume-link" href="https://drive.google.com/file/d/1yW2JiRT0b13ZKdvDgxt9iViOSu1LqIb6/view?usp=sharing" target="_blank" rel="noreferrer">Resume <span aria-hidden="true">↗</span></a>
        </div>
      </div>
    </nav>
  )
}

export default Navbar