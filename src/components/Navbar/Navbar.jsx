import "./Navbar.css"
import { useEffect, useState } from "react"
import { FiMenu } from "react-icons/fi"
import { IoClose } from "react-icons/io5"
import black_logo from "../../assets/images/navbar_white_logo.webp"
import white_logo from "../../assets/images/navbar_dark_logo.webp"
import { useLocation } from "react-router-dom"
import { Link } from "react-router-dom"

const Navbar = () => {
    const [showMenu, setShowMenu] = useState(false)
    const [navColor, setNavColor] = useState(null)
    const location = useLocation()
    const [scrollBorder, setScollBorder] = useState(false)

  useEffect(() => {
//changing navbar color  
   setNavColor(`${location.pathname === "/websites" ? "white": "transparent"}`)
    }, [location.pathname])

// check how much the user scrolls down and change navbar colors 
useEffect(() => {
  const handleScroll = () => {
    if(window.scrollY > window.innerHeight){
      setScollBorder(true)
    }else{
      setScollBorder(false)
    }
  }
   if(location.pathname === "/"){
   window.addEventListener("scroll", handleScroll)
   }else{
    setScollBorder(true)
   }

   return () => {
    window.removeEventListener("scroll", handleScroll)
   }
}, [location.pathname])



  return (
    <div className={`navbar_container ${scrollBorder ? "navbar_white" : ""}`} >
     <div className="navbar_logo">
      {scrollBorder
       ? <img src={black_logo} alt="logo"/>
       : <img src={white_logo} alt="logo"/>
      }
     </div>

     {!showMenu && <FiMenu className="navbar_menu-icon" onClick={() => setShowMenu(true)}/>}
     {showMenu && <IoClose className="navbar_close_icon" onClick={() => setShowMenu(false)}/>}

      <div className={`navbar_buttons ${showMenu ? "show_menu_icon_clicked" : ""} ${scrollBorder ? "navabr_btns_black" : ""}`}>
        <Link to="/"><button onClick={() => setShowMenu(false)}>HOME</button></Link>
        <Link to="/branding"><button onClick={() => setShowMenu(false)}>BRANDING</button></Link>
        <Link to="/websites"><button onClick={() => setShowMenu(false)}>WEBSITES</button></Link>
        <Link to="/marketing"><button onClick={() => setShowMenu(false)}>MARKETING</button></Link>
        <Link to="/personalizare"><button onClick={() => setShowMenu(false)}>PACHETE</button></Link>
        <Link to="/contact"><button onClick={() => setShowMenu(false)}>CONTACT</button></Link>
        <Link to="/help"><button onClick={() => setShowMenu(false)}>AJUTOR</button></Link>
     </div>
     
    </div>
  )
}

export default Navbar