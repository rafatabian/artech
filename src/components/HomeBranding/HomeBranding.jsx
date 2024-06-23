import "./HomeBranding.css"
import  businessCardOne  from "../../assets/images/artech_visit_cart_1.webp"
import  businessCardTwo  from "../../assets/images/artech_visit_card_2.webp"


const HomeBranding = () => {
  return (
    <div className="homeBranding_container">
        <div className="homeBranding_business_card">
        <div className="homeBranding_side front" style={{ backgroundImage: `url(${businessCardOne})` }}></div>
        <div className="homeBranding_side back" style={{ backgroundImage: `url(${businessCardTwo})` }}></div>
        </div>
    </div>
  )
}

export default HomeBranding