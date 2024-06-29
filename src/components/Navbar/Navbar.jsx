import { useContext, useEffect, useState } from "react"
import "./Navbar.css"
import { FiMenu } from "react-icons/fi"
import { IoClose } from "react-icons/io5"
import black_logo from "../../assets/images/navbar__white_logo.webp"
import white_logo from "../../assets/images/navabr_black_logo.webp"
import { GeneralContext } from "../../context/Context"

const Navbar = () => {
    const [showMenu, setShowMenu] = useState(false)
    const { navbarColor } = useContext(GeneralContext)


  return (
    <div className={`navbar_container ${navbarColor === "black" ? "navbar_dark" : "navbar_white"}`}>
     <div className="navbar_logo">
        {navbarColor === "white" ? 
        <img src={black_logo} alt="logo"/>
        :<img className="navabr_white_logo" src={white_logo} alt="logo"/>}
     </div>

     {!showMenu && <FiMenu className="navbar_menu-icon" onClick={() => setShowMenu(true)}/>}
     {showMenu && <IoClose className="navbar_close_icon" onClick={() => setShowMenu(false)}/>}

      <div className={`navbar_buttons ${showMenu ? "show_menu_icon_clicked" : ""}`}>
        <button onClick={() => setShowMenu(false)} style={{color: `${navbarColor === "white" ? "black" : "white"}`}}>HOME</button>
        <button onClick={() => setShowMenu(false)} style={{color: `${navbarColor === "white" ? "black" : "white"}`}}>BRANDING</button>
        <button onClick={() => setShowMenu(false)} style={{color: `${navbarColor === "white" ? "black" : "white"}`}}>WEBSITES</button>
        <button onClick={() => setShowMenu(false)} style={{color: `${navbarColor === "white" ? "black" : "white"}`}}>MARKETING</button>
        <button onClick={() => setShowMenu(false)} style={{color: `${navbarColor === "white" ? "black" : "white"}`}}>PERSONALIZARE</button>
        <button onClick={() => setShowMenu(false)} style={{color: `${navbarColor === "white" ? "black" : "white"}`}}>CONTACT</button>
     </div>
     
    </div>
  )
}

export default Navbar