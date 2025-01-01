import "./Navbar.css"
import { useEffect, useState } from "react"
import { FiMenu } from "react-icons/fi"
import { IoClose } from "react-icons/io5"
import black_logo from "../../assets/images/navbar_white_logo.webp"
import white_logo from "../../assets/images/navbar_dark_logo.webp"
import { Link, useLocation } from "react-router-dom"
import { useTranslation } from "react-i18next"
import { FaArrowRight } from "react-icons/fa6"


const Navbar = () => {
    const [showMenu, setShowMenu] = useState(false)
    const [dark, setDark] = useState(false)
    const location = useLocation()
    const [t, i18n] = useTranslation("global")
    const[language, setLanguage] = useState("")
    // TO DO make 'get a quote' call to action button to be under the footer.

// changin language function
const hanldleLanguage = (lang) => {
     i18n.changeLanguage(lang)
     setLanguage(lang)
}

//see prefered language
useEffect(() => {
  const userLang = navigator.language || navigator.userLanguage
  if(userLang.startsWith("ro")){
     setLanguage("ro")
  }else{ 
    setLanguage("en")
  }
}, [])

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
        <div className="navbar_languages">
           <button onClick={()=> hanldleLanguage("ro")} className={language === "ro" ? "navbar_language_btn_activated" : "navbar_language_btn_nonSelected"}>RO</button>
        <button onClick={()=> hanldleLanguage("en")} className={language === "en" ? "navbar_language_btn_activated" : "navbar_language_btn_nonSelected"}>EN</button>
        </div>
        <Link to="/"><button onClick={() => setShowMenu(false)}>HOME</button></Link>
        <Link to="/branding"><button onClick={() => setShowMenu(false)}>BRANDING</button></Link>
        <Link to="/websites"><button onClick={() => setShowMenu(false)}>WEBSITES</button></Link>
        <Link to="/marketing"><button onClick={() => setShowMenu(false)}>MARKETING</button></Link>
        <Link to="/plans"><button onClick={() => setShowMenu(false)}>{t("navbar_pachete")}</button></Link>
        <Link to="/help"><button onClick={() => setShowMenu(false)}>{t("navbar_ajutor")}</button></Link>
        <Link to="/contact" className="navbar_contact"><button onClick={() => setShowMenu(false)}>CONTACT</button></Link>
     </div>
     
     {location.pathname !== "/contact" && <Link to="/contact" className="navbar_call_to_action_btn">{t("home_get_a_quote")}{<FaArrowRight />}</Link>}
    </div>
  )
}

export default Navbar