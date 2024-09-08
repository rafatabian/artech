import "./HomePachete.css"
import ShapesImg from "../../../assets/images/pachete_image.webp"
import { Link } from "react-router-dom"

const HomePachete = () => {
  return (
    <div className="homePachete_container">
      <h1>Pachete</h1>
     <div className="homePachete_text_image">
      <div className="homePachete_text">
         <p>Descoperă pachetele noastre personalizate pentru dezvoltare web, design de logouri, cărți de vizită și branding complet. Creează-ți o imagine de succes cu soluții profesionale și creative!</p>
         <p>Transformă-ți afacerea cu pachetele noastre de design și marketing. De la site-uri web la branding și promovare, îți oferim toate resursele pentru un impact vizual puternic și eficient!</p>
         <Link to="/pachete" aria-label="pachete"><button>Descopera</button></Link>
      </div>
      <div className="homePachete_image">
        <img src={ShapesImg} alt="shapes"/>
      </div>
    </div>
    </div>
  )
}

export default HomePachete