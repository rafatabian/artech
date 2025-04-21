import "./HomeMarketing.css"
import { Link } from "react-router-dom"
import marketingPeople from "../../../assets/images/marketing/marketing_people.webp"
import marketingCamera from "../../../assets/images/marketing/marketing_camera.webp"
import marketingClick from "../../../assets/images/marketing/marketing_click.webp"
import marketingSocials from "../../../assets/images/marketing/marketing_socials.webp"
import { useTranslation } from "react-i18next"




const HomeMarketing = () => {
  const [t] = useTranslation("global")


  return (
    <div className="homeMarketing_conatiner">
      <h1>{t("home_marketing_sub1")}</h1>
      <p>{t("home_marketing_sub2")}</p>
      <div className="homeMarketing_images_and_text">
        <div>
          <h2>{t("home_marketing_img1")}</h2>
          <img src={marketingPeople} alt="marketing" />  
        </div>
        <div>
            <h2>{t("home_marketing_img2")}</h2>
            <img src={marketingSocials} alt="marketing" />
        </div>
        <div>
            <h2>{t("home_marketing_img3")}</h2>
            <img src={marketingCamera} alt="marketing" />
        </div>
        <div>
            <h2>{t("home_marketing_img4")}</h2>
            <img src={marketingClick} alt="marketing" />  
        </div>
      </div>
      <div className="home_marketing_buttons_container">
            <Link to="/marketing" className="marketing_button">{t("home_discover_btn")}</Link>
            <Link to="/contact" className="marketing_button">{t("home_get_in_touch")}</Link>
        </div>
    </div>
  )
}

export default HomeMarketing