import "./Branding.css"
import  businessCardOne  from "../../assets/images/artech_visit_cart_1.webp"
import  businessCardTwo  from "../../assets/images/artech_visit_card_2.webp"
import whiteBackground from "../../assets/images/home_white_background.webp"
import { BsPencilSquare } from "react-icons/bs"


const HomeBranding = () => {
  return (
    <div className="homeBranding_container" style={{backgroundImage: `url(${whiteBackground})`}}>
        <div className="homeBranding_text">
            <div>
                <h1>Business Branding</h1>
                <BsPencilSquare />
            </div>
            <p>Creăm brand-ul unic și memorabil care reflectă perfect identitatea afacerii tale. Fie că dorești ceva modern, elegant sau clasic, ne asigurăm că afacerea ta va rămâne în mintea clienților.
            Fiecare element vizual al afacerii tale contează. De la nume, logo pana la paletele de culori, îți oferim design grafic de înaltă calitate care să comunice clar și eficient mesajul tău.
            </p>
            <button>AFLA MAI MULTE</button>
        </div>
        <div className="homeBranding_business_card">
          <div className="homeBranding_side front" style={{ backgroundImage: `url(${businessCardOne})` }}></div>
          <div className="homeBranding_side back" style={{ backgroundImage: `url(${businessCardTwo})` }}></div>
        </div>
    </div>
  )
}

export default HomeBranding