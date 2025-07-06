import "./Home.css";
import "../../index.css";
import homeVideo from "../../assets/videos/artech_home_video.mp4";
import { Link } from "react-router-dom";
import { lazy, useEffect } from "react";
import { Helmet } from "react-helmet-async";
import { useTranslation } from "react-i18next";
import { motion } from "framer-motion";
// import home_intro from "../../assets/images/home/home_intro_desktop.webp";



const HomePachete = lazy(() =>
  import("../../components/HomeComponents/HomePachete/HomePachete.jsx")
);
const HomeBlogs = lazy(() =>
  import("../../components/HomeComponents/HomeBlogs/HomeBlogs.jsx")
);
const HomeIntro = lazy(() =>
  import("../../components/HomeComponents/Home_intro/Home_intro.jsx")
);
const HomeOurServices = lazy(() =>
  import("../../components/HomeComponents/Home_our_services/Home_our_services.jsx")
);
const HomeReviews = lazy(() =>
  import("../../components/HomeComponents/Home_reviews/Home_reviews.jsx")
);
const HomeSteps = lazy(() =>
  import("../../components/HomeComponents/Home_steps/Home_steps.jsx")
);
const HomeFaq = lazy(() =>
  import("../../components/HomeComponents/Home_faq/Home_faq.jsx")
);

const Home = () => {
  const [t] = useTranslation("global");

  // scroll to top
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <>
      <Helmet>
        <title>Home</title>
        <meta
          name="description"
          content="Aduti afacerea la urmatorul nivel cu Artech, fie ca vine vorba de pagini web, marketing, branding sau logouri, noi suntem cheia. "
        />
        <link rel="canonical" href="https://artech-agency.co/" />
      </Helmet>
      <div className="home_container">
        {/* new home section */}
        <div className="home_new_container">
          <div className="home_intro_img">

         
          <div className="home_new_presentation">
            <div className="home_new_title">
              <h1>ARTECH</h1>
              <h2>BRANDING - WEBSITES - MARKETING</h2>
            </div>

            <p>We create custom websites, bold branding, and smart digital strategies combining design, SEO, speed, and marketing to help you grow faster and stand out online.</p>
            <div className="home_new_btns_container">
              {/* add link to section */}
              <Link to="/plans">{t("home_intro_first_btn")}</Link>
              <Link to="/contact">{t("home_consultation")}</Link>
            </div>
          </div>
        </div>
          {/* <div className="home_video">
            <video
              src={homeVideo}
              autoPlay
              loop
              muted
              playsInline
              controlsList="nofullscreen"
              preload="auto"
            />
          </div> */}
        </div>
        {/* our services */}
        <HomeIntro />

        <HomeOurServices />

        <HomeReviews />

        <HomeSteps />

        <HomePachete />

        <HomeBlogs />

        <HomeFaq />

        {/* logos */}
        {/* <HomeBranding /> */}

        {/* websites */}
        <div className="home_websites">
          {/* <HomeWebsites /> */}
          {/* <NewHomeWebsite /> */}
        </div>
        {/* marketing */}
        <div className="home_branding">
          {/* <HomeMarketing /> */}
        </div>
        {/* pachete  */}
        {/* <div className="home_pachete">
          <HomePachete />
        </div> */}

      </div>
    </>
  );
};

export default Home;
