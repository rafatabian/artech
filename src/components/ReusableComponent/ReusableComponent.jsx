import "./ReusableComponent.css"
import  businessCardOne  from "../../assets/images/artech_visit_cart_1.webp"
import  businessCardTwo  from "../../assets/images/artech_visit_card_2.webp"
import { Link } from "react-router-dom"


const HomeBranding = ({props}) => {

  return(
    <div className="braning_new">
    <div className="branding_third_parallax" style={{backgroundImage: `url(${props.firstImage})`}}>          
        <div className="ceata"></div>
        <h3 className="branding_titles">{props.titles[0]}</h3>
        <div className="homeBranding_business_card">
            <div className="homeBranding_side front" style={{ backgroundImage: `url(${businessCardOne})` }}></div>
            <div className="homeBranding_side back" style={{ backgroundImage: `url(${businessCardTwo})` }}></div>
        </div>  
    </div> 
           
   
        <div className="branding_white_text_contianer">
        <h1>{props.headings[0]}</h1>
        <p>{props.firstText}</p>
        </div>

        <div className="branding_second_parallax" style={{backgroundImage: `url(${props.secondImage})`}}>
           <div className="ceata"></div> 
           <h3 className="branding_titles">{props.titles[1]}</h3>
        </div>

        <div className="branding_green_text_contianer">
          <h1>{props.headings[1]}</h1>
          <p>{props.secondText}</p>
        </div>

        <div className="branding_third_parallax" style={{backgroundImage: `url(${props.thirdImage})`}}>
        <div className="ceata"></div>
           <h3 className="branding_titles">{props.titles[2]}</h3>
        </div>

        <div className="branding_white_text_contianer">
        <h1>{props.headings[2]}</h1>
        <p>{props.thirdText}</p>
      </div>

        <div className="branding_forth_parallax" style={{backgroundImage: `url(${props.forthImage})`}}>
        <div className="ceata"></div>
           <h3 className="branding_titles">{props.titles[3]}</h3>
        </div>

        
        <div className="branding_green_text_contianer">
        <h1>{props.headings[3]}</h1>
        <p>{props.forthText}</p>        
        </div>

        <Link to="/contact" className="branding_button" aria-label="contact">CERE OFERTA</Link>

    </div>
  )

}

export default HomeBranding