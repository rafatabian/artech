import "./WebIntro.css"
import { Link } from "react-router-dom"
import web_intro_img from "../../../assets/images/websites/web_intro.webp"

const WebIntro = () => {
  return (
   <div className="web_intro">
        <div>
          <h1>Imagine a website that works while you sleep, converting visitors 24/7</h1>
          <h2>Build with SEO, AI and performance in mind</h2>
          <div className="web_intro_btn_container">
            <Link to="/plans">Plans</Link>
            <Link to="/contact">Get started</Link>
          </div>
        </div>
        
        <div>
          <img src={web_intro_img} alt="websites intro image" />
        </div>
      </div>
  )
}

export default WebIntro