import "./BrandIntro.css"
import { Link } from "react-router-dom"
import brandIntroImg from "../../../assets/images/branding/brand_intro.webp"
import brandImg from "../../../assets/images/branding/brandIntroImg.webp"

const BrandIntro = () => {
  return (
    <div className="marke__intro_background">
      <div className="marke_intro_container">
        <div className="brand_intro_img_container">
           <img src={brandImg} alt="Marketing Intro" className="marke_intro_image" />
        </div>
       
        <div className="marke_intro_text">
          <h1>Look Like a Brand People Can Trust From Day One</h1>
          <p>Logos, visuals, and business cards that instantly build credibility</p>
          <div className="marke_button_container">
            <Link to="/contact" className="marke_button">
              Contact Us
            </Link>
            <Link to="/marketing" className="marke_button">
              See Plans
            </Link>
        </div>
      </div>
    </div>
    </div>
  )
}

export default BrandIntro