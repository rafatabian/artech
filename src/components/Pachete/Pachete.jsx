import "./Pachete.css"
import {  FaRocket, FaStar, FaCircleInfo  } from "react-icons/fa6"
import { ImArrowUpRight2 } from "react-icons/im"
import { FaCheckCircle } from "react-icons/fa"
import { useEffect, useRef, useState } from "react"
import { Link} from "react-router-dom"
import { Helmet } from "react-helmet-async"
import { useTranslation } from "react-i18next"


const Pachete = () => {
  const [planFocus, setPlanFocus] = useState(2)
  const plansRef = useRef()
  const [t] = useTranslation("global")

  // scroll to top and to plans details when redirected from anothe page
useEffect(() => {
  const hash = window.location.hash
  const hashParts = hash.split("/")
  const planSelected = hashParts[hashParts.length - 1]
  if(planSelected !== "plans"){
    setPlanFocus(Number(planSelected)) 
    plansRef.current.scrollIntoView()
  }else{
  window.scrollTo(0, 0)
  }
}, [])


// auto scroll to plans details when clicking btns inside of the component
const handlePlanClick = (e) => {
  setPlanFocus(e)
  if(plansRef.current){
  plansRef.current.scrollIntoView({
     behavior: "smooth"
     })
  }}


  return (
    <>
     <Helmet>
      <title>Pachete</title>
      <meta name="description" content="Alege pachetul potrivit pentru nevoile tale, fie ca vrei ceva simplu sau ceva mai complex."/>
      <link rel="canonical" href="https://artech-agency.co/#/plans"/>
    </Helmet>
    
    <div className="plans_container">
      <h1>{t("navbar_pachete")}</h1>
      <div className="plans_presentation">
      <div className={`plans_first_plan ${planFocus === 0 ? "plans_focus_plan" : null}`} onClick={() => handlePlanClick(0)}>
         <span>STARTER <FaRocket /></span>
         <span className="homePachetete_text"><FaCheckCircle />{t("pachete_starter1")}</span>
         <span className="homePachetete_text"><FaCheckCircle />{t("pachete_starter2")}</span>
         <span className="homePachetete_text"><FaCheckCircle />{t("pachete_starter3")}</span>
         <span className="homePachetete_text"><FaCheckCircle />{t("pachete_starter4")}</span>
         <button className="homePachete_alege_btn" onClick={() => setPlanFocus(0)}>{t("pachete_choose_btn")}</button>
        </div>
        <div className={`plans_third_plan ${planFocus === 2 ? "plans_focus_plan" : null}`} onClick={() => handlePlanClick(2)}>
         <span>STANDARD <ImArrowUpRight2/></span>
         <span className="homePachetete_text"><FaCheckCircle />{t("pachete_standard1")}</span>
         <span className="homePachetete_text"><FaCheckCircle />{t("pachete_standard2")}</span>
         <span className="homePachetete_text"><FaCheckCircle />{t("pachete_standard3")}</span>
         <span className="homePachetete_text"><FaCheckCircle />{t("pachete_standard4")}</span>
         <span className="homePachetete_text"><FaCheckCircle />{t("pachete_standard5")}</span>
         <button className="homePachete_alege_btn" onClick={() => setPlanFocus(2)}>{t("pachete_choose_btn")}</button>
        </div>
        <div className={`plans_second_plan ${planFocus === 1 ? "plans_focus_plan" : null}`} onClick={() => handlePlanClick(1)}>
         <span>PRO <FaStar /></span>
         <span className="homePachetete_text"><FaCheckCircle />{t("pachete_pro1")}</span>
         <span className="homePachetete_text"><FaCheckCircle />{t("pachete_pro2")}</span>
         <span className="homePachetete_text"><FaCheckCircle />{t("pachete_pro3")}</span>
         <span className="homePachetete_text"><FaCheckCircle />{t("pachete_pro4")}</span>
         <span className="homePachetete_text"><FaCheckCircle />{t("pachete_pro5")}</span>
         <button className="homePachete_alege_btn" onClick={() => setPlanFocus(1)}>{t("pachete_choose_btn")}</button>
        </div>
        </div>
        {/* constent under plans */}  
        <div className="plans_content" ref={plansRef}>
          {planFocus === 0 ?
         <div className="plans_content_starter">
          <h1>STARTER</h1>
          <p>{t("pachete_page_starter_sub")}</p>
          <div><span><FaCheckCircle />{t("pachete_page_starter_title1")}</span> <p>{t("pachete_page_starter_p1")}</p></div>
          <div><span><FaCheckCircle />{t("pachete_page_starter_title2")}</span> <p>{t("pachete_page_starter_p2")}</p></div>
          <div><span><FaCheckCircle />{t("pachete_page_starter_title3")}</span> <p>{t("pachete_page_starter_p3")}</p></div>
         </div> 
         : null}

         {planFocus === 2 ? 
         <div className="plans_content_standard" >
          <h1>STANDARD</h1>
          <p>{t("pachete_page_standard_sub")}</p>
          <div><span><FaCheckCircle />{t("pachete_page_standard_title1")}</span><p>{t("pachete_page_standard_p1")}</p></div>
          <div><span><FaCheckCircle />{t("pachete_page_standard_title2")}</span><p>{t("pachete_page_standard_p2")}</p></div>
          <div><span><FaCheckCircle />{t("pachete_page_standard_title3")}</span><p>{t("pachete_page_standard_p3")}</p></div>
          <div><span><FaCheckCircle />{t("pachete_page_standard_title4")}</span><p>{t("pachete_page_standard_p4")}</p></div>
          <div><span><FaCheckCircle />{t("pachete_page_standard_title5")}</span><p>{t("pachete_page_standard_p5")}</p></div>
         </div>
         : null}

         {planFocus === 1 ? 
         <div className="plans_content_pro">
          <h1>PRO</h1>
          <p>{t("pachete_page_pro_sub")}</p>
          <div><span><FaCheckCircle />{t("pachete_page_pro_title1")}</span><p>{t("pachete_page_pro_p1")}</p></div>
          <div><span><FaCheckCircle />{t("pachete_page_pro_title2")}</span><p>{t("pachete_page_pro_p2")}</p></div>
          <div><span><FaCheckCircle />{t("pachete_page_pro_title3")}</span><p>{t("pachete_page_pro_p3")}</p></div>
          <div><span><FaCheckCircle />{t("pachete_page_pro_title4")}</span><p>{t("pachete_page_pro_p4")}</p></div>
          <div><span><FaCheckCircle />{t("pachete_page_pro_title5")}</span><p>{t("pachete_page_pro_p5")}</p></div>

         </div>
         : null}

         <div className="plans_button_container">
            <Link to={`/contact/#/${planFocus === 0 ? "starter" : planFocus === 1 ? "pro" : "standard"}`}> {t("pachete_page_button")} {`${planFocus === 0 ? "STARTER" : planFocus === 1 ? "PRO" : "STANDARD"}`}</Link>
         </div>
        </div>

        <div className="plans_final_text">
          <span>We believe that every project is unique and deserves a tailored approach. That's why our pricing is customized to meet the specific needs and requirements of each client. The final cost depends on the complexity of the project, the time needed for completion, and the scope of work involved. We encourage you to contact us to discuss your vision, so we can provide a personalized quote that reflects exactly what you're looking for. We look forward to working together and bringing your ideas to life.
          </span>
          <div className="plans_button_container">
          <Link to="/contact">{t("branding_contact")}</Link>  
          </div>
            
       </div>

    </div>
    </>
  )
}

export default Pachete