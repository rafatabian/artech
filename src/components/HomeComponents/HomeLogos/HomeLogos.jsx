import "./HomeLogos.css"
import logo1 from "../../../assets/images/logos/logo1.webp"
import logo2 from "../../../assets/images/logos/logo2.webp"
import logo3 from "../../../assets/images/logos/logo3.webp"
import logo4 from "../../../assets/images/logos/logo4.webp"
import { Link } from "react-router-dom"

const HomeLogos = () => {
  return (
    <div className="home_logos">
          <h1>Branding</h1>
          <p>Logouri, Carti de vizita, Design si Culori.</p>
          <p>Fiecare element vizual al afacerii tale conteaza!</p>
          <div>
            <img src={logo1} alt="logo" />
            <img src={logo2} alt="logo" />
            <img src={logo3} alt="logo" />
            <img src={logo4} alt="logo" />
          </div>
          <Link to="/branding" aria-label="descopera"><button>Descopera</button></Link>
      </div>
  )
}

export default HomeLogos
