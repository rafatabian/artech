import "./PlansIntro.css"
import { Link } from "react-router-dom"
import { FaArrowDown, FaPencilAlt } from "react-icons/fa";
import { IoMegaphone } from "react-icons/io5";
import { MdOutlineWeb } from "react-icons/md";
import { FaRulerCombined } from "react-icons/fa6";

const PlansIntro = ({ scrollToRef }) => {

  const handleClick = () => {
    scrollToRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <div className="plans__intro_background">
      <div className="plans_intro_container">
        <div className="plans_icons_conteiner">
            <IoMegaphone />
            <MdOutlineWeb />
            <FaPencilAlt />
            <FaRulerCombined />
        </div>
        <div className="plans_intro_text">
          <h1>Branding + Website + Marketing a complete solution</h1>
          <p>Bringing every service together to accelerate your business success</p>
          <div className="plans_button_container">
            <Link to="/contact" className="plans_button">
              Contact Us
            </Link>
            <Link to="" onClick={() => handleClick()} className="plans_icon_button">
              <FaArrowDown/>
            </Link>
        </div>
      </div>
    </div>
    </div>
  )
}

export default PlansIntro