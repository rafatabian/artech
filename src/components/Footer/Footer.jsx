import "./Footer.css"
import { FaFacebook,FaInstagram, FaTiktok } from "react-icons/fa"
import { MdEmail } from "react-icons/md"
import { Link } from "react-router-dom"

const Footer = () => {
  return (
    <div className="footer_container">
        <h1 className="footer_title_blackgorund">ARTECH</h1>

        <div className="footer_socials">
            <Link to="https://www.facebook.com/profile.php?id=61561101313220 "><FaFacebook /></Link>
            <Link to="https://www.instagram.com/artech.agency1?igsh=cDFycG50ZnVlZDFi "><FaInstagram /></Link>
            <Link to=""><FaTiktok /></Link>
        </div>

        <div className="footer_links"> 
            <div>
                <Link to="/">HOME</Link>
                <Link to="/help">AJUTOR</Link>
                <Link to="/contact">CONTACT</Link>
            </div>
            <div>
              <Link to="/branding">BRANDING</Link>
              <Link to="/websites">WEBSITES</Link>
              <Link to="/marketing">MARKETING</Link>
              <Link to="/personalizare">PACHETE</Link>
            </div>
        </div>

        <div className="footer_legal"> 
          {/* add terms and conditions and coockes */}
        </div>

        <div className="footer_email">
           <span><MdEmail />agency.artech1@gmail.com</span> 
        </div>

        <h2>&copy; 2024 Rata Fabian & Negru Claudiu. All rights reserved.</h2>

    </div>
  )
}

export default Footer