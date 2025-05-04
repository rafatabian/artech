import "./home_services.css"
import { Link } from "react-router-dom";
import { FaServer, FaPaintBrush, FaForward, FaPaintRoller, FaVideo } from "react-icons/fa";
import { BsFillLightningChargeFill } from "react-icons/bs"
import { RiRobot2Fill } from "react-icons/ri";
import { IoPeople, IoCardSharp } from "react-icons/io5";
import { MdEmail } from "react-icons/md";
import { TbReportSearch } from "react-icons/tb";

const home_services = () => {

  return (
    <div className="home_our_services">
    <h2>Our Services</h2>
  {/* TO DO add links to each li to help navigate on the website*/}
    <ul>
      <li> <Link to="/websites">Custom website design and development</Link> </li>
      <li> <Link to="/websites">SEO optimization and speed improvements</Link> </li>
      <li> <Link to="/Websites">Ongoing updates until you're fully satisfied</Link> </li>
      <li> <Link to="/Websites">AI integration and chatbot setup</Link> </li>
      <li> <Link to="/Websites">Website hosting and custom domain registration</Link> </li>
      <li> <Link to="/branding">Logo design and brand identity</Link> </li>
      <li> <Link to="/branding">Visit cards and photo/video editing</Link> </li>
      <li> <Link to="/marketing">Social media setup and content creation</Link> </li>
      <li> <Link to="/marketing">Attract your first customers with targeted promotion</Link> </li>
      <li> <Link to="/marketing">Business email setup and automated responses</Link> </li>
      <li> <Link to="/marketing">Marketing analytics and performance reports</Link> </li>
    </ul>
  </div>
  )
}

export default home_services