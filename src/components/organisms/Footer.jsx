import { useTranslation } from "react-i18next";

const Footer = () => {
    const { t } = useTranslation();
  return (
    <footer
      style={{ backgroundColor: "#282c34", color: "white", padding: "20px 0", position: "fixed", bottom: 0, width: "100%" }}
    >
      <p style={{ textAlign: "center", margin: 0 }}>
        &copy; {t("2023 Your Company. All rights reserved.")}
      </p>
    </footer>
  );
};

export default Footer;
