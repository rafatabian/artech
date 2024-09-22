import "./Footer.css"
import { FaFacebook,FaInstagram, FaTiktok } from "react-icons/fa"
import { MdEmail } from "react-icons/md"
import { Link, useLocation } from "react-router-dom"

const Footer = () => {
  const location = useLocation()
  const websitesPage = location.pathname === "/websites"

  return (
    <div className={`${websitesPage ? "footer_dark" : "footer_container"}`}>
        <h1 className="footer_title_blackgorund">ARTECH</h1>

        <div className="footer_socials">
            <Link to="https://www.facebook.com/profile.php?id=61561101313220 " aria-label="facebook"><FaFacebook /></Link>
            <Link to="https://www.instagram.com/artech.agency1?igsh=cDFycG50ZnVlZDFi" aria-label="instagram"><FaInstagram /></Link>
            <Link to="https://www.tiktok.com/@artechagency" aria-label="tiktok"><FaTiktok / ></Link>
        </div>

        <div className="footer_links"> 
            <div>
                <Link to="/" aria-label="home">HOME</Link>
                <Link to="/help" aria-label="help">AJUTOR</Link>
                <Link to="/contact" aria-label="contact">CONTACT</Link>
            </div>
            <div>
              <Link to="/branding" aria-label="branding">BRANDING</Link>
              <Link to="/websites" aria-label="websites">WEBSITES</Link>
              <Link to="/marketing" aria-label="marketing">MARKETING</Link>
              <Link to="/personalizare" aria-label="pachete">PACHETE</Link>
            </div>
        </div>

        <div className="footer_legal"> 
          {/* add terms and conditions and coockes */}
        </div>

        <div className="footer_email">
           <span><MdEmail />claudiunegru@artech-agency.co</span> 
        </div>

        <h2>&copy; 2024 Rata Fabian & Negru Claudiu. All rights reserved.</h2>

    </div>
  )
}

export default Footer