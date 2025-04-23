import "./Home.css"
import "../../index.css"
import homeVideo from "../../assets/videos/artech_home_video.mp4"
import { Link } from "react-router-dom";
import { lazy, useEffect } from "react";
import { Helmet } from "react-helmet-async";
import { useTranslation } from "react-i18next";
// import { CheckCircle, PoundSterling } from "lucide-react";
const NewHomeWebsite = lazy(() => import("../../components/HomeComponents/HomeWebsite/HomeWebsite.jsx"))
const HomeMarketing = lazy(()=> import("../../components/HomeComponents/HomeMarketing/HomeMarketing.jsx"))
const HomeBranding = lazy(() => import("../../components/HomeComponents/HomeLogos/HomeLogos.jsx"))
const HomePachete = lazy(() => import("../../components/HomeComponents/HomePachete/HomePachete.jsx"))
const HomeBlogs = lazy(() => import("../../components/HomeComponents/HomeBlogs/HomeBlogs.jsx"))




const Home = () => {
  const [t] = useTranslation("global")

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
          
          
          <p>{t("home_intro")}</p>
          <div className="home_new_btns_container">
            {/* add link to section */}
              <Link to="/plans">{t("home_intro_first_btn")}</Link>
              <Link to="/contact" >{t("home_get_a_quote")}</Link>
          </div>
        </div>
        
        <div className="home_video">
          <video src={homeVideo} autoPlay loop muted playsInline  controlsList="nofullscreen" preload="auto"/>
        </div>
         
      </div>
{/* 100pounds offer */}
    <section className="pricing-wrapper" id="fair-pricing">
      <div className="pricing-content">
        <h2 className="pricing-title">Simple & Fair Pricing</h2>
        <p className="pricing-subtitle">Just <span className="price-amount">£100</span> upfront for small projects</p>
        <p className="pricing-text">For projects valued up to £500, we charge just a £100 upfront deposit to get started.
        The remaining balance is only due once the project is completed.</p>
        <p className="pricing-highlight">You only pay in full when you're happy ✅</p>
        <p className="pricing-description">We value transparency, trust, and quality above all. No hidden fees, No surprises, no pressure — just great work, delivered with your satisfaction in mind.<Link to="/terms"> Terms and conditions</Link> apply.</p>
        <a href="#contact" className="pricing-button">Start Your Project</a>
      </div>
    </section>
      
{/* logos */}
      <HomeBranding />

{/* websites */}
      <div className="home_websites">
         {/* <HomeWebsites /> */}
         <NewHomeWebsite />
      </div>
{/* marketing */}
      <div className="home_branding">
        <HomeMarketing />
      </div>
      {/* pachete  */}
      <div className="home_pachete">
        <HomePachete />
      </div>

      <HomeBlogs />
 </div>
 </>
  )}



export default Home