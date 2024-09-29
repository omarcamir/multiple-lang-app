import { useTranslation } from "react-i18next";

const HomeContent = () => {
    const { t } = useTranslation();
  return <div className="container">
    {t("Home")}
  </div>;
};

export default HomeContent;
