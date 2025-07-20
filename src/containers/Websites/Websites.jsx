import "./Websites.css"
import { lazy, useEffect} from "react"
import { Helmet } from "react-helmet-async"
import packages from "../../assets/data/plansData.js"
//images
import img1 from "../../assets/images/moving_section_icons/websites/img1.png"
import img2 from "../../assets/images/moving_section_icons/websites/img2.png"
import img3 from "../../assets/images/moving_section_icons/websites/img3.png"
import img4 from "../../assets/images/moving_section_icons/websites/img4.png"
import img5 from "../../assets/images/moving_section_icons/websites/img5.png"
import img13 from "../../assets/images/moving_section_icons/websites/img13.png"
import img7 from "../../assets/images/moving_section_icons/websites/img7.png"
import img8 from "../../assets/images/moving_section_icons/websites/img8.png"
import img9 from "../../assets/images/moving_section_icons/websites/img9.png"
import img10 from "../../assets/images/moving_section_icons/websites/img10.png"
import img11 from "../../assets/images/moving_section_icons/websites/img11.png"
import img12 from "../../assets/images/moving_section_icons/websites/img12.png"

//components
import WebIntro from "../../components/WebComponents/WebIntro/WebIntro.jsx"
import WebIssues from "../../components/WebComponents/WebIssues/WebIssues.jsx" 
import WebSolutions from "../../components/WebComponents/WebSolutions/WebSolutions.jsx"
import WebSteps from "../../components/WebComponents/WebSteps/WebSteps.jsx"
import WebOurWork from "../../components/WebComponents/WebOurWork/WebOurWork.jsx"
import WebMotivational from "../../components/WebComponents/WebMotivational/WebMotivational.jsx"

const ReusablePlans = lazy(() => import("../../components/ReusablePlans/ReusablePlans"))
const MovingSection = lazy(() => import("../../components/MovingSection/MovingSection.jsx"))

const HomeWebsites = () => {

// scroll to top
useEffect(() => {
  window.scrollTo(0, 0)
}, [])
  
const props = {
    firstSet: [
        { image: img1},
        { image: img2},
        { image: img3},
        { image: img4},
        { image: img5},
        { image: img13},
        
    ],

    secondSet: [
        { image: img7},
        { image: img8},
        { image: img9},
        { image: img10},
        { image: img11},
        { image: img12}
    ]
}

  return (
    <>
    <Helmet>
      <title>Websites</title>
      <meta name="description" content="Fie ca vrei sa-ti creezi un website simplu, sau mai complex noi suntem aici."/>
      <link rel="canonical" href="https://artech-agency.co/#/websites"/>
    </Helmet>
    <div className="web_container">
      {/* first section */}
     <WebIntro />
      {/* second section */}
      <WebIssues />
      {/* thrid section */}
      <WebSolutions />
      {/* forth section */}
      <WebSteps /> 
      {/* fifth section */}
      <WebOurWork />
      {/* sisth section */}
{packages && <ReusablePlans data={packages.Websites} name="Websites"/>}
      {/* seventy section */}
      <MovingSection props={props}/>
      {/* last section */}
       <WebMotivational />

    
      </div>

      
      </>
  )
}
export default HomeWebsites