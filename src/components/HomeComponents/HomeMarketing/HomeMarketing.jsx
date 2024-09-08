import "./HomeMarketing.css"
import { Link } from "react-router-dom"
import marketingPeople from "../../../assets/images/marketing/marketing_people.webp"
import marketingCamera from "../../../assets/images/marketing/marketing_camera.webp"
import marketingClick from "../../../assets/images/marketing/marketing_click.webp"
import marketingSocials from "../../../assets/images/marketing/marketing_socials.webp"




const HomeMarketing = () => {


  return (
    <div className="homeMarketing_conatiner">
      <h1>Marketing</h1>
      <p>Într-o lume evoluțională, marketing-ul eficient este cheia succesului oricărei afaceri.</p>
      <p>Suntem partenerul tău de încredere pentru succesul pe termen lung!</p>
      <div className="homeMarketing_images_and_text">
        <div>
          <h2>Marketing Digital</h2>
          <img src={marketingPeople} alt="marketing" />  
        </div>
        <div>
            <h2>Publicitate pe retelele sociale</h2>
            <img src={marketingSocials} alt="marketing" />
        </div>
        <div>
            <h2>Creare de continut</h2>
            <img src={marketingCamera} alt="marketing" />
        </div>
        <div>
            <h2>Campanii PPC (pay-per-click)</h2>
            <img src={marketingClick} alt="marketing" />  
        </div>
      </div>
      <Link to="/branding" aria-label="discover"><button>Descopera</button></Link>
    </div>
  )
}

export default HomeMarketing