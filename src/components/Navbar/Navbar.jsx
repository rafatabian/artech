import "./Navbar.css"
import { useEffect, useState } from "react"
import { FiMenu } from "react-icons/fi"
import { IoClose } from "react-icons/io5"
import black_logo from "../../assets/images/navbar_white_logo.webp"
import white_logo from "../../assets/images/navbar_dark_logo.webp"
import { Link, useLocation } from "react-router-dom"
import { useTranslation } from "react-i18next"


const Navbar = () => {
    const [showMenu, setShowMenu] = useState(false)
    const [dark, setDark] = useState(false)
    const location = useLocation()
    const [t, i18n] = useTranslation("global")

// changin language function
const hanldleLanguage = (lang) => {
     i18n.changeLanguage(lang)
}


    // chech location and change nav color
    useEffect(() => {
      setDark(location.pathname === "/websites" ? true : false)
    }, [location.pathname])





  return (
    <div className={`navbar_container ${dark ? "navbar_dark" : ""}`}>
     <Link to="/" className="navbar_logo">
        <img src={dark ? white_logo : black_logo} alt="logo"/>
     </Link>

     {!showMenu && <FiMenu className="navbar_menu-icon" onClick={() => setShowMenu(true)}/>}
     {showMenu && <IoClose className="navbar_close_icon" onClick={() => setShowMenu(false)}/>}

      <div className={`navbar_buttons ${showMenu ? "show_menu_icon_clicked" : ""}`}> 
        <button onClick={()=> hanldleLanguage("ro")}>RO</button>
        <button onClick={()=> hanldleLanguage("en")}>EN</button>
        <Link to="/"><button onClick={() => setShowMenu(false)}>HOME</button></Link>
        <Link to="/branding"><button onClick={() => setShowMenu(false)}>BRANDING</button></Link>
        <Link to="/websites"><button onClick={() => setShowMenu(false)}>WEBSITES</button></Link>
        <Link to="/marketing"><button onClick={() => setShowMenu(false)}>MARKETING</button></Link>
        <Link to="/plans"><button onClick={() => setShowMenu(false)}>{t("navbar_pachete")}</button></Link>
        <Link to="/help"><button onClick={() => setShowMenu(false)}>{t("navbar_ajutor")}</button></Link>
        <Link to="/contact" className="navbar_contact"><button onClick={() => setShowMenu(false)}>CONTACT</button></Link>
     </div>
     
    </div>
  )
}

export default Navbar