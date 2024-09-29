import { useTranslation } from "react-i18next";

const AboutContent = () => {
    const { t } = useTranslation();
   
  return (
    <div className="container">
        {t("About")}
    </div>
  )
}

export default AboutContent