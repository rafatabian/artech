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

//changing navbar color
  useEffect(() => {
   if(location.pathname === "/websites"){
    setNavColor("white")
   }else{
    setNavColor("transparent")
   }
  }, [location.pathname])


  return (
    <div className="navbar_container">
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
        <a href="/websites"><button onClick={() => setShowMenu(false)} style={{color: `${navColor === "transparent" ? "black" : navColor}`}}>WEBSITES</button></a>
        <a href="/marketing"><button onClick={() => setShowMenu(false)} style={{color: `${navColor === "transparent" ? "black" : navColor}`}}>MARKETING</button></a>
        <a href="/personalizare"><button onClick={() => setShowMenu(false)} style={{color: `${navColor === "transparent" ? "black" : navColor}`}}>PERSONALIZARE</button></a>
        <a href="/contact"><button onClick={() => setShowMenu(false)} style={{color: `${navColor === "transparent" ? "black" : navColor}`}}>CONTACT</button></a>
     </div>
     
    </div>
  )
}

export default Navbar