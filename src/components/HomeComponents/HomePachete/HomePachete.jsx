import "./HomePachete.css"
import { Link } from "react-router-dom"
import { FaRocket, FaStar } from "react-icons/fa6"
import { ImArrowUpRight2 } from "react-icons/im"
import { FaCheckCircle } from "react-icons/fa"

const HomePachete = () => {
  return (
    <div className="homePachete_container">
      <h1>Pachete</h1>
      <div className="homePachete_text">
         {/* <p>Oferim soluții flexibile și profesionale pentru dezvoltarea afacerii tale. Fiecare pachet poate fi personalizat, combinat sau achiziționat ca abonament pentru suport constant și actualizări. Alege ce funcționează cel mai bine pentru tine!</p> */}
      </div>
      <div className="homePachete_cards">
        <div className="homePachete_first_card">
         <span>STARTER <FaRocket /></span>
         <span className="homePachetete_text"><FaCheckCircle />Design personalizat</span>
         <span className="homePachetete_text"><FaCheckCircle />Creare de logo simplu</span>
         <span className="homePachetete_text"><FaCheckCircle />Mini-site de prezentare</span>
         <span className="homePachetete_text"><FaCheckCircle />Setup pentru pagini de afaceri pe social media</span>
         <Link to="/pachete" className="homePachete_alege_btn">ALEGE</Link>
        </div>
        <div className="homePachete_second_card">
         <span>AVANSAT <ImArrowUpRight2/></span>
         <span className="homePachetete_text"><FaCheckCircle />Design profesional si materiale de branding</span>
         <span className="homePachetete_text"><FaCheckCircle />Logo avansat cu opțiuni de revizuire</span>
         <span className="homePachetete_text"><FaCheckCircle />Website de 5 pagini cu optimizare SEO de bază</span>
         <span className="homePachetete_text"><FaCheckCircle />Creare de conținut și postări lunare pe social media</span>
         <span className="homePachetete_text"><FaCheckCircle />Campanie de publicitate inițială pe social media</span>
         <Link to="/pachete" className="homePachete_alege_btn">ALEGE</Link>
        </div>
        <div className="homePachete_third_card">
         <span>PRO <FaStar /></span>
         <span className="homePachetete_text"><FaCheckCircle />Branding complet: cărți de vizită, logo avansat, material publicitar și design de broșuri</span>
         <span className="homePachetete_text"><FaCheckCircle />Website complet (până la 10 pagini) cu optimizare SEO avansată și funcționalități personalizate</span>
         <span className="homePachetete_text"><FaCheckCircle />Gestionare completă a campaniilor de publicitate pe Facebook și Instagram (targetare avansată, analiză și rapoarte)</span>
         <span className="homePachetete_text"><FaCheckCircle />reare de conținut săptămânal și strategii de marketing pe social media</span>
         <span className="homePachetete_text"><FaCheckCircle />Consultanță și updateuri lunare pentru website și campanii</span>
         <Link to="/pachete" className="homePachete_alege_btn">ALEGE</Link>
        </div>
    </div>
    <Link to="/pachete" aria-label="pachete"><button>Descopera</button></Link>  
    </div>
  )
}

export default HomePachete