import "./HomeWebsite.css"
import { Link } from "react-router-dom";
import { FaLaptopCode, FaCogs, FaRocket, FaBrain } from "react-icons/fa";
import { useTranslation } from "react-i18next"


const NewHomeWebsite = () => {
  const [t] = useTranslation("global")

  return (
    <div className="website-section">
      <div className="website-container">
        <h1 className="home-section_title"> {t("home_websites_title")}</h1>
        <p className="website-description">{t("home_websites_desc")}</p>
        <div className="website-grid">
          <div className="website-card">
            <FaLaptopCode className="website-icon" />
            <h3 className="website-card-title">{t("home_websites_card1_title")}</h3>
            <p className="website-card-text">{t("home_websites_card1_desc")}</p>
          </div>
          <div className="website-card">
            <FaBrain className="website-icon" />
            <h3 className="website-card-title">{t("home_websites_card2_title")}</h3>
            <p className="website-card-text">{t("home_websites_card2_desc")}</p>
          </div>
          <div className="website-card">
            <FaRocket className="website-icon" />
            <h3 className="website-card-title">{t("home_websites_card3_title")}</h3>
            <p className="website-card-text">{t("home_websites_card3_desc")}</p>
          </div>
          <div className="website-card">
            <FaCogs className="website-icon" />
            <h3 className="website-card-title">{t("home_websites_card4_title")}</h3>
            <p className="website-card-text">{t("home_websites_card4_desc")}</p>
          </div>
        </div>
        <div className="website-button-container">
          <Link to="/websites" className="website-button">{t("home_discover_btn")}</Link>
          <Link to="/contact" className="website-button">{t("home_get_in_touch")}</Link>
        </div>
      </div>
    </div>
  )
}

export default NewHomeWebsite