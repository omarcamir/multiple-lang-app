import { useTranslation } from "react-i18next";

const Logo = () => {
    const { t } = useTranslation();
  return (
    <div
      style={{
        fontSize: "1.5rem",
      }}
    >
      <h1>{t("Multiple Lang App")}</h1>
    </div>
  );
};

export default Logo;
