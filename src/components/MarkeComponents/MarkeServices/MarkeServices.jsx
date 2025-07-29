import "./MarkeServices.css"
import { FaFacebookSquare, FaGoogle, FaLinkedin, FaInstagram, FaTiktok} from "react-icons/fa"
import { IoMail } from "react-icons/io5";

const MarkeServices = () => {
  return (
    <div className="marke_servies_background">
      <div className="marke_services_conteiner">
        <h1>Our marketing services</h1>
        <h2>We help businesses get seen</h2>

      <div className="marke_services_content">
        <span>
          <FaFacebookSquare />
          <p>Facebook marketing</p>
        </span>
         <span>
         <FaGoogle />
          <p>Google ads</p>
        </span>
         <span>
         <FaLinkedin />
          <p>Linkedin marketing</p>
        </span>
         <span>
          <FaInstagram />
          <p>Instagram marketing </p>
        </span>
         <span>
          <IoMail />
          <p>Email marketing</p>
        </span>
         <span>
          <FaTiktok />
          <p>TikTok marketing</p>
        </span>
      </div>
    </div>
   </div>
  )
}

export default MarkeServices