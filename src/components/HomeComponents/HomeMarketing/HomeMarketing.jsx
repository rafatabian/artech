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
      <h1>Marketing</h1>
      <p>{t("home_marketing_sub1")}</p>
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
      <Link to="/branding" aria-label="discover"><button>{t("home_discover_btn")}</button></Link>
    </div>
  )
}

export default HomeMarketing