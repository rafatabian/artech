import "./MarkeServices.css"
import { FaFacebookSquare, FaGoogle, FaSearch} from "react-icons/fa"
import { FaArrowUpRightDots } from "react-icons/fa6"
import { IoMail, IoDocumentText } from "react-icons/io5";

const MarkeServices = () => {
  return (
    <div className="marke_servies_background">
      <div className="marke_services_conteiner">
        <h1>Our marketing services</h1>
        <h2>We help businesses get seen</h2>

      <div className="marke_services_content">
        <span>
          <FaFacebookSquare />
          <p>Social media marketing</p>
        </span>
         <span>
         <FaGoogle />
          <p>Google ads</p>
        </span>
         <span>
         <FaSearch />
          <p>Monitoring and reports</p>
        </span>
         <span>
          <FaArrowUpRightDots />
          <p>360 launch campains</p>
        </span>
         <span>
          <IoMail />
          <p>Email marketing</p>
        </span>
         <span>
          <IoDocumentText />
          <p>Content marketing</p>
        </span>
      </div>
    </div>
   </div>
  )
}

export default MarkeServices