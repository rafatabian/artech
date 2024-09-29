import "./Home.css"
import "../../index.css"
import homeVideo from "../../assets/videos/artech_home_video.mp4"
import { Link } from "react-router-dom";
import { lazy, useEffect } from "react";
import { Helmet } from "react-helmet-async";
const HomeWebsites = lazy(()=> import("../../components/HomeComponents/HomeWebsites/HomeWebsites.jsx"))
const HomeMarketing = lazy(()=> import("../../components/HomeComponents/HomeMarketing/HomeMarketing.jsx"))
const HomeBranding = lazy(() => import("../../components/HomeComponents/HomeLogos/HomeLogos.jsx"))
const HomePachete = lazy(() => import("../../components/HomeComponents/HomePachete/HomePachete.jsx"))


const Home = () => {

// scroll to top
useEffect(() => {
    window.scrollTo(0, 0)
}, [])


  return ( 
    <>
    <Helmet>
      <title>Home</title>
      <meta name="description" content="Aduti afacerea la urmatorul nivel cu Artech, fie ca vine vorba de pagini web, marketing, branding sau logouri, noi suntem cheia. "/>
      <link rel="canonical" href="https://artech-agency.co/"/>
    </Helmet>
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
          <video src={homeVideo} autoPlay loop muted playsInline  controlsList="nofullscreen" preload="auto"/>
        </div>
         
      </div>
      
{/* logos */}
      <HomeBranding/>

{/* websites */}
      <div className="home_websites">
         <HomeWebsites />
      </div>
{/* marketing */}
      <div className="home_branding">
        <HomeMarketing />
      </div>
      {/* pachete  */}
      <div className="home_pachete">
        <HomePachete />
      </div>
     
 </div>
 </>
  )}



export default Home