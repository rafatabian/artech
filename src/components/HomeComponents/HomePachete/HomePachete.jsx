import "./HomePachete.css"
import { Link } from "react-router-dom"
import { FaRocket, FaStar } from "react-icons/fa6"
import { ImArrowUpRight2 } from "react-icons/im"
import { FaCheckCircle } from "react-icons/fa"
import { useTranslation } from "react-i18next"

const HomePachete = () => {
  const [t] = useTranslation("global")

  return (
    <div className="homePachete_container">
      <h1>{t("home_intro_first_btn")}</h1>
      <div className="homePachete_text">
         {/* <p>Oferim soluții flexibile și profesionale pentru dezvoltarea afacerii tale. Fiecare pachet poate fi personalizat, combinat sau achiziționat ca abonament pentru suport constant și actualizări. Alege ce funcționează cel mai bine pentru tine!</p> */}
      </div>
      <div className="homePachete_cards">
        <div className="homePachete_first_card">
         <span>STARTER <FaRocket /></span>
         <span className="homePachetete_text"><FaCheckCircle />{t("pachete_starter1")}</span>
         <span className="homePachetete_text"><FaCheckCircle />{t("pachete_starter2")}</span>
         <span className="homePachetete_text"><FaCheckCircle />{t("pachete_starter3")}</span>
         <span className="homePachetete_text"><FaCheckCircle />{t("pachete_starter4")}</span>
         <Link to="/plans/#/0" className="homePachete_alege_btn">{t("pachete_choose_btn")}</Link>
        </div>
        <div className="homePachete_second_card">
         <span>PRO <FaStar /></span>
         <span className="homePachetete_text"><FaCheckCircle />{t("pachete_pro1")}</span>
         <span className="homePachetete_text"><FaCheckCircle />{t("pachete_pro2")}</span>
         <span className="homePachetete_text"><FaCheckCircle />{t("pachete_pro3")}</span>
         <span className="homePachetete_text"><FaCheckCircle />{t("pachete_pro4")}</span>
         <span className="homePachetete_text"><FaCheckCircle />{t("pachete_pro5")}</span>
         <Link to="/plans/#/1" className="homePachete_alege_btn">{t("pachete_choose_btn")}</Link>
        </div>
        <div className="homePachete_third_card">
         <span>STANDARD <ImArrowUpRight2/></span>
         <span className="homePachetete_text"><FaCheckCircle />{t("pachete_standard1")}</span>
         <span className="homePachetete_text"><FaCheckCircle />{t("pachete_standard2")}</span>
         <span className="homePachetete_text"><FaCheckCircle />{t("pachete_standard3")}</span>
         <span className="homePachetete_text"><FaCheckCircle />{t("pachete_standard4")}</span>
         <span className="homePachetete_text"><FaCheckCircle />{t("pachete_standard5")}</span>
         <Link to="/plans/#/2" className="homePachete_alege_btn">{t("pachete_choose_btn")}</Link>
        </div>
    </div>
    <Link to="/plans" aria-label="pachete"><button>{t("home_discover_btn")}</button></Link>  
    </div>
  )
}

export default HomePachete