import "./newHomeWebsite.css"
import { Link } from "react-router-dom";
import { FaLaptopCode, FaCogs, FaRocket, FaBrain } from "react-icons/fa";


const newHomeWebsite = () => {
  return (
    <div className="website-section">
      <div className="website-container">
        <h1 className="home-section_title">
          Custom Websites, Tailored for Your Business
        </h1>
        <p className="website-description">
          We design and develop high-performance websites that align with your brand and business goals. 
          Our services go beyond just building a website—we personalize every aspect, ensuring a unique digital presence that stands out.
        </p>
        <div className="website-grid">
          <div className="website-card">
            <FaLaptopCode className="website-icon" />
            <h3 className="website-card-title">Custom Design</h3>
            <p className="website-card-text">Tailored solutions crafted to fit your business needs.</p>
          </div>
          <div className="website-card">
            <FaBrain className="website-icon" />
            <h3 className="website-card-title">AI-Powered Features</h3>
            <p className="website-card-text">Enhance engagement with AI-driven automation & chatbots.</p>
          </div>
          <div className="website-card">
            <FaRocket className="website-icon" />
            <h3 className="website-card-title">Optimized Performance</h3>
            <p className="website-card-text">Fast, secure, and SEO-friendly web solutions.</p>
          </div>
          <div className="website-card">
            <FaCogs className="website-icon" />
            <h3 className="website-card-title">Ongoing Support</h3>
            <p className="website-card-text">Stay ahead with continuous updates & improvements.</p>
          </div>
        </div>
        <div className="website-button-container">
          <Link to="/websites" className="website-button">Discover More</Link>
          <Link to="/contact" className="website-button">Get in Touch</Link>
        </div>
      </div>
    </div>
  )
}

export default newHomeWebsite