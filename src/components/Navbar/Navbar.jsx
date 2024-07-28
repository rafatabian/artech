import "./Navbar.css"
import { useState } from "react"
import { FiMenu } from "react-icons/fi"
import { IoClose } from "react-icons/io5"
import black_logo from "../../assets/images/navbar_white_logo.webp"
import { Link } from "react-router-dom"

const Navbar = () => {
    const [showMenu, setShowMenu] = useState(false)




  return (
    <div className="navbar_container">
     <div className="navbar_logo">
        <img src={black_logo} alt="logo"/>
     </div>

     {!showMenu && <FiMenu className="navbar_menu-icon" onClick={() => setShowMenu(true)}/>}
     {showMenu && <IoClose className="navbar_close_icon" onClick={() => setShowMenu(false)}/>}

      <div className={`navbar_buttons ${showMenu ? "show_menu_icon_clicked" : ""}`}>
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