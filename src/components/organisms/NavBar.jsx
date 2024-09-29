import { Link } from "react-router-dom";
import Logo from "../atoms/Logo";
import { useTranslation } from "react-i18next";
import { useLanguage } from "../../hooks/useLanguage";
import { useState } from "react";

const styles = {
  navbar: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    padding: "10px 20px",
    backgroundColor: "#282c34",
    color: "white",
    flexWrap: "wrap",
  },
  navList: {
    listStyleType: "none",
    display: "flex",
    margin: 0,
    padding: 0,
    flexDirection: "row", // Default to row direction
  },
  navItem: {
    margin: "0 15px",
  },
  navLink: {
    color: "white",
    textDecoration: "none",
  },
  select: {
    marginLeft: "15px",
    marginTop: "10px",
  },
  burger: {
    display: "none",
    flexDirection: "column",
    cursor: "pointer",
    border: "2px solid white",
  },
  burgerLine: {
    height: "2px",
    width: "25px",
    backgroundColor: "white",
    margin: "3px 0",
  },
  mobileMenu: {
    display: "none", // Hide by default
    flexDirection: "column",
    position: "absolute",
    top: "60px", // Adjust based on navbar height
    right: "0",
    backgroundColor: "#282c34",
    width: "100%",
    listStyleType: "none",
    padding: "10px 0",
  },
  mobileNavItem: {
    margin: "10px 0",
    textAlign: "center",
  },
  // Media query styles
  '@media (max-width: 768px)': {
    navList: {
      display: "none", // Hide the nav list on mobile by default
    },
    burger: {
      display: "flex", // Show burger icon on smaller screens
    },
    mobileMenu: {
      display: "flex", // Show mobile menu when toggled
    },
  },
};

const NavBar = () => {
  const { t } = useTranslation();
  const { lang, setLang } = useLanguage();
  const [isOpen, setIsOpen] = useState(false); // State to manage mobile menu visibility

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav style={styles.navbar}>
      <Logo />
      <div style={styles.burger} onClick={toggleMenu}>
        <div style={styles.burgerLine}></div>
        <div style={styles.burgerLine}></div>
        <div style={styles.burgerLine}></div>
      </div>
      <ul style={isOpen ? { ...styles.navList, display: 'flex' } : { ...styles.navList }}>
        <li style={styles.navItem}>
          <Link to="/" style={styles.navLink}>
            {t("Home")}
          </Link>
        </li>
        <li style={styles.navItem}>
          <Link to="/about" style={styles.navLink}>
            {t("About")}
          </Link>
        </li>
        <li style={styles.navItem}>
          <Link to="/contact" style={styles.navLink}>
            {t("Contact")}
          </Link>
        </li>
      </ul>
      <select
        value={lang}
        onChange={(e) => setLang(e.target.value)}
        style={styles.select}
      >
        <option value="en">English</option>
        <option value="ar">اللغة العربية</option>
      </select>
    </nav>
  );
};

export default NavBar;
