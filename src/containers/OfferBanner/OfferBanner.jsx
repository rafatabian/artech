import "./OfferBanner.css"
import { useEffect, useState } from "react"
import { useTranslation } from "react-i18next"
import { lazy } from "react"
import { Link, useLocation } from "react-router-dom"
import offer_first_img from "../../assets/images/offer/offer_first_img.webp"
import offer_second_img from "../../assets/images/offer/offer_second_img.webp"
import offer_third_img from "../../assets/images/offer/offer_third_img.webp"
import offer_fourth_img from "../../assets/images/offer/offer_fourth_img.webp"
import offer_fifth_img from "../../assets/images/offer/offer_fifty_img.webp"

const ReusablePremadeOffer = lazy(() => import("../../components/ReusablePremadeOffer/ReusablePremadeOffer"))

const Offer = () => {
  const [details, setDetails] = useState(false)
  const [rightLocation, setRightLocation] = useState(false)
  const [t] = useTranslation("global")
  const location = useLocation()

  const images = [
    offer_first_img,
    offer_second_img,
    offer_third_img,
    offer_fourth_img,
    offer_fifth_img
  ]
  const title = "first project"

//cheching location
  useEffect(() => {
     setRightLocation(location.pathname !== "/offer")
     setDetails(false)
  }, [location.pathname])

  return (
    rightLocation ? 
    (<Link
      to="/offer"
      className="offer-hover-wrapper"
      onMouseEnter={() => setDetails(true)}
      onMouseLeave={() => setDetails(false)}
    >
      <div className="offer_container">
        <h1>🔥 {t("offer_menu")}</h1>
      </div>

      {details && (
        <div className="dropdown-content">
          <ReusablePremadeOffer images={images} title={title} />
        </div>
      )}
    </Link>)
    : null 
  )
}

export default Offer
