import "./HomeBlogs.css"
import { Link } from "react-router-dom"
import { motion } from "framer-motion"
import design_img from "../../../assets/images/blogs/vlog_title_img.webp"
import cola_img from "../../../assets/images/blogs/artech_cola_blog (1).webp"
import lambo_img from "../../../assets/images/blogs/artech_logo_blog.webp"
import ai_img from "../../../assets/images/blogs/AI_main.webp"
import { useTranslation } from "react-i18next"



const HomeBlogs = () => {
    const [t] = useTranslation("global")

  return (
    <div className="blog_conteiner_background">
      <motion.div 
      className="blog-container"
  initial="hidden"
  whileInView="visible"
  viewport={{ once: true }}
  variants={{
    visible: {
      transition: {
        staggerChildren: 0.2,
      },
    },
  }}
>
      <motion.h1
              className="blog-title"
              variants={{
                hidden: { opacity: 0, y: 20 },
                visible: { opacity: 1, y: 0 },
              }}
              transition={{ duration: 0.5 }}
            >Expert Tips & Business Insights</motion.h1>
      <motion.p
             className="blog-description"
              variants={{
                hidden: { opacity: 0, y: 20 },
                visible: { opacity: 1, y: 0 },
              }}
              transition={{ duration: 0.5 }}
            >Explore our latest articles</motion.p>

      <motion.div
              className="blog-grid"
              variants={{
                hidden: { opacity: 0, y: 20 },
                visible: { opacity: 1, y: 0 },
              }}
              transition={{ duration: 0.5 }}
            >
        <Link to ="https://rafatabian.github.io/artech-design-blog/" className="blog-card">
         <h2 className="blog-card-title">{t("insights_web_subtitle")}</h2>
          <img src={design_img} alt="Web Design Blog" className="blog-image" />
        </Link>

        <Link to="https://rafatabian.github.io/artech-branding-blog/#text" className="blog-card">
            <h2 className="blog-card-title">{t("insights_branding_subtitle")}</h2>
          <img src={cola_img} alt="Branding Blog" className="blog-image" />
        </Link>

        <Link to="https://rafatabian.github.io/artech-logos-blog/" className="blog-card">
            <h2 className="blog-card-title">{t("insights_logos_subtitle")}</h2>
          <img src={lambo_img} alt="Logos Blog" className="blog-image" />
        </Link>

        <Link to="https://rafatabian.github.io/artech-AI-blog/" className="blog-card">
            <h2 className="blog-card-title">{t("insights_ai_subtitle")}</h2>
          <img src={ai_img} alt="AI in Design Blog" className="blog-image" />
        </Link>
      </motion.div>
    </motion.div>
  </div>
  )
}

export default HomeBlogs