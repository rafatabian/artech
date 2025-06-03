import "./HomeLogos.css"
import logo1 from "../../../assets/images/logos/logo1.webp"
import logo2 from "../../../assets/images/logos/logo2.webp"
import logo3 from "../../../assets/images/logos/logo3.webp"
import logo4 from "../../../assets/images/logos/logo4.webp"
import { Link } from "react-router-dom"
import { useTranslation } from "react-i18next"

const HomeLogos = () => {
   const[t] = useTranslation("global")


  return (
    <div className="home_logos">
          <h1>{t("home_branding_sub1")}</h1>
          <p>{t("home_branding_sib2")}</p>
          <div className="home_logos_img_container">
            <img src={logo1} alt="logo" />
            <img src={logo2} alt="logo" />
            <img src={logo3} alt="logo" />
            <img src={logo4} alt="logo" />
          </div>

          <div className="logos_buttons_container">
            <Link to="/branding" className="logos_button">Branding</Link>
            <Link to="/contact" className="logos_button">{t("home_get_in_touch")}</Link>
        </div>
      </div>
  )
}

export default HomeLogos
