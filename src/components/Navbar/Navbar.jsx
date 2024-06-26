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
    const [navPosition, setNavPosition] = useState("")
    const location = useLocation()


  useEffect(() => {
//changing navbar color  
   setNavColor(`${location.pathname === "/websites" ? "white": "transparent"}`)
// change navbar position
  setNavPosition(`${location.pathname === "/" ? "relative" : "fixed"}`)
  }, [location.pathname])


  return (
    <div className="navbar_container" style={{ 
      position: navPosition, 
      background: navPosition === "relative" 
        ? 'white' 
        : "transparent" 
    }}>
     <div className="navbar_logo">
      {navColor === "white"
      ? <img src={white_logo} alt="logo"/>
      : <img src={black_logo} alt="logo"/>
        }
     </div>

     {!showMenu && <FiMenu className="navbar_menu-icon" onClick={() => setShowMenu(true)}/>}
     {showMenu && <IoClose className="navbar_close_icon" onClick={() => setShowMenu(false)}/>}

      <div className={`navbar_buttons ${showMenu ? "show_menu_icon_clicked" : ""}`}>
        <Link to="/"><button onClick={() => setShowMenu(false)} style={{color: `${navColor === "transparent" ? "black" : navColor}`}}>HOME</button></Link>
        <Link to="/branding"><button onClick={() => setShowMenu(false)} style={{color: `${navColor === "transparent" ? "black" : navColor}`}}>BRANDING</button></Link>
        <Link to="/websites"><button onClick={() => setShowMenu(false)} style={{color: `${navColor === "transparent" ? "black" : navColor}`}}>WEBSITES</button></Link>
        <Link to="/marketing"><button onClick={() => setShowMenu(false)} style={{color: `${navColor === "transparent" ? "black" : navColor}`}}>MARKETING</button></Link>
        <Link to="/personalizare"><button onClick={() => setShowMenu(false)} style={{color: `${navColor === "transparent" ? "black" : navColor}`}}>PERSONALIZARE</button></Link>
        <Link to="/contact"><button onClick={() => setShowMenu(false)} style={{color: `${navColor === "transparent" ? "black" : navColor}`}}>CONTACT</button></Link>
        <Link to="/help"><button onClick={() => setShowMenu(false)} style={{color: `${navColor === "transparent" ? "black" : navColor}`}}>HELP</button></Link>
     </div>
     
    </div>
  )
}

export default Navbar