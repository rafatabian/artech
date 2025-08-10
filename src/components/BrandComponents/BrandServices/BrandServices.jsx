import "./BrandServices.css"
import { FaPencilRuler, FaTools, FaIdCard, FaPager } from "react-icons/fa";
import { FaMessage } from "react-icons/fa6" 
import { PiPathBold } from "react-icons/pi";

const BrandServices = () => {
  const servicesData = [
    {
      icon: <FaPencilRuler />,
      title: "Strategic Logo Design",
      description:
        "Create a memorable logo that resonates with your brand’s mission and builds customer trust.",
    },
    {
      icon: <FaTools/>,
      title: "Complete Rebranding",
      description:
        "Transform your brand identity to attract new customers and grow your market presence.",
    },
    {
      icon: <FaIdCard/>,
      title: "Business Cards & Print",
      description:
        "Design high-impact print materials that leave a lasting impression and drive engagement.",
    },
    {
      icon:<FaPager/>,
      title: "Branded Templates",
      description:
        "Easy-to-use templates for proposals, presentations, and social media — all consistent and on-brand.",
    },
    {
      icon:<FaMessage/>,
      title: "Brand Messaging",
      description:
        "Craft clear, compelling messages that communicate your value and connect emotionally.",
    },
    {
      icon: <PiPathBold/>,
      title: "Brand Guidelines",
      description:
        "Maintain brand consistency with detailed guidelines covering visuals, tone, and usage.",
    },
  ];

  return (
    <section className="services-section">
      <div className="services-container">
        <h2 className="services-title">Our Branding Services</h2>
        <div className="services-grid">
          {servicesData.map(({ icon, title, description }, index) => (
            <div key={index} className="service-card">
              <div className="service-icon-container">
                {icon}
              </div>
              <h3 className="service-card-title">{title}</h3>
              <p className="service-card-desc">{description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default BrandServices