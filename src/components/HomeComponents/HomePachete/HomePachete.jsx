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
         <span className="homePachetete_text"><FaCheckCircle />Design personalizat.</span>
         <span className="homePachetete_text"><FaCheckCircle />Creare de logo simplu.</span>
         <span className="homePachetete_text"><FaCheckCircle />Mini-site de prezentare.</span>
         <span className="homePachetete_text"><FaCheckCircle />Setup pentru pagini pe social media.</span>
         <Link to="/plans/#/0" className="homePachete_alege_btn">ALEGE</Link>
        </div>
        <div className="homePachete_second_card">
         <span>PRO <FaStar /></span>
         <span className="homePachetete_text"><FaCheckCircle />Branding & Website complet</span>
         <span className="homePachetete_text"><FaCheckCircle />Optimizare SEO si performanta</span>
         <span className="homePachetete_text"><FaCheckCircle />Gestionare completă a campaniilor de publicitate</span>
         <span className="homePachetete_text"><FaCheckCircle />Creare de conținut săptămânal</span>
         <span className="homePachetete_text"><FaCheckCircle />Consultanță și updateuri lunare</span>
         <Link to="/plans/#/1" className="homePachete_alege_btn">ALEGE</Link>
        </div>
        <div className="homePachete_third_card">
         <span>STANDARD <ImArrowUpRight2/></span>
         <span className="homePachetete_text"><FaCheckCircle />Design profesional</span>
         <span className="homePachetete_text"><FaCheckCircle />Logo avansat</span>
         <span className="homePachetete_text"><FaCheckCircle />Website de 5 pagini</span>
         <span className="homePachetete_text"><FaCheckCircle />Creare de conținut și postări lunare.</span>
         <span className="homePachetete_text"><FaCheckCircle />Campanie de publicitate</span>
         <Link to="/plans/#/2" className="homePachete_alege_btn">ALEGE</Link>
        </div>
    </div>
    <Link to="/plans" aria-label="pachete"><button>Descopera</button></Link>  
    </div>
  )
}

export default HomePachete