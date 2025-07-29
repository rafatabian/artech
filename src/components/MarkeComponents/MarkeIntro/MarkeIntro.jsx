import "./MarkeIntro.css"
import markeIntroImg from "../../../assets/images/marketing/marke_intro.webp"
import { Link } from "react-router-dom"

const MarkeIntro = () => {
  return (
    <div className="marke__intro_background">
      <div className="marke_intro_container">
        <img src={markeIntroImg} alt="Marketing Intro" className="marke_intro_image" />
        <div className="marke_intro_text">
          <h1>Attract the Right Clients With the Right Marketing</h1>
          <p>We help businesses attract qualified leads through tailored, data-driven marketing</p>
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

export default MarkeIntro