import { useState } from "react";

function Header() {
  const [darkMode, setDarkMode] = useState(false);

  const toggleTheme = () => {
    setDarkMode(!darkMode);

    document.body.classList.toggle("dark-mode");
  };

  return (
    <header className="header">

      <div className="header-left">
        <div className="logo">
          MyGit
        </div>
      </div>

      <div className="search-container">
        <input
          type="text"
          placeholder="Search repositories..."
          className="search-input"
        />
      </div>

      <div className="header-right">

        {/* Theme Toggle */}
        <button
          className="theme-button"
          onClick={toggleTheme}
          title={darkMode ? "Switch to light mode" : "Switch to dark mode"}
        >
          {darkMode ? "☀️" : "🌙"}
        </button>

        <button className="header-button">
          +
        </button>

        <div className="avatar">
          S
        </div>

      </div>

    </header>
  );
}

export default Header;