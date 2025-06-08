import "./Websites.css"
import { lazy, useEffect, useState} from "react"
import { Helmet } from "react-helmet-async"
import { useTranslation } from "react-i18next"
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


const ReusablePlans = lazy(() => import("../../components/ReusablePlans/ReusablePlans"))
const MovingSection = lazy(() => import("../../components/MovingSection/MovingSection.jsx"))

const HomeWebsites = () => {
    const [matrix, setMatrix] = useState([0, 1, 0, 1, 0, 1, 0, 1, 0, 1, 0, 1, 0, 1, 0, 1, 0, 1])
    const [matrixMargins, setMatrixMargins] = useState([])
    const [t] = useTranslation("global")

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
          marginGenerated = Math.floor(Math.random() * (window.innerWidth > 1500 ? 1500 : window.innerWidth ));
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
  
  const moving_section_translation = t("moving_section_title_v2")
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
    <div className="homeWebsites_container">
      <div  className="websites_matrix_container">
      <h3 className="websites_titles">" Most websites look good... Ours help your business grow "</h3>
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

        <div className="websites_forth_parallax website_computer_parallax" style={{backgroundImage: `url(${require("../../assets/images/websites/websites_servers.webp")})`}}>
        <div className="website_ceata"></div>
           <h3 className="websites_titles">{t("website_title4")}</h3>
        </div>

        
        <div className="websites_white_text_contianer">
        <h1>{t("website_sub4")}</h1>
        <p>{t("website_details4")}</p>  
      </div>

      {packages && <ReusablePlans data={packages.Websites} name="Websites"/>}
      
      <MovingSection props={props} translation={moving_section_translation}/>
      </div>
      </>
  )
}
export default HomeWebsites