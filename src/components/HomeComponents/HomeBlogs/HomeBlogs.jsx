import "./HomeBlogs.css"
import { Link } from "react-router-dom"
import design_img from "../../../assets/images/blogs/vlog_title_img.webp"
import cola_img from "../../../assets/images/blogs/artech_cola_blog (1).webp"
import lambo_img from "../../../assets/images/blogs/artech_logo_blog.webp"
import ai_img from "../../../assets/images/blogs/AI_main.webp"
import { useTranslation } from "react-i18next"



const HomeBlogs = () => {
    const [t] = useTranslation("global")

  return (
    <div className="blog-section">
    <div className="blog-container">
      <h1 className="blog-title">{t("insights_title")}</h1>
      <p className="blog-description">{t("insights_desc")}</p>
      <div className="blog-grid">
        <Link to ="https://rafatabian.github.io/artech-design-blog/" className="blog-card">
          <img src={design_img} alt="Web Design Blog" className="blog-image" />
          <div className="blog-content">
            <h2 className="blog-card-title">{t("insights_web_subtitle")}</h2>
            <p className="blog-card-text">{t("insights_web_desc")}</p>
          </div>
        </Link>

        <Link to="https://rafatabian.github.io/artech-branding-blog/#text" className="blog-card">
          <img src={cola_img} alt="Branding Blog" className="blog-image" />
          <div className="blog-content">
            <h2 className="blog-card-title">{t("insights_branding_subtitle")}</h2>
            <p className="blog-card-text">{t("insights_branding_desc")}</p>
          </div>
        </Link>

        <Link to="https://rafatabian.github.io/artech-logos-blog/" className="blog-card">
          <img src={lambo_img} alt="Logos Blog" className="blog-image" />
          <div className="blog-content">
            <h2 className="blog-card-title">{t("insights_logos_subtitle")}</h2>
            <p className="blog-card-text">{t("insights_logos_desc")}</p>
          </div>
        </Link>

        <Link to="https://rafatabian.github.io/artech-AI-blog/" className="blog-card">
          <img src={ai_img} alt="AI in Design Blog" className="blog-image" />
          <div className="blog-content">
            <h2 className="blog-card-title">{t("insights_ai_subtitle")}</h2>
            <p className="blog-card-text">{t("insights_ai_desc")}</p>
          </div>
        </Link>
      </div>
    </div>
  </div>
  )
}

export default HomeBlogs