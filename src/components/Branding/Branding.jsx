import "./Branding.css"
import  businessCardOne  from "../../assets/images/artech_visit_cart_1.webp"
import  businessCardTwo  from "../../assets/images/artech_visit_card_2.webp"
import whiteBackground from "../../assets/images/home_white_background.webp"
import { BsPencilSquare } from "react-icons/bs"


const HomeBranding = () => {
  return (
    // <div className="homeBranding_container" style={{backgroundImage: `url(${whiteBackground})`}}>
    //     <div className="homeBranding_text">
    //         <div>
    //             <h1>Business Branding</h1>
    //             <BsPencilSquare />
    //         </div>
    //         <p>Creăm brand-ul unic și memorabil care reflectă perfect identitatea afacerii tale. Fie că dorești ceva modern, elegant sau clasic, ne asigurăm că afacerea ta va rămâne în mintea clienților.
    //         Fiecare element vizual al afacerii tale contează. De la nume, logo pana la paletele de culori, îți oferim design grafic de înaltă calitate care să comunice clar și eficient mesajul tău.
    //         </p>
    //         <button>AFLA MAI MULTE</button>
    //     </div>
    //     <div className="homeBranding_business_card">
    //       <div className="homeBranding_side front" style={{ backgroundImage: `url(${businessCardOne})` }}></div>
    //       <div className="homeBranding_side back" style={{ backgroundImage: `url(${businessCardTwo})` }}></div>
    //     </div>
    // </div>

    <div className="braning_new">
        <div className="braning_new_cont">
          <div className="ceata"></div>
          <h1  className="branding_titles">BRANDING</h1>
        </div>
        
        <div className="second_paravam">
        <h1>ce suntem</h1>
          <h2>p one of the more obscure Latin words, consectetur, from a Lorem Ipsum passage, and going through the cites of the word in classical literature, discovered the undoubtable source. Lorem Ipsum comes from sections 1.10.32 and 1.10.33 of "de Finibus Bonorum et Malorum" (The Extremes of Good and Evil) by Cicero, written in 45 BC. This book is a treatise on the theory of ethics, very popular during the Renaissance. The first line of Lorem Ipsum, "Lorem ipsum dolor sit amet..", comes from a line in section 1.10.32.</h2>
        </div>

        <div className="second_parallax">
        <div className="ceata"></div> 
           <h3 className="branding_titles">LOGOS</h3>
        </div>

        <div className="third_paravan">
          <h1>ce suntem</h1>
          <h2>p one of the more obscure Latin words, consectetur, from a Lorem Ipsum passage, and going through the cites of the word in classical literature, discovered the undoubtable source. Lorem Ipsum comes from sections 1.10.32 and 1.10.33 of "de Finibus Bonorum et Malorum" (The Extremes of Good and Evil) by Cicero, written in 45 BC. This book is a treatise on the theory of ethics, very popular during the Renaissance. The first line of Lorem Ipsum, "Lorem ipsum dolor sit amet..", comes from a line in section 1.10.32.</h2>
        </div>

        <div className="third_parallax">
        <div className="ceata"></div>
           <h3 className="branding_titles">LOGOS</h3>
        </div>

        <div className="second_paravam">
        <h1>ce suntem</h1>
          <h2>p one of the more obscure Latin words, consectetur, from a Lorem Ipsum passage, and going through the cites of the word in classical literature, discovered the undoubtable source. Lorem Ipsum comes from sections 1.10.32 and 1.10.33 of "de Finibus Bonorum et Malorum" (The Extremes of Good and Evil) by Cicero, written in 45 BC. This book is a treatise on the theory of ethics, very popular during the Renaissance. The first line of Lorem Ipsum, "Lorem ipsum dolor sit amet..", comes from a line in section 1.10.32.</h2>
        </div>

    </div>
  )

}

export default HomeBranding