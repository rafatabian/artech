import "./Offer.css"
import { useState } from "react"
import { lazy } from "react"
import offer_first_img from "../../assets/images/offer/offer_first_img.webp"
import offer_second_img from "../../assets/images/offer/offer_second_img.webp"
import offer_third_img from "../../assets/images/offer/offer_third_img.webp"
import offer_fourth_img from "../../assets/images/offer/offer_fourth_img.webp"
import offer_fifth_img from "../../assets/images/offer/offer_fifty_img.webp"

const ReusablePremadeOffer = lazy(() => import("../ReusablePremadeOffer/ReusablePremadeOffer"))

const Offer = () => {
  const [details, setDetails] = useState(false)

  const images = [
    offer_first_img,
    offer_second_img,
    offer_third_img,
    offer_fourth_img,
    offer_fifth_img
  ]
  const title = "first project"

  return (
    <div
      className="offer-hover-wrapper"
      onMouseEnter={() => setDetails(true)}
      onMouseLeave={() => setDetails(false)}
    >
      <div className="offer_container">
        <h1>🔥 Limited-Time Website Offer – Pre-made Designs You Can Own Exclusively!</h1>
      </div>

      {details && (
        <div className="dropdown-content">
          <ReusablePremadeOffer images={images} title={title} />
        </div>
      )}
    </div>
  )
}

export default Offer
