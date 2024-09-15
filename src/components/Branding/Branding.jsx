import "./Branding.css"
import { lazy } from "react"
import firstImageURL from "../../assets/images/branding/branding_first_img.jpg"
import secondImageURL from "../../assets/images/branding/logos.png"
import thirdImageURL from "../../assets/images/branding/branding_visit_card.jpg"
import forthImageURL from "../../assets/images/branding/branding_graphic_design.png"
const ReusableComponent = lazy(() => import("../ReusableComponent/ReusableComponent"))

const HomeBranding = () => {
const brandingProps={
    titles: ["BRANDING", "LOGOURI", "CARTI DE VIZITA", "DESIGN GRAFIC"],
    headings: ["Branding de top", "Logo Personalizat", "Cărți de Vizită Profesionale", "Design grafic de top" ],
    firstImage: firstImageURL,
    secondImage: secondImageURL,
    thirdImage: thirdImageURL,
    forthImage: forthImageURL,
    firstText: "Creăm un brand unic și memorabil care reflectă perfect identitatea afacerii tale. Indiferent dacă optezi pentru un stil modern, elegant sau clasic, ne asigurăm că afacerea ta va rămâne în mintea clienților. Fiecare detaliu contează – de la nume și logo, până la paletele de culori, îți oferim design grafic de înaltă calitate care comunică clar și eficient mesajul tău.",
    secondText: "Descoperă arta unui logo unic cu Artech. Înțelegem că logo-ul este inima identității vizuale a afacerii tale, de aceea oferim soluții de design personalizate, fie că ești un start-up în creștere sau o companie bine stabilită. Fiecare logo este creat de la zero, special pentru tine, iar colaborarea noastră îndeaproape ne permite să înțelegem viziunea și valorile tale. Oferim multiple concepte și revizii până când ești complet mulțumit de rezultatul final.",
    thirdText: "O carte de vizită este mai mult decât o simplă bucată de hârtie, este o reflectare a identității tale. La Artech, creăm cărți de vizită elegante și profesionale care fac o impresie durabilă. Fiecare design este personalizat și adaptat nevoilor tale specifice, reflectând identitatea și valorile afacerii tale. Oferim o varietate de opțiuni de personalizare, de la dimensiuni și tipuri de hârtie, la finisaje și detalii unice de design. Procesul nostru simplu și eficient începe cu o consultare detaliată, urmată de un design creativ ce va depăși așteptările tale.",
    forthText: "Oferim soluții complete de design grafic, menite să te ajute să comunici eficient și să te diferențiezi pe piață. De la branding și identitate vizuală care reflectă personalitatea și valorile afacerii tale, până la materiale publicitare de impact precum broșuri, afișe și bannere, ne asigurăm că fiecare detaliu este aliniat perfect cu viziunea ta. Oferim și design digital pentru website-uri, aplicații mobile și social media, completat de animații și infografice care fac conținutul tău mai captivant. În plus, susținem campaniile tale de marketing prin publicitate creativă și conținut vizual optimizat pentru a atrage și angaja audiența. La Dersign Grafic, transformăm ideile tale în realitate!",
}
 return(
    <ReusableComponent props={brandingProps} />
 )
}

export default HomeBranding