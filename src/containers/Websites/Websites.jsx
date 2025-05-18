import "./Websites.css"
import { lazy, useEffect, useState} from "react"
import { Helmet } from "react-helmet-async"
import { useTranslation } from "react-i18next"
import { IoLogoJavascript } from "react-icons/io5"
import { FaReact, FaHtml5, FaCss3, FaNpm, FaNode} from "react-icons/fa"
import { RiTailwindCssFill } from "react-icons/ri"
import { SiVite } from "react-icons/si";
import packages from "../../assets/data/plansData.js"
const ReusablePlans = lazy(() => import("../../components/ReusablePlans/ReusablePlans"))

const HomeWebsites = () => {
    const [matrix, setMatrix] = useState([0, 1, 0, 1, 0, 1, 0, 1, 0, 1, 0, 1, 0, 1, 0, 1, 0, 1])
    const [matrixMargins, setMatrixMargins] = useState([])
    const [t] = useTranslation("global")
    const [techScroll] = useState(0)

// scroll to top
useEffect(() => {
  window.scrollTo(0, 0)
}, [])

// changing matrix number
    useEffect(() => {
        setTimeout(() => {
         setMatrix(matrix.map((number) => number === 1 ? 0 : 1))
        }, 400)
    }, [matrix])


// NEW IMPROVED LOGIC FOR MATRIX
useEffect(() => {
    const randomMargins = () => {
      let margins = [];
      const minDistance = 20;
      const maxIterations = 100; // To prevent infinite loop in case of very narrow conditions

      for (let i = 0; i < 30; i++) {
        let attempts = 0;
        let marginGenerated;

        do {
          marginGenerated = Math.floor(Math.random() * window.innerWidth);
          attempts++;
        } while (
          margins.some(number => Math.abs(marginGenerated - number) < minDistance) &&
          attempts < maxIterations
        );

        if (attempts < maxIterations) {
          margins.push(marginGenerated);
        } else {
          console.warn('could not generate a suitable margin within the attempt limit');
          break;
        }
      }

      setMatrixMargins(margins);
    };

    randomMargins();
  }, []);
  
  // TO DO make tech section move
  //make tech section move
  // useEffect(() => {
  //     const movingSection = document.getElementsByClassName("websites_technology_used_scroll")
  //     if(movingSection){
  //      if(techScroll === 0){
  //       const scrollWidth = movingSection[0].scrollWidth
  //       movingSection[0].scrollTo(scrollWidth, 10000)
  //      }else if(techScroll === 1) {

  //      }else{

  //      }
        
  //     }
  // }, [])

  return (
    <>
    <Helmet>
      <title>Websites</title>
      <meta name="description" content="Fie ca vrei sa-ti creezi un website simplu, sau mai complex noi suntem aici."/>
      <link rel="canonical" href="https://artech-agency.co/#/websites"/>
    </Helmet>
    <div className="homeWebsites_container">
      <div  className="websites_matrix_container">
      <h3 className="websites_titles">WEBSITES</h3>
         {matrixMargins.map((margins, index) => <span style={{marginLeft:`${margins}px`, animationDelay: `${index * 0.2}s`}} key={margins}>{matrix.map((number, index) => <p key={index}>{number}</p>)}</span>
          )} 
      </div>

{/* another section */}          
   
        <div className="websites_white_text_contianer">
        <h1>{t("website_sub1")}</h1>
        <p>{t("website_details1")}</p>
        </div>

        <div className="websites_first_parallax website_computer_parallax">
           <div className="website_ceata"></div> 
           <h3 className="websites_titles">{t("website_title2")}</h3>
        </div>

        <div className="websites_green_text_contianer">
          <h1>{t("website_sub2")}</h1>
          <p>{t("website_details2")}</p>
        </div>

        <div className="websites_first_parallax website_computer_parallax" style={{backgroundImage: `url(${require("../../assets/images/websites/website_circuit.webp")})`}}>
        <div className="website_ceata"></div>
           <h3 className="websites_titles">{t("website_title3")}</h3>
        </div>

        <div className="websites_white_text_contianer">
          <h1>{t("website_sub3")}</h1>
          <p>{t("website_details3")}</p>
        </div>

<div className="websites_technology_used_container">
            <h1>{t("websites_scroll_menu")}</h1>
            <div className="websites_technology_used_scroll_shadows_and_content">
                <div className="websites_technology_used_scroll">
                 <span><IoLogoJavascript /> <p>JavaScript</p></span>
                 <span><FaReact /> <p>React.js</p></span>
                 <span><FaHtml5 /> <p>Html5</p></span>
                 <span><FaCss3/> <p>Css3</p></span>
                 <span><FaNpm /> <p>Npm</p></span>
                 <span><RiTailwindCssFill /> <p>Tailwind</p></span>
                 <span><SiVite /> <p>Vite</p></span>
                 <span><FaNode /> <p>Node.js</p></span>
                </div>
            </div>
         </div>

        <div className="websites_forth_parallax website_computer_parallax" style={{backgroundImage: `url(${require("../../assets/images/websites/websites_servers.webp")})`}}>
        <div className="website_ceata"></div>
           <h3 className="websites_titles">{t("website_title4")}</h3>
        </div>

        
        <div className="websites_white_text_contianer">
        <h1>{t("website_sub4")}</h1>
        <p>{t("website_details4")}</p>  
      </div>

      {packages && <ReusablePlans data={packages.Websites} name="Websites"/>}

      </div>
      </>
  )
}
export default HomeWebsites