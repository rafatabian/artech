import "./Home.css"
import "../../index.css"
import homeVideo from "../../assets/videos/artech_home_video.webm"
import { Link } from "react-router-dom";
import logo1 from "../../assets/images/logos/logo1.webp"
import logo2 from "../../assets/images/logos/logo2.webp"
import logo3 from "../../assets/images/logos/logo3.jpg"
import logo4 from "../../assets/images/logos/logo4.jpg"
import { lazy } from "react";
const WebsitesSection = lazy(()=> import("../HomeWebsites/HomeWebsites.jsx"))


const Home = () => {


  return ( 
    <div className="home_container">
      {/* new home section */}
      <div className="home_new_container"> 
        <div className="home_new_presentation">
            <div className="home_moving_background"></div>
            <div className="home_new_title">
              <h1>ARTECH</h1>
              <h1>REDEFINED</h1>
           </div>
          
          
          <p>Echipă de profesioniști în IT, specializați în dezvoltare web, design și marketing. Oferim servicii de calitate pentru a ajuta companiile să își atingă obiectivele online și să își realizeze potențialul maxim</p>
          <div className="home_new_btns_container">
            {/* add link to section */}
              <Link>Pachete</Link>
              <Link to="">Descopera</Link>
          </div>
        </div>
        
        <div className="home_video">
          <video src={homeVideo} autoPlay loop muted />
        </div>
         
      </div>
{/* branding */}
      <div className="home_logos">
          <h1>Branding</h1>
          <p>Logouri, Carti de vizita, Design si Culori.</p>
          <p>Fiecare element vizual al afacerii tale conteaza!</p>
          <div>
            <img src={logo1} alt="logo" />
            <img src={logo2} alt="logo" />
            <img src={logo3} alt="logo" />
            <img src={logo4} alt="logo" />
          </div>
          <Link to="/branding" aria-label="descopera"><button>Descopera</button></Link>
      </div>

{/* websites */}
      <div className="home_websites">
        <h1>Website</h1>
         <p>Website-ul aduce cu 55% mai multi clienti unui business.</p>
         <p>75% dintre clienti judeca credibilitatea unei firme dupa aspectul website-ului acesteia.</p>

         <div className="home_websites_interactions">
         <WebsitesSection />

         </div>
      </div>
 </div>
  )}



export default Home