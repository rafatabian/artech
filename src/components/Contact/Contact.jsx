import "./Contact.css"
import { useRef, useState, useEffect } from "react"
import emailjs from "@emailjs/browser"
import { FaPhone } from "react-icons/fa6"
import { MdEmail } from "react-icons/md"
import logo from "../../assets/images/navbar_white_logo.webp"
import { AiFillLike } from "react-icons/ai" 
import { useNavigate} from "react-router-dom"



const Contact = () => {
  const formRef = useRef()
  const [confirmation, setConfirmation] = useState(false)
  const [emailData, setEmailData] = useState({
    tip_solicitare: "",
    planul:"",
    descriere:"",
    nume:"",
    telefon:"",
    email:""
  })

// scroll to top
useEffect(() => {
  window.scrollTo(0, 0)
}, [])

  const navigate = useNavigate()
  // TO DO make sure the paan choosed by the user in pachete page is sended by email
// getting the plan from the url
useEffect(() => {
  const hash = window.location.hash
  const hashParts = hash.split('/')
  const plan = hashParts[hashParts.length - 1]
  if(plan !== "contact"){
    setEmailData({
      ...emailData, planul: plan
  })
  }
}, []);


// sets tip_solicitare data 
const handleSelectChange = (e) => {
  setEmailData({
    ...emailData,
    tip_solicitare: e.target.value
  })
}

// function for sending emails
const sendEmail = (e) => {
  e.preventDefault()
  emailjs
      .send('service_vztopwc', 'template_lylcs4q', emailData, {
        publicKey: '3EZTg7KvgmPiXOfnr',
      })
      .then(
        () => {
          console.log('SUCCESS!');
        },
        (error) => {
          console.log('FAILED...', error.text);
        },
      );
      setConfirmation(true)
      setTimeout(() => {
        setConfirmation(false)
        navigate("/")
      }, 3000)
}


  return (
    <div className="contact_container">
      <h1 className="container_title">Formular de contact</h1>
     <div className="contact_form">
      <h1>Completează formularul și vom reveni cu un răspuns sau o soluționare în cel mai scurt timp.</h1>
      <form onSubmit={sendEmail} ref={formRef}>
        <div>
          <label htmlFor="options">Solicitarea ta e legata de:</label>
          <select id="options" onChange={handleSelectChange} value={emailData.tip_solicitare} required={true}>
            <option value="">selecteaza motivul solicitarii</option>
            <option value="Branding">Branding</option>
            <option value="Websites">Websites</option>
            <option value="Marketing">Marketing</option>
            <option value="Pachete">Pachete</option>
            <option value="Altceva">Altceva</option>
          </select>
        </div>

        <div className="contact_desctiption"> 
          <label htmlFor="description">Da-ne cateva detalii</label>
          <textarea id="description" onChange={(e) => setEmailData({...emailData, descriere:e.target.value})} value={emailData.descriere} required></textarea>
        </div>

        <div>
          <h2>Date Personale</h2>
          <div>
            <label htmlFor="name">Prenume si Nume:</label>
            <input id="name" type="text" placeholder="Prenume si Nume" required onChange={(e) => setEmailData({...emailData, nume: e.target.value})} value={emailData.nume}/>
          </div>
          <div>
            <label htmlFor="phone">Telefon:</label>
            <input id="phone" type="tel" placeholder="Telefon"  required onChange={(e) => setEmailData({...emailData, telefon: e.target.value})} value={emailData.telefon}/>
          </div>
          <div>
            <label htmlFor="email">Adresa de e-mail:</label>
            <input id="email" type="email" placeholder="Adresa de e-mail" required onChange={(e) => setEmailData({...emailData, email: e.target.value})} value={emailData.email}/>
          </div>
          <p>Prin apăsarea butonului „Trimite Formular” și transmiterea acestuia confirmi că ai cu bună-credință convingerea că informațiile și susținerile cuprinse în cadrul formularului de notificare sunt exacte și complete.</p>
        </div>
        <button type="submit" >Trimite Formularul</button>
      </form>
     </div>

     {/* under the form */}
     <div className="contact_alternative_line"><p>sau</p></div>
     <div className="contact_phone_email">
          <div>
            <FaPhone/>
            <span><a href={`tel:${"+40 750 616 923"}`}>+40 750 616 923</a><a href={`tel:${"+44 740 422 3144"}`}>+44 740 422 3144</a></span>
          </div>
          <div>
            <MdEmail /> 
            <a href={`mailto:${"agency.artech1@gmail.com"}`}>agency.artech1@gmail.com</a>
        </div>
     </div>

     {/* form confirmation pop up */}
    {confirmation && <div className="contact_confirmation">
      <img src={logo} alt="logo"/>
      <h1>Multumim pentru timpul acordat!</h1>
      <div>
        <AiFillLike />
      </div>
      <h2>Vom reveni in cel mai scurt timp posibil</h2>
     </div>}
    </div>
  )
}

export default Contact