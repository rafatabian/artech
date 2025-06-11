import "./Contact.css"
import { useRef, useState, useEffect } from "react"
import emailjs from "@emailjs/browser"
import { RiWhatsappFill } from "react-icons/ri"
import { MdEmail } from "react-icons/md"
import logo from "../../assets/images/navbar_white_logo.webp"
import { AiFillLike } from "react-icons/ai" 
import { Helmet } from "react-helmet-async"
import { useTranslation } from "react-i18next"
import { Link } from "react-router-dom"
import ReCAPTCHA from "react-google-recaptcha"



const Contact = () => {
  const formRef = useRef()
  const [confirmation, setConfirmation] = useState(false)
  const [captchaValue, setCaptchaValue] = useState(null);
  const [emailData, setEmailData] = useState({
    tip_solicitare: "",
    planul:"",
    descriere:"",
    nume:"",
    telefon:"",
    email:""
  })
  const [t] = useTranslation("global")
// scroll to top
useEffect(() => {
  window.scrollTo(0, 0)
}, [])

// getting the plan from the url
useEffect(() => {
  const hash = window.location.hash;
  const hashParts = hash.split('/');
  const plan = hashParts[hashParts.length - 1];
  if (plan !== "contact") {
    setEmailData((prevData) => ({
      ...prevData,
      planul: plan,
    }));
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

  if(!captchaValue){
    alert("please confirm you're not a bot.")
    return
  }

  emailjs
      .send('service_bxwwj7b', 'template_85xbllk', emailData, {
        publicKey: 'zRB_M2l24GAb2ixBd',
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
      // setTimeout(() => {
      //   setConfirmation(false)
      //   navigate("/")
      // }, 3000)
}

  //funcnition  for recaptcha
  function onChange(value) {
  setCaptchaValue(value)
}

  return (
    <>
     <Helmet>
      <title>Contact</title>
      <meta name="description" content="Nu ezitati sa ne contactati in cazul in care vreti sa luati legatura cu noi. Suntem aici sa va jutam."/>
      <link rel="canonical" href="https://artech-agency.co/#/contact"/>
    </Helmet>
    <div className="contact_container">
      <h1 className="container_title">{t("contact_title")}</h1>
     <div className="contact_form">
      <h1>{t("contact_info")}</h1>
      <form onSubmit={sendEmail} ref={formRef}>
        <div>
          <label htmlFor="options">{t("contact_solicitare_title")}</label>
          <select id="options" onChange={handleSelectChange} value={emailData.tip_solicitare} required={true}>
            <option value="">{t("contact_solicitare_1")}</option>
            <option value="Branding">{t("contact_solicitare_2")}</option>
            <option value="Websites">{t("contact_solicitare_3")}</option>
            <option value="Marketing">{t("contact_solicitare_4")}</option>
            <option value="Pachete">{t("contact_solicitare_5")}</option>
            <option value="Altceva">{t("contact_solicitare_6")}</option>
          </select>
        </div>

        <div className="contact_desctiption"> 
          <label htmlFor="description">{t("contact_detalii")}</label>
          <textarea id="description" onChange={(e) => setEmailData({...emailData, descriere:e.target.value})} value={emailData.descriere} required></textarea>
        </div>

        <div>
          <h2>{t("contact_date_personale")}</h2>
          <div>
            <label htmlFor="name">{t("contact_name")}:</label>
            <input id="name" type="text" placeholder={t("contact_name")} required onChange={(e) => setEmailData({...emailData, nume: e.target.value})} value={emailData.nume}/>
          </div>
          <div>
            <label htmlFor="phone">{t("contact_telefon")}:</label>
            <input id="phone" type="tel" placeholder={t("contact_telefon")}  required onChange={(e) => setEmailData({...emailData, telefon: e.target.value})} value={emailData.telefon}/>
          </div>
          <div>
            <label htmlFor="email">{t("contact_email")}:</label>
            <input id="email" type="email" placeholder={t("contact_email")} required onChange={(e) => setEmailData({...emailData, email: e.target.value})} value={emailData.email}/>
          </div>

          <span className="reCaptcha">
           <ReCAPTCHA
            sitekey="6Lerc1krAAAAAFFsnPwl5woNWd0N2DNg29mepHKF"
            onChange={onChange}
            />
        </span>
           
            
          <label htmlFor="privacy" className="contact_privacy_label">
            <input type="checkbox" id="privacy" required defaultChecked={false} />
            <span>{t("contact_termeni1")} <Link to="/terms">{t("contact_termeni2")}</Link> {t("contact_termeni3")} <Link to="/privacy">{t("contact_termeni4")}</Link></span>
          </label>
          <p>{t("contact_adictional_info")}</p>
        </div>
        <button type="submit">{t("contact_button")}</button>
      </form>
     </div>

     {/* under the form */}
     <div className="contact_alternative_line"><p>{t("contact_or")}</p></div>
     <div className="contact_phone_email">
          <div>
            <RiWhatsappFill/>
            <span><a href={`tel:${"+40 750 616 923"}`}>+40 750 616 923 ~RO</a><a href={`tel:${"+44 7424 177 665"}`}>+44 7424 177 665 ~UK</a></span>
          </div>
          <div>
            <MdEmail /> 
            <a href={`mailto:${"business@artech-agency.co"}`}>business@artech-agency.co</a>
        </div>
     
     </div>

     {/* form confirmation pop up */}
    {confirmation && <div className="contact_confirmation">
      <img src={logo} alt="logo"/>
       <h1>Thank you for your time!</h1>
       <h2>We will be back asap</h2>
      <div>
        <AiFillLike />
      </div>
     </div>}
    </div>
    </>
  )
}

export default Contact