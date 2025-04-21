import "./Websites.css"
import { useEffect, useState, useRef} from "react"
import { Link } from "react-router-dom"
import { Helmet } from "react-helmet-async"
import { useTranslation } from "react-i18next"
import { IoLogoJavascript } from "react-icons/io5"
import { FaReact, FaHtml5, FaCss3, FaNpm, FaNode} from "react-icons/fa"
import { RiTailwindCssFill } from "react-icons/ri"
import { SiVite } from "react-icons/si";

const HomeWebsites = () => {
    const [matrix, setMatrix] = useState([0, 1, 0, 1, 0, 1, 0, 1, 0, 1, 0, 1, 0, 1, 0, 1, 0, 1])
    const [matrixMargins, setMatrixMargins] = useState([])
    const [t] = useTranslation("global")
    const scrollDirectionRef = useRef(1);

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
  
  // making tech section move
  useEffect(() => {
    const techSection = document.querySelector('.websites_technology_used_scroll');
    if (!techSection) return;
  
    const speed = 0.5;
    const buffer = 2;
    let animationFrameId;
  
    const startScroll = () => {
      const maxScroll = techSection.scrollWidth - techSection.clientWidth;
  
      const animateScroll = () => {
        techSection.scrollLeft += scrollDirectionRef.current * speed;
  
        if (techSection.scrollLeft >= maxScroll - buffer) {
          scrollDirectionRef.current = -1;
        } else if (techSection.scrollLeft <= buffer) {
          scrollDirectionRef.current = 1;
        }
  
        animationFrameId = requestAnimationFrame(animateScroll);
      };
  
      animationFrameId = requestAnimationFrame(animateScroll);
    };
  
    const delay = setTimeout(startScroll, 100);
  
    return () => {
      cancelAnimationFrame(animationFrameId);
      clearTimeout(delay);
    };
  }, []);
  




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
         {matrixMargins.map((margins, index) => <span style={{marginLeft:`${margins}px`, animationDelay: `${index * 0.2}s`}} key={margins}>{matrix.map((number) => <p>{number}</p>)}</span>
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
            <h1>We use the latest technologies to provide the best services</h1>
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

        
        <div className="websites_green_text_contianer">
        <h1>{t("website_sub4")}</h1>
        <p>{t("website_details4")}</p>  
      </div>


        <div className="websites_button_container">
        <Link to="/contact" className="websites_button" aria-label="contact">{t("branding_contact")}</Link>
        </div>

      </div>
      </>
  )
}
export default HomeWebsites