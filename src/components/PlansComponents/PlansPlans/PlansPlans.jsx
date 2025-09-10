import "./PlansPlans.css"
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import { useEffect } from "react";
import { FaPalette, FaEarthAmericas, FaArrowUpRightDots } from "react-icons/fa6";

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

    {/* Branding */}
    <div className="plans_branding_list">
      <h3><FaPalette/> Branding</h3>
      <ul>
        {details.branding.map((item, i) => (
          <li key={i}>{item}</li>
        ))}
      </ul>
    </div>

    {/* Websites */}
    <div className="plans_websites_list">
      <h3><FaEarthAmericas/>Websites</h3>
      <ul>
        {details.websites.map((item, i) => (
          <li key={i}>{item}</li>
        ))}
      </ul>
    </div>

    {/* Marketing */}
    <div className="plans_marketing_list">
      <h3><FaArrowUpRightDots/>Marketing</h3>
      <ul>
        {details.marketing.map((item, i) => (
          <li key={i}>{item}</li>
        ))}
      </ul>
    </div>

    <div className="plans_pannel_option_details">
      <p>{delivery}</p>
      {/* <p>{price}</p> */}
      {upfront && <p>{upfront}</p>}
    </div>

    <Link
      to="#"
      onClick={(e) => {
        e.preventDefault();
        funct(title.toLowerCase());
      }}
    >
      Get Started
    </Link>
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

  const starterDetails = {
  branding: ["Logo design"],
  websites: ["One page custom website", "Domain and hosting"],
  marketing: ["Meta accounts setup", "2 Advertising posts"],
};

const standardDetails = {
  branding: ["2 custom logos", "Business card design"],
  websites: ["3 pages website","Performance optimisation","Domain and hosting"],
  marketing: [ "Social media setup","2 weeks marketing campaign", "5 advertising posts"],
};

const proDetails = {
  branding: ["3 custom logos", "Business card design", "Banner/poster design"],
  websites: ["Advanced website","SEO optimisation","Performance optimisation","Domain and hosting","Website traffic reports"],
  marketing: ["All accounts setup","4 weeks marketing campaign","12 advertising posts","Competitor research","Performance monitoring"],
};
  return (
    <div className="plans_backgound" ref={sectionRef}>
    <div className="plans_card_container">
        <PlanCard
  title="STARTER"
  details={starterDetails}
  delivery="Fast delivery: 3-7 days"
  // price="Starting from: £799"
  img={plans_runner_img}
  funct={handleSubmit}
/>

<PlanCard
  title="STANDARD"
  details={standardDetails}
  delivery="Delivery: 1-2 weeks"
  // price="Price: from £1999"
  upfront="50% upfront payment"
  img={plans_climber_img}
  funct={handleSubmit}
/>

<PlanCard
  title="PRO"
  details={proDetails}
  delivery="Delivery time: 2-3 weeks"
  // price="Price: £3500"
  upfront="30% upfront payment"
  img={plans_rocket_img}
  funct={handleSubmit}
/>
        </div>
            </div>
  )
}

export default PlansPlans