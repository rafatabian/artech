import "./Branding.css"
import  businessCardOne  from "../../assets/images/artech_visit_cart_1.webp"
import  businessCardTwo  from "../../assets/images/artech_visit_card_2.webp"
import whiteBackground from "../../assets/images/home_white_background.webp"
import { BsPencilSquare } from "react-icons/bs"
import { Link } from "react-router-dom"


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
        <h1>Branding de top</h1>
          <h2>Creăm un brand unic și memorabil care reflectă perfect identitatea afacerii tale. Indiferent dacă optezi pentru un stil modern, elegant sau clasic, ne asigurăm că afacerea ta va rămâne în mintea clienților. Fiecare detaliu contează – de la nume și logo, până la paletele de culori, îți oferim design grafic de înaltă calitate care comunică clar și eficient mesajul tău.
            </h2>
        </div>

        <div className="second_parallax">
        <div className="ceata"></div> 
           <h3 className="branding_titles">LOGOURI</h3>
        </div>

        <div className="third_paravan">
          <h1>Design de Logo Personalizat</h1>
          <h2>Descoperă arta unui logo unic cu Artech. Înțelegem că logo-ul este inima identității vizuale a afacerii tale, de aceea oferim soluții de design personalizate, fie că ești un start-up în creștere sau o companie bine stabilită. Fiecare logo este creat de la zero, special pentru tine, iar colaborarea noastră îndeaproape ne permite să înțelegem viziunea și valorile tale. Oferim multiple concepte și revizii până când ești complet mulțumit de rezultatul final.</h2>
        </div>

        <div className="third_parallax">
        <div className="ceata"></div>
           <h3 className="branding_titles">CARTI DE VIZITA</h3>
        </div>

        <div className="second_paravam">
        <h1>Cărți de Vizită Profesionale</h1>
          <h2>O carte de vizită este mai mult decât o simplă bucată de hârtie, este o reflectare a identității tale. La Artech, creăm cărți de vizită elegante și profesionale care fac o impresie durabilă. Fiecare design este personalizat și adaptat nevoilor tale specifice, reflectând identitatea și valorile afacerii tale. Oferim o varietate de opțiuni de personalizare, de la dimensiuni și tipuri de hârtie, la finisaje și detalii unice de design. Procesul nostru simplu și eficient începe cu o consultare detaliată, urmată de un design creativ ce va depăși așteptările tale.</h2>
        </div>

        <div className="forth_parallax">
        <div className="ceata"></div>
           <h3 className="branding_titles">DESIGN GRAFIC</h3>
        </div>

        
        <div className="third_paravan">
        <h1>Design grafic de top</h1>
          <h2>Oferim soluții complete de design grafic, menite să te ajute să comunici eficient și să te diferențiezi pe piață. De la branding și identitate vizuală care reflectă personalitatea și valorile afacerii tale, până la materiale publicitare de impact precum broșuri, afișe și bannere, ne asigurăm că fiecare detaliu este aliniat perfect cu viziunea ta. Oferim și design digital pentru website-uri, aplicații mobile și social media, completat de animații și infografice care fac conținutul tău mai captivant. În plus, susținem campaniile tale de marketing prin publicitate creativă și conținut vizual optimizat pentru a atrage și angaja audiența. La Dersign Grafic, transformăm ideile tale în realitate!
          </h2>
        </div>

        <Link to="/contact" className="branding_button">CERE OFERTA</Link>

    </div>
  )

}

export default HomeBranding