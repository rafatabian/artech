import "./Plans.css"
import { useEffect, useRef } from "react"
import { Link, useNavigate} from "react-router-dom"
import { Helmet } from "react-helmet-async"
//imgs
import leafs from "../../assets/images/plans_imgs/leaf.jpg"
import coffee_park from "../../assets/images/plans_imgs/coffee_park.jpg"


const PlanCard = ({ title, details, delivery, price, upfront, funct }) => (
      <div className="plans_pannel_option">
        <div className="plans_pannele_title_container">
          <h1>{title}</h1>
             <div className="plans_pannel_option_details">
            <p>{delivery}</p>
            <p>{price}</p>
            {upfront && <p>{upfront}</p>}
          </div>
          <div className="plans_pannel_btn_conteiner">
            <Link to="#" onClick={(e) => {
          e.preventDefault(); // prevent default link navigation
          funct(title.toLowerCase());
        }}>Get Started</Link>
          </div>
        </div>
        <div>
          <ul>
            {details.map((item, i) => (
              <li key={i}>-{item}</li>
            ))}
          </ul>
        </div>
      </div>
);

const Pachete = () => {
  const navigate = useNavigate()
  const plansRef = useRef();

  //send data to contact with the plans selected
const handleSubmit = (planName) => {
    navigate(`/contact#/${planName}`);
}

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
     "30 minute consultation",
     "Custom design and one-page website optimized for fast performance",
     "Custom domain name and hosting for one year",
     "Tailored logo design based on your preferences",
     "One-time website revision after completion",
     "Social media account setup (Google Business, Facebook, Instagram, Maps)",
  ];

  const standardDetails = [
    "1-hour consultation",
    "3-page custom website with form integration, SEO, and performance optimization",
    "Custom domain name and hosting for 3 years",
    "Two custom logo concepts based on your preferences",
    "Business card design",
    "Up to two revisions after completion",
    "Social media account setup (Google Business, Facebook, Instagram, Maps)",
    "Ad post creation for social media",
    "2 weeks of paid marketing ads",
  ];

  const proDetails = [
    "Up to 3 hours of consultation",
  "Advanced website with features like login panels, bookings, and contact forms",
  "SEO and performance optimized",
  "5 years domain name and lifetime hosting",
  "Three custom logo concepts — choose your favorite!",
  "Business card design",
  "Banner and poster design",
  "Social media account setup (Google Business, Facebook, Instagram, Maps)",
  "Ad post creation (photo/video)",
  "1 month of paid marketing ads",
  "FREE maintenance for 1 month",
  "Competitor research",
  "Website traffic reports",
  "Email marketing campaign setup",
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

      <div className="plans_container" ref={plansRef} style={{backgroundImage:`url(${leafs})`}}>
        <div className="plans_conteiner_intro_section" style={{backgroundImage:`url(${coffee_park})`}}>
          <div className="plans_text_shadow">
        <h1>Branding + Websites + Marketing all together</h1>
        <h2>
           All our plans include an initial consultation to understand your business goals, so we can create the best website design and functionality tailored to your audience. Our goal is to help you get the most value and profit for every pound you invest in our services.
           We provide weekly updates to keep you informed on your project’s progress, and full support after completion — so you never have to worry about what’s next.
           The PRO plan includes FREE 3-month maintenance, meaning we’ll update your website, change pictures, or make edits at no extra cost during that time.
        </h2>
        <h2>We care deeply about the quality of every project we take on — because your success is our priority.</h2>
          </div>
          
        </div>
        
      <div className="plans_card_container">
        <PlanCard
          title="STARTER"
          details={starterDetails}
          delivery="Fast delivery: 3-7 days"
          price="Starting from: £499"
          funct={handleSubmit}
        />

        <PlanCard
          title="STANDARD"
          details={standardDetails}
          delivery="Delivery: 1-2 weeks"
          price="Price: from £1999"
          upfront="50% upfront payment"
          funct={handleSubmit}
        />

        <PlanCard
          title="PRO"
          details={proDetails}
          delivery="Delivery time: 2-3 weeks"
          price="Price: £3500"
          upfront="30% upfront payment"
          funct={handleSubmit}          
        />
        </div>
        <p className="plans_final_text">
          Prefer something different? Tell us what you need, and we’ll tailor a plan and price just for you
          <div className="plans_last_btn_conteiner">
            <Link to="/contact" >Start</Link>
          </div>
        </p>
      
      </div>
    </>
  );
};

export default Pachete;



