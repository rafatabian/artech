import "./Home_services.css"
import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";

const Home_services = () => {
  const [t] = useTranslation("global");

  return (
    <div className="home_our_services">
   <h2>{t("home_our_services_title")}</h2>
<ul>
  <li> <Link to="/websites">{t("home_our_services_1")}</Link> </li>
  <li> <Link to="/websites">{t("home_our_services_2")}</Link> </li>
  <li> <Link to="/websites">{t("home_our_services_3")}</Link> </li>
  <li> <Link to="/websites">{t("home_our_services_4")}</Link> </li>
  <li> <Link to="/websites">{t("home_our_services_5")}</Link> </li>
  <li> <Link to="/branding">{t("home_our_services_6")}</Link> </li>
  <li> <Link to="/branding">{t("home_our_services_7")}</Link> </li>
  <li> <Link to="/marketing">{t("home_our_services_8")}</Link> </li>
  <li> <Link to="/marketing">{t("home_our_services_9")}</Link> </li>
  <li> <Link to="/marketing">{t("home_our_services_10")}</Link> </li>
  <li> <Link to="/marketing">{t("home_our_services_11")}</Link> </li>
</ul>

  </div>
  )
}

export default Home_services