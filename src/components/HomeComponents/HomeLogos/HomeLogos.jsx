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
          <h1>Branding</h1>
          <p>{t("home_branding_sub1")}</p>
          <p>{t("home_branding_sib2")}</p>
          <div>
            <img src={logo1} alt="logo" />
            <img src={logo2} alt="logo" />
            <img src={logo3} alt="logo" />
            <img src={logo4} alt="logo" />
          </div>
          <Link to="/branding" aria-label="descopera"><button>{t("home_discover_btn")}</button></Link>
      </div>
  )
}

export default HomeLogos
