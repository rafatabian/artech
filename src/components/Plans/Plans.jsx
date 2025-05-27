import "./Plans.css"
import { useEffect, useRef } from "react"
import { Link} from "react-router-dom"
import { Helmet } from "react-helmet-async"
import { useTranslation } from "react-i18next"
import { motion } from "framer-motion"
//imgs
import starter_img from "../../assets/images/plans_imgs/plans_starter.webp" 
import standard_img from "../../assets/images/plans_imgs/plans_standard.webp"
import pro_img from "../../assets/images/plans_imgs/plans_pro.webp"


const PlanCard = ({ title, details, delivery, price, upfront }) => (
  <motion.div
    initial="hidden"
    whileInView="show"
    variants={{
      hidden: {},
      show: { transition: { staggerChildren: 0.2 } },
    }}
    viewport={{ once: true, amount: 0.4 }}
  >
    <motion.div
      variants={{
        hidden: { opacity: 0, y: 30 },
        show: { opacity: 1, y: 0 },
      }}
      transition={{ duration: 0.5, ease: "easeOut", delay: 0.1}}
    >
      <div className="plans_pannel_option">
        <div className="plans_pannele_title_container"  style={{backgroundImage: `url(${title === "STARTER" ? starter_img : title === "STANDARD" ? standard_img : pro_img})`}}>
          <h1>{title}</h1>
        </div>
        <div>
          <h3 className="plans_pannel_includes">Includes:</h3>
          <ul>
            {details.map((item, i) => (
              <li key={i}>-{item}</li>
            ))}
          </ul>
          <div className="plans_pannel_option_details">
            <p>{delivery}</p>
            <p>{price}</p>
            {upfront && <p>{upfront}</p>}
          </div>
          <div className="plans_pannel_btn_conteiner">
            <Link to="/contact" >Get Started</Link>
          </div>
        </div>
      </div>
    </motion.div>
  </motion.div>
);

const Pachete = () => {
  const plansRef = useRef();
  const [t] = useTranslation("global");

  useEffect(() => {
    const hash = window.location.hash;
    const hashParts = hash.split("/");
    const planSelected = hashParts[hashParts.length - 1];
    if (planSelected !== "plans") {
      plansRef.current.scrollIntoView();
    } else {
      window.scrollTo(0, 0);
    }
  }, []);

  const starterDetails = [
    "30 minutes consultation",
    "Custom Design and one Page Website optimised for fast performance",
    "Custom Domain name and server hosting for one year",
    "Custom Logo based on your needs",
    "We can change your website one time after completion",
    "Social media accounts setup (Google Business, Facebook, Instagram, Maps)",
  ];

  const standardDetails = [
    "1 hour consultation",
    "3 pages custom website with form integration, SEO and performance optimised",
    "Custom Domain name and server hosting for 5 years",
    "2 Custom Logos based on your needs",
    "Business card design",
    "Up to 2 revisions after completion",
    "Social media accounts setup (Google Business, Facebook, Instagram, Maps)",
    "Advertisement posts creation",
    "166k views",
    "2 weeks marketing ads",
  ];

  const proDetails = [
    "Up to 3 hours of consultation",
    "High functionality website (login panels, bookings, contact forms) integrated",
    "SEO and performance optimised",
    "Lifetime domain name and server hosting",
    "3 Custom Logos based on your needs (choose your favorite :) )",
    "Business card design",
    "Banners, Posters Design",
    "Social media accounts setup (Google Business, Facebook, Instagram, Maps)",
    "Advertisement posts creation (photo/video)",
    "One month of marketing ads",
    "FREE 3 months maintenance",
    "Competition research",
    "Traffic reports on website",
    "250k views",
    "Email marketing",
  ];

  return (
    <>
      <Helmet>
        <title>Pachete</title>
        <meta
          name="description"
          content="Alege pachetul potrivit pentru nevoile tale, fie ca vrei ceva simplu sau ceva mai complex."
        />
        <link rel="canonical" href="https://artech-agency.co/#/plans" />
      </Helmet>

      <div className="plans_container" ref={plansRef}>
        <div className="plans_conteiner_intro_section">
          <h1>Branding + Websites + Marketing all together</h1>
        <h2>
          All our plans include an initial consultation where we understand your
          business target so we can make the best website design, functionality
          and promote it to the right audience for maximum profit for every pound
          invested in our services. We do weekly updates to let you know how is
          your project going and we provide full support after the completion of
          the project so you don't have to worry about anything. For the PRO plan
          we provide FREE maintenance for 3 months, meaning if you want to update
          your website, add new pictures or make changes, we will do it for you
          at no extra cost. We focus on the quality of each project rather than
          the quantity.
        </h2>
        </div>
        

        <PlanCard
          title="STARTER"
          details={starterDetails}
          delivery="Fast delivery: 3-7 days"
          price="Starting from: £499 (ideal is £150 per day for each person working on the project)"
        />

        <PlanCard
          title="STANDARD"
          details={standardDetails}
          delivery="Delivery: 1-2 weeks"
          price="Price: from £1999 (- £500 for ads and programs = £1500 profit)"
          upfront="50% upfront payment"
        />

        <PlanCard
          title="PRO"
          details={proDetails}
          delivery="Delivery time: 2-3 weeks"
          price="Price: £3500 (- £500 in ads and other programs)"
          upfront="30% upfront payment"
        />

        <p className="plans_final_text">
          Or make your own plan and we will make a separate price, but be careful
          of needy people who will want many things for a small price.
        </p>
      </div>
    </>
  );
};

export default Pachete;



