import "./ReusableComponent.css"
import  businessCardOne  from "../../assets/images/artech_visit_card_1.webp"
import  businessCardTwo  from "../../assets/images/artech_visit_card_2.webp"
import { useLocation } from "react-router-dom"
import { useTranslation } from "react-i18next"

const HomeBranding = ({props}) => {
  const location = useLocation()
  const [t] = useTranslation("global")

  return(
    <div className="braning_new">
    <div className="branding_third_parallax" style={{backgroundImage: `url(${props.firstImage})`}}>          
        <div className="ceata"></div>
        <h3 className="branding_titles">{props.titles[0]}</h3>
        {location.pathname === "/branding" ?
        <div className="homeBranding_business_card">
            <div className="homeBranding_side front" style={{ backgroundImage: `url(${businessCardOne})` }}></div>
            <div className="homeBranding_side back" style={{ backgroundImage: `url(${businessCardTwo})` }}></div>
        </div> : null}
    </div> 
           
   
        <div className="branding_white_text_contianer">
        <h1>{props.headings[0]}</h1>
        <p className={location.pathname === "/marketing" ? "branding_marketing_p_color" : "branding_branding_p_color"}>{props.firstText}</p>
        </div>

        <div className={`${location.pathname === "/branding" ? "branding_second_parallax" : "branding_third_parallax"}`} style={{backgroundImage: `url(${props.secondImage})`}}>
           <div className="ceata"></div> 
           <h3 className="branding_titles">{props.titles[1]}</h3>
        </div>

        <div className="branding_green_text_contianer">
          <h1>{props.headings[1]}</h1>
          <p className={location.pathname === "/marketing" ? "branding_marketing_p_color" : "branding_branding_p_color"}>{location.pathname === "/branding" ? props.secondText : props.secondText[0]}</p>
          {location.pathname === "/marketing" &&
          <div className="branding_services">
            <h3>{t("marketing_details_services")}</h3>
            <ul>
            {
            props.secondText[1].split(",").map((item, index) => (
              <li key={index}>
                <p>-{item}</p>
              </li>
            ))
          }
          </ul>
          </div>
          }
        </div>

        <div className="branding_third_parallax" style={{backgroundImage: `url(${props.thirdImage})`}}>
        <div className="ceata"></div>
           <h3 className="branding_titles">{props.titles[2]}</h3>
        </div>

        <div className="branding_white_text_contianer">
        <h1>{props.headings[2]}</h1>
        <p className={location.pathname === "/marketing" ? "branding_marketing_p_color" : "branding_branding_p_color"}>{location.pathname === "/branding" ? props.secondText : props.secondText[0]}</p>
         {location.pathname === "/marketing" &&
          <div className="branding_services">
            <h3>{t("marketing_details_services")}</h3>
            <ul>
        {props.thirdText[1].split(",").map((item, index) => (
            <li key={index}>
              <p>-{item}</p>
            </li>
        ))} 
        </ul>
       </div> 
     }
      </div>

        <div className={`${location.pathname === "/branding" ? "branding_forth_parallax" : "branding_third_parallax"}`} style={{backgroundImage: `url(${props.forthImage})`}}>
        <div className="ceata"></div>
           <h3 className="branding_titles">{props.titles[3]}</h3>
        </div>
         
        <div className="branding_green_text_contianer">
         
        <h1>{props.headings[3]}</h1>
        <p  className={location.pathname === "/marketing" ? "branding_marketing_p_color" : "branding_branding_p_color"}>{location.pathname === "/branding" ? props.secondText : props.secondText[0]}</p>        
         {location.pathname === "/marketing" &&
        <div className="branding_services">
          <h3>{t("marketing_details_services")}</h3>
          <ul>
        {props.forthText[1].split(",").map((item, index) => (
            <li key={index}>
              <p>-{item}</p>
            </li>
        ))}
        </ul>
         </div>
        }
        </div>
      
    </div>
  )

}

export default HomeBranding