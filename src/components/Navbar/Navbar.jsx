import "./Navbar.css"
import { useEffect, useState } from "react"
import { FiMenu } from "react-icons/fi"
import { IoClose } from "react-icons/io5"
import black_logo from "../../assets/images/navbar_white_logo.webp"
import white_logo from "../../assets/images/navbar_dark_logo.webp"
import { Link, useLocation } from "react-router-dom"
import { useTranslation } from "react-i18next"
import { FaArrowRight } from "react-icons/fa6"
import shortLogo from "../../assets/images/artech_logo.webp"


const Navbar = () => {
    const [showMenu, setShowMenu] = useState(false)
    const [dark, setDark] = useState(false)
    const location = useLocation()
    const [t, i18n] = useTranslation("global")
    const [focusBtn, setFocusBtn] = useState(0)
    const[language, setLanguage] = useState("")
    // TO DO make 'get a quote' call to action button to be under the footer.

// changin language function
// const hanldleLanguage = (lang) => {
//      i18n.changeLanguage(lang)
//      setLanguage(lang)
// }

//see prefered language
// useEffect(() => {
//   const userLang = navigator.language || navigator.userLanguage
//   if(userLang.startsWith("ro")){
//      setLanguage("ro")
//   }else{ 
//     setLanguage("en")
//   }
// }, [])

   
    useEffect(() => {
      // make navbar btns to change color base on the page where we are
      switch (location.pathname) {
  case "/":
    setFocusBtn(1);
    break;
  case "/branding":
    setFocusBtn(2);
    break;
  case "/websites":
    setFocusBtn(3);
    break;
  case "/marketing":
    setFocusBtn(4)
   break;
   case "/plans":
    setFocusBtn(5)
   break;
   case "/help":
    setFocusBtn(6)
   break;
   case "/contact":
    setFocusBtn(7)
   break;

  default:
    setFocusBtn(1);
} // chech location and change nav color
      setDark(location.pathname === "/websites" ? true : false)
    }, [location.pathname])


  return (
    <div className={`navbar_background ${dark ? "navbar_background_dark" : ""}`}>
<div className={`navbar_container ${dark ? "navbar_dark" : ""}`}>
     <Link to="/" className="navbar_logo">
        <img src={dark ? white_logo : black_logo} alt="logo"/>
        <img src={shortLogo} alt="logo"/>
     </Link>

     {!showMenu && <FiMenu className="navbar_menu-icon" onClick={() => setShowMenu(true)}/>}
     {showMenu && <IoClose className="navbar_close_icon" onClick={() => setShowMenu(false)}/>}

      <div className={`navbar_buttons ${showMenu ? "show_menu_icon_clicked" : ""}`}> 
        <div className="navbar_languages">
           {/* <button onClick={()=> hanldleLanguage("ro")} className={language === "ro" ? "navbar_language_btn_activated" : "navbar_language_btn_nonSelected"}>RO</button> */}
        {/* <button onClick={()=> hanldleLanguage("en")} className={language === "en" ? "navbar_language_btn_activated" : "navbar_language_btn_nonSelected"}>EN</button> */}
        </div>
        <Link to="/" className={focusBtn === 1 ? "nav_focus_btn" : null}><button onClick={() => setShowMenu(false)}>HOME</button></Link>
        <Link to="/branding" className={focusBtn === 2 ? "nav_focus_btn" : null}><button onClick={() => setShowMenu(false)}>BRANDING</button></Link>
        <Link to="/websites" className={focusBtn === 3 ? "nav_focus_btn" : null}><button onClick={() => setShowMenu(false)}>WEBSITES</button></Link>
        <Link to="/marketing" className={focusBtn === 4 ? "nav_focus_btn" : null}><button onClick={() => setShowMenu(false)}>MARKETING</button></Link>
        <Link to="/plans" className={focusBtn === 5 ? "nav_focus_btn" : null}><button onClick={() => setShowMenu(false)}>{t("navbar_pachete")}</button></Link>
        <Link to="/help" className={focusBtn === 6 ? "nav_focus_btn" : null}><button onClick={() => setShowMenu(false)}>{t("navbar_ajutor")}</button></Link>
        <Link to="/contact" className={focusBtn === 7 ? "nav_focus_btn" : null}><button onClick={() => setShowMenu(false)}>CONTACT</button></Link>
     </div>
     
     {location.pathname !== "/contact" && <Link to="/contact" className="navbar_call_to_action_btn">{t("home_get_a_quote")}{<FaArrowRight />}</Link>}

    </div>
    </div>

  )
}

export default Navbar