import "./Home.css"
import montain from "../../assets/images/artech_montain-Photoroom.png"
import stars from "../../assets/images/artech_stars.jpg"
import { ParallaxProvider, ParallaxBanner } from "react-scroll-parallax"
import { Parallax } from 'react-scroll-parallax';
import teamCollaboration from "../../assets/images/undraw_Team_collaboration.webp"
import { MdComputer, MdDesignServices } from "react-icons/md"
import { BsFileBarGraphFill } from "react-icons/bs"

const Home = () => {

//for parallax
const sky = {
  children: (
    <div className="parallax_sky_clone"></div>
  )
};
const text = {
  translateY: [0, 30],
  scale: [1, 1.05, 'easeOutCubic'],
  shouldAlwaysCompleteAnimation: true,
  expanded: false,
  children: (
    <div className="parallax_text">
      <h1>
        ARTECH
      </h1>
    </div>
  )
}
const desertParallax = {
  image: montain,
translateY: [0, 15],
scale: [1, 1.15, 'easeOutCubic'],
shouldAlwaysCompleteAnimation: true,
}
const secondParallaxText = {
  scale: [1, 1.1, 'easeOutCubic'],
  shouldAlwaysCompleteAnimation: true,
  expanded: false,
  children: (
    <div className="secondParallax_text">
      <h1>
      Transforma-ti afacerea cu servicii Business de Top
      </h1>
      <p>Ești pregătit să duci afacerea ta la următorul nivel? Într-o lume în continuă schimbare, primul impact contează mai mult ca niciodată. Noi suntem aici să îți oferim servicii complete care să te ajute să ieși în evidență și să atragi clienții pe care îi meriți</p>
    </div>
  )
 }
  return (
    <div className="home_container">
      <ParallaxProvider>
      <ParallaxBanner
      className="parallax"
      layers={[sky, desertParallax, text]}
      ></ParallaxBanner>
      </ParallaxProvider>

      <div className="home_main">
        <h1>DESPRE NOI</h1>
        <p>Suntem o echipă de profesioniști în IT, specializați în dezvoltare web, design și marketing. Oferim servicii de calitate pentru a ajuta companiile să își atingă obiectivele online și să își realizeze potențialul maxim</p>

        <div className="home_plans_description">
          <div>
            <MdComputer />
            <h2>WEBSITEURI, SEO, PERFORMANTA WEB</h2>
            <p>Creem site-uri web de inalta performanta unde orice idee poate deveni realitate</p>
          </div>
          <div>
            <MdDesignServices />
            <h2>LOGOURI, WEB DESIGN, ceva(etc)</h2>
            <p>Combinam cele mai bune idei pentru a face ca logo-ul afacerii tale sa iasa in evidenta</p>
          </div>
          <div>
            <BsFileBarGraphFill />
            <h2>BRANDING, PROMOVARE BUSINESS</h2>
            <p>Pentru a creste vanzarile, aducem oanemii mai aproape de afacerea ta</p>
          </div>
         
        </div>

         <div className="home_main_content">
           <div className="home_main_content_title_and_text">
            <h1>Transforma-ti afacerea cu servicii de Business de Top</h1>
            <h2>Ești pregătit să duci afacerea ta la următorul nivel? Într-o lume în continuă schimbare, primul impact contează mai mult ca niciodată. Noi suntem aici să îți oferim servicii complete care să te ajute să ieși în evidență și să atragi clienții pe care îi meriți</h2>
           </div>
           <div className="home_main_content_image">
              <img src={teamCollaboration} alt="team image" />
           </div>
         </div>
      </div>

      <div className="home_about_us">
           
      </div>
 </div>
  )}



export default Home