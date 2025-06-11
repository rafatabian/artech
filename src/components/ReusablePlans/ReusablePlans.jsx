import "./ReusablePlans.css"
import { Link } from "react-router-dom"
import { useTranslation } from "react-i18next"
import { useLocation } from "react-router-dom"
import { FaLeaf, FaRocket } from "react-icons/fa"
import { IoExtensionPuzzle } from "react-icons/io5"



const ReusablePlans = ({data, name}) => {
  const [t] = useTranslation("global")
  const location = useLocation()


  return (
    data?.length > 0 &&(
      <div className="package_content_and_button_container">
    <div className={location.pathname === "/websites" ? 'package_container_websites' : 'package_container'}>
     <h1>{name} Packages</h1>
    <div className="package-grid">
      {data.map((pkg, index) => (
        <div className="package-card" key={index}>
          <div className="header">
            <h2>{pkg.tier}{index === 0 ? <FaLeaf /> : index === 1 ?<IoExtensionPuzzle /> : <FaRocket />}</h2>
            <p className="subtitle">{pkg.subtitle}</p>
          </div>
          <p className="price">{pkg.price}</p>
          <ul className="features">
            {pkg.highlights.map((feature, i) => (
              <li key={i}>{feature}</li>
            ))}
          </ul>
          <p className="delivery">⏱️ {pkg.delivery}</p>
          <button className="cta-btn">Choose Package</button>
        </div>
      ))}
    </div>
    <Link to="/contact" className="branding_button" aria-label="contact">{t("branding_contact")}</Link>
    </div>
    </div>
    )
  )
}

export default ReusablePlans