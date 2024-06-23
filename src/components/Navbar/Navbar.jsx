import { useState } from "react"
import "./Navbar.css"
import { FiMenu } from "react-icons/fi"
import { IoClose } from "react-icons/io5"
import logo from "../../assets/images/artech_home-removebg-preview.png"

const Navbar = () => {
    const [showMenu, setShowMenu] = useState(false)


  return (
    <div className="navbar_container">
     <div className="navbar_logo">
        <img src={logo} alt="logo"/>
     </div>

     {!showMenu && <FiMenu className="navbar_menu-icon" onClick={() => setShowMenu(true)}/>}
     {showMenu && <IoClose className="navbar_close_icon" onClick={() => setShowMenu(false)}/>}

      <div className={`navbar_buttons ${showMenu ? "show_menu_icon_clicked" : ""}`}>
        <button onClick={() => setShowMenu(false)}>HOME</button>
        <button onClick={() => setShowMenu(false)}>WEBSITES</button>
        <button onClick={() => setShowMenu(false)}>BRANDING</button>
        <button onClick={() => setShowMenu(false)}>MARKETING</button>
        <button onClick={() => setShowMenu(false)}>PERSONALIZARE</button>
        <button onClick={() => setShowMenu(false)}>CONTACT</button>
     </div>
     
    </div>
  )
}

export default Navbar