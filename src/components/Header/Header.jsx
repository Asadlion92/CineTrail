import React, { useContext } from "react";
import "./Header.css";
import { Link } from "react-router-dom";
import { MdOutlineDarkMode } from "react-icons/md";
import { MdOutlineLightMode } from "react-icons/md";
import { ThemeContext } from "../../contexts/ThemeContext";

function Header() {
  const { darkMode, setDarkMode } = useContext(ThemeContext);

  const handleTheme = () => {
    const newDarkMode = !darkMode;
    setDarkMode(newDarkMode);
    localStorage.setItem('darkMode', newDarkMode);
  };

  return (
    <header className={`header-container ${!darkMode && "header-light"}`}>
      <Link to="/" className="logo">
        CineTrail
      </Link>
      <div className="search-container">
        <input
          type="text"
          placeholder="Search movies..."
          className="search-input"
        />
      </div>
      <div className="header-buttons-container">
        {darkMode ? (
          <div className="theme-button-container">
            <MdOutlineLightMode onClick={handleTheme} className="theme-icon" />
            <MdOutlineDarkMode
              //If darkmode is true, we don't need onclick to work on the darkMode icon
              className="theme-icon theme-icon-active"
            />
          </div>
        ) : (
          <div className="theme-button-container">
            <MdOutlineLightMode className="theme-icon theme-icon-active" />
            <MdOutlineDarkMode
              onClick={handleTheme}
              className="theme-icon"
            />
          </div>
        )}
        <button className="create-account-btn">Create an account</button>
      </div>
    </header>
  );
}

export default Header;
