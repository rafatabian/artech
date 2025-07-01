import { useTranslation } from "react-i18next"
import "./Home_offer.css"

const Home_offer = () => {
  const [t] = useTranslation("global")


  return (
    <div className="pricing-wrapper" id="fair-pricing">
      <div className="pricing-content">
        <h2 className="pricing-title">{t("home_pricing_title")}</h2>
        <p className="pricing-subtitle">{t("home_pricing_subtitle1")} <span className="price-amount">{t("home_pricing_subtitle2")}</span> {t("home_pricing_subtitle3")}</p>
        <p className="pricing-text">{t("home_pricing_description")}</p>
        <p className="pricing-highlight">{t("home_pricing_guarantee")}</p>

        <a href="/contact" className="pricing-button">{t("home_get_a_quote")}</a>
      </div>
    </div>
  )
}

export default Home_offer