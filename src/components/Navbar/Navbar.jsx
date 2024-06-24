import { useContext, useEffect, useState } from "react"
import "./Navbar.css"
import { FiMenu } from "react-icons/fi"
import { IoClose } from "react-icons/io5"
import logo from "../../assets/images/artech_home-removebg-preview.png"
import { GeneralContext } from "../../context/Context"

const Navbar = () => {
    const [showMenu, setShowMenu] = useState(false)
    const { navbarColor } = useContext(GeneralContext)


  return (
    <div className={`navbar_container ${navbarColor === "black" ? "navbar_dark" : "navbar_white"}`}>
     <div className="navbar_logo">
        <img src={logo} alt="logo"/>
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