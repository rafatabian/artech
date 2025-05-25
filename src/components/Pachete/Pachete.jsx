import "./Pachete.css"
import { useEffect, useRef } from "react"
import { Link} from "react-router-dom"
import { Helmet } from "react-helmet-async"
import { useTranslation } from "react-i18next"


const Pachete = () => {
  const plansRef = useRef()
  const [t] = useTranslation("global")

  // scroll to top and to plans details when redirected from another page
useEffect(() => {
  const hash = window.location.hash
  const hashParts = hash.split("/")
  const planSelected = hashParts[hashParts.length - 1]
  if(planSelected !== "plans"){
    plansRef.current.scrollIntoView()
  }else{
  window.scrollTo(0, 0)
  }
}, [])




  return (
    <>
     <Helmet>
      <title>Pachete</title>
      <meta name="description" content="Alege pachetul potrivit pentru nevoile tale, fie ca vrei ceva simplu sau ceva mai complex."/>
      <link rel="canonical" href="https://artech-agency.co/#/plans"/>
    </Helmet>
    
    <div className="plans_container">
      <h1>{t("navbar_pachete")}</h1>
        {/* constent under plans */}  
        <div className="plans_content" ref={plansRef}>
         <div className="plans_content_normal">
          <h1>STARTER</h1>
          <p>{t("pachete_page_starter_sub")}</p>
          <div><span>{t("pachete_page_starter_title1")}</span> <p>{t("pachete_page_starter_p1")}</p></div>
          <div><span>{t("pachete_page_starter_title2")}</span> <p>{t("pachete_page_starter_p2")}</p></div>
          <div><span>{t("pachete_page_starter_title3")}</span> <p>{t("pachete_page_starter_p3")}</p></div>
          <div className="plans_button_container">
            <Link to="/contact"> {t("pachete_page_button")} STARTER </Link>
          </div>
         </div> 

         <div className="plans_content_normal" >
          <h1>STANDARD</h1>
          <p>{t("pachete_page_standard_sub")}</p>
          <div><span>{t("pachete_page_standard_title1")}</span><p>{t("pachete_page_standard_p1")}</p></div>
          <div><span>{t("pachete_page_standard_title2")}</span><p>{t("pachete_page_standard_p2")}</p></div>
          <div><span>{t("pachete_page_standard_title3")}</span><p>{t("pachete_page_standard_p3")}</p></div>
          <div><span>{t("pachete_page_standard_title4")}</span><p>{t("pachete_page_standard_p4")}</p></div>
          <div><span>{t("pachete_page_standard_title5")}</span><p>{t("pachete_page_standard_p5")}</p></div>
          <div className="plans_button_container">
            <Link to="/contact"> {t("pachete_page_button")} STANDARD</Link>
            </div>
         </div>

         <div className="plans_content_normal">
          <h1>PRO</h1>
          <p>{t("pachete_page_pro_sub")}</p>
          <div><span>{t("pachete_page_pro_title1")}</span><p>{t("pachete_page_pro_p1")}</p></div>
          <div><span>{t("pachete_page_pro_title2")}</span><p>{t("pachete_page_pro_p2")}</p></div>
          <div><span>{t("pachete_page_pro_title3")}</span><p>{t("pachete_page_pro_p3")}</p></div>
          <div><span>{t("pachete_page_pro_title4")}</span><p>{t("pachete_page_pro_p4")}</p></div>
          <div><span>{t("pachete_page_pro_title5")}</span><p>{t("pachete_page_pro_p5")}</p></div>
          <div className="plans_button_container">
            <Link to="/contact"> {t("pachete_page_button")} PRO</Link>
          </div>
         </div>

        </div>

        <div className="plans_final_text">
          <span>{t("pachete_final_text")}</span>
    
         <div className="plans_button_last_container">
            <Link to="/contact">{t("branding_contact")}</Link>  
          </div>
            
       </div>

    </div>
    </>
  )
}

export default Pachete



