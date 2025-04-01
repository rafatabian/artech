import "./HomeBlogs.css"
import { Link } from "react-router-dom"
import design_img from "../../../assets/images/blogs/vlog_title_img.webp"
import cola_img from "../../../assets/images/blogs/artech_cola_blog (1).webp"
import lambo_img from "../../../assets/images/blogs/artech_logo_blog.webp"
import ai_img from "../../../assets/images/blogs/AI_main.webp"



const HomeBlogs = () => {
  return (
    <div className="blog-section">
    <div className="blog-container">
      <h1 className="blog-title">Latest Insights & Trends</h1>
      <p className="blog-description">
        Explore our latest articles on web design, branding, logos, and AI to keep your business ahead of the competition.
      </p>
      <div className="blog-grid">
        <Link to ="https://rafatabian.github.io/artech-design-blog/" className="blog-card">
          <img src={design_img} alt="Web Design Blog" className="blog-image" />
          <div className="blog-content">
            <h3 className="blog-card-title">Web Design Trends</h3>
            <p className="blog-card-text">Stay updated with the latest web design trends to create stunning user experiences.</p>
          </div>
        </Link>

        <Link to="https://rafatabian.github.io/artech-branding-blog/#text" className="blog-card">
          <img src={cola_img} alt="Branding Blog" className="blog-image" />
          <div className="blog-content">
            <h3 className="blog-card-title">Power of Branding</h3>
            <p className="blog-card-text">Learn how branding can impact your business and create a lasting impression.</p>
          </div>
        </Link>

        <Link to="https://rafatabian.github.io/artech-logos-blog/" className="blog-card">
          <img src={lambo_img} alt="Logos Blog" className="blog-image" />
          <div className="blog-content">
            <h3 className="blog-card-title">Logo Design Insights</h3>
            <p className="blog-card-text">Discover the principles of effective logo design and what makes a logo memorable.</p>
          </div>
        </Link>

        <Link to="https://rafatabian.github.io/artech-AI-blog/" className="blog-card">
          <img src={ai_img} alt="AI in Design Blog" className="blog-image" />
          <div className="blog-content">
            <h3 className="blog-card-title">AI in Websites</h3>
            <p className="blog-card-text">Explore how AI is revolutionizing web development and design automation.</p>
          </div>
        </Link>
      </div>
    </div>
  </div>
  )
}

export default HomeBlogs