import "./BrandLogos.css"
import { Link } from "react-router-dom"
import brand_first_img from "../../../assets/images/branding/brand_logo_logo_1.webp"
import brand_second_img from "../../../assets/images/branding/brand_logo_logo_2.webp"
import brand_third_img from "../../../assets/images/branding/brand_logo_logo_3.webp"


const BrandLogos = () => {
  return (
    <div className="brand_logo_background">
      <h1>Logo creation prosess</h1>
      <div className="brand_logo_container">
         
         <div className="brand_logo_text">
            <span>1<p>We learn about your brand, goals, and target audience.</p></span>
          <span>2<p>We sketch and explore creative logo ideas.</p></span>
          <span>3<p>We select the best concept and refine it with your feedback.</p></span>
          <span>4<p>You choose your favorite version for final touches.</p></span>
          <Link to="/contect">Start Creating</Link>
         </div>
         {/* img container */}
         <div className="brand_img_container">
          <div className="brand_logo_img_container">
            <img src={brand_first_img} alt="logo" />
            <span></span>
          </div>
          <div className="brand_logo_img_container">
            <img src={brand_second_img} alt="logo" />
            <span></span>
          </div>
           <div className="brand_logo_img_container">
            <img src={brand_third_img} alt="logo" />
          </div>
         </div>
      </div>
    </div>
  )
}

export default BrandLogos