import "./PlansPlans.css"
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import { useEffect } from "react";

// img
import plans_runner_img from "../../../assets/images/plans/plans_runner.webp"
import plans_climber_img from "../../../assets/images/plans/plans_climber.webp"
import plans_rocket_img from "../../../assets/images/plans/plans_rocket.webp"



const PlanCard = ({ title, details, delivery, price, upfront, funct, img }) => (
      <div className="plans_pannel_option">
         <img src={img} alt="plans intro" />
        <div className="plans_pannele_title_container">
         
          <h1>{title}</h1>
            
        </div>
        <div>
          <ul>
            {details.map((item, i) => (
              <li key={i}>-{item}</li>
            ))}
          </ul>
        </div>
         <div className="plans_pannel_option_details">
            <p>{delivery}</p>
            <p>{price}</p>
            {upfront && <p>{upfront}</p>}
          </div>
           <Link to="#" onClick={(e) => {
          e.preventDefault(); // prevent default link navigation
          funct(title.toLowerCase());
        }}>Get Started</Link>
      </div>
);


const PlansPlans = ({ sectionRef }) => {
    const navigate = useNavigate()


    //send data to contact with the plans selected
  const handleSubmit = (planName) => {
      navigate(`/contact#/${planName}`);
  }
  
    useEffect(() => {
      const hash = window.location.hash;
      const hashParts = hash.split("/");
      const planSelected = hashParts[hashParts.length - 1];
      if (planSelected === "plans") {
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
  "Email marketing setup",
  ];
  return (
    <div className="plans_backgound" ref={sectionRef}>
    <div className="plans_card_container">
        <PlanCard
          title="STARTER"
          details={starterDetails}
          delivery="Fast delivery: 3-7 days"
          price="Starting from: £499"
          img={plans_runner_img}
          funct={handleSubmit}
        />

        <PlanCard
          title="STANDARD"
          details={standardDetails}
          delivery="Delivery: 1-2 weeks"
          price="Price: from £1999"
          upfront="50% upfront payment"
          img={plans_climber_img}
          funct={handleSubmit}
        />

        <PlanCard
          title="PRO"
          details={proDetails}
          delivery="Delivery time: 2-3 weeks"
          price="Price: £3500"
          upfront="30% upfront payment"
          img={plans_rocket_img}
          funct={handleSubmit}          
        />
        </div>
            </div>
  )
}

export default PlansPlans