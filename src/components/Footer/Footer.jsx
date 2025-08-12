import "./Footer.css"
import emailjs from "@emailjs/browser"
import { FaFacebook,FaInstagram, FaTiktok } from "react-icons/fa"
import { MdEmail } from "react-icons/md"
import { Link} from "react-router-dom"
import { useState } from "react"

const Footer = () => {

  const initialEmailData = {
  tip_solicitare: "/",
  planul: "/",
  descriere: "",
  nume: "",
  telefon: "/",
  email: ""
};

const [emailData, setEmailData] = useState(initialEmailData);

    // function for sending emails
const sendEmail = (e) => {
  e.preventDefault()

  emailjs
      .send('service_bxwwj7b', 'template_85xbllk', emailData, {
        publicKey: 'zRB_M2l24GAb2ixBd',
      })
      .then(
        () => {
          console.log('SUCCESS!');
        // Reset the form state to clear the inputs
        setEmailData(initialEmailData);
        },
        (error) => {
          console.log('FAILED...', error.text);
        },
      );
}


  return (
    <div className= "footer_background">
      <div className="footer_container">
      <h1>ARTECH</h1>
      <div className="footer_content">
        {/* form */}
        <div className="footer_form_column">
          
          <form onSubmit={sendEmail} className="footer_form">
            {/* name */}
            <div>
              <label htmlFor="name"></label>
              <input id="name" type="text" placeholder="Name" required onChange={(e) => setEmailData({...emailData, nume: e.target.value})} value={emailData.nume}/>
            </div>
           {/* email */}
           <div>
             <label htmlFor="email"></label>
            <input id="email" type="email" placeholder="Email" required onChange={(e) => setEmailData({...emailData, email: e.target.value})} value={emailData.email}/>
           </div>
            {/* text */}
            <div>
              <label htmlFor="description"></label>
              <textarea id="description" placeholder="Message" onChange={(e) => setEmailData({...emailData, descriere:e.target.value})} value={emailData.descriere} required></textarea>
            </div>
           <button type="submit">Send</button>
          </form>
        </div>
        {/* links */}
        <div className="footer_links_column">
          <Link to="/" className="footer_link">HOME</Link>
         <Link to="/websites" className="footer_link">WEBSITES</Link>
         <Link to="/branding" className="footer_link">BRANDING</Link>
         <Link to="/marketing" className="footer_link">MARKETING</Link>
         <Link to="/plans" className="footer_link">PLANS</Link>
         <Link to="/contact" className="footer_link">CONTACT</Link>
         <Link to="/help" className="footer_link">HELP</Link>

        </div>
        {/* last column */}
        <div className="footer_last_column">
            <Link to="https://www.facebook.com/profile.php?id=61561101313220" aria-label="facebook"><FaFacebook />Facebook</Link>
            <Link to="https://www.instagram.com/artech.agency1?igsh=cDFycG50ZnVlZDFi" aria-label="instagram"><FaInstagram />Instagram</Link>
            <Link to="https://www.tiktok.com/@artechagency" aria-label="tiktok"><FaTiktok />TikTok</Link>
            <a href={`mailto:${"business@artech-agency.co"}`}><MdEmail />business@artech-agency.co</a>
            <Link to="/privacy" className="footer_link">Privacy Policy</Link>
            <Link to="/terms" className="footer_link">Terms and Conditions</Link>
            <p>© 2025 ARTECH. All rights reserved.</p>
        </div>
      </div>
    </div>
    </div>
  )
}

export default Footer