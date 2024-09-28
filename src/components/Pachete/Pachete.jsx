import "./Pachete.css"
import {  FaRocket, FaStar, FaCircleInfo  } from "react-icons/fa6"
import { ImArrowUpRight2 } from "react-icons/im"
import { FaCheckCircle } from "react-icons/fa"
import { useEffect, useRef, useState } from "react"
import { Link, useParams } from "react-router-dom"


const Pachete = () => {
  const [planFocus, setPlanFocus] = useState(2)
  const plansRef = useRef()

  // scroll to top and to plans details when redirected from anothe page
useEffect(() => {
  const hash = window.location.hash
  const hashParts = hash.split("/")
  const planSelected = hashParts[hashParts.length - 1]
  if(planSelected !== "plans"){
    setPlanFocus(Number(planSelected)) 
    plansRef.current.scrollIntoView()
  }else{
  window.scrollTo(0, 0)
  }
}, [])


// auto scroll to plans details when clicking btns inside of the component
const handlePlanClick = (e) => {
  setPlanFocus(e)
  if(plansRef.current){
  plansRef.current.scrollIntoView({
     behavior: "smooth"
     })
  }}


  return (
    <div className="plans_container">
      <h1>Pachete</h1>
      <div className="plans_presentation">
      <div className={`plans_first_plan ${planFocus === 0 ? "plans_focus_plan" : null}`} onClick={() => handlePlanClick(0)}>
         <span>STARTER <FaRocket /></span>
         <span className="homePachetete_text"><FaCheckCircle />Design personalizat.</span>
         <span className="homePachetete_text"><FaCheckCircle />Creare de logo simplu.</span>
         <span className="homePachetete_text"><FaCheckCircle />Mini-site de prezentare.</span>
         <span className="homePachetete_text"><FaCheckCircle />Setup pentru pagini pe social media.</span>
         <button className="homePachete_alege_btn" onClick={() => setPlanFocus(0)}>ALEGE</button>
        </div>
        <div className={`plans_third_plan ${planFocus === 2 ? "plans_focus_plan" : null}`} onClick={() => handlePlanClick(2)}>
         <span>STANDARD <ImArrowUpRight2/></span>
         <span className="homePachetete_text"><FaCheckCircle />Design profesional</span>
         <span className="homePachetete_text"><FaCheckCircle />Logo avansat</span>
         <span className="homePachetete_text"><FaCheckCircle />Website de 5 pagini</span>
         <span className="homePachetete_text"><FaCheckCircle />Creare de conținut și postări lunare.</span>
         <span className="homePachetete_text"><FaCheckCircle />Campanie de publicitate</span>
         <button className="homePachete_alege_btn" onClick={() => setPlanFocus(2)}>ALEGE</button>
        </div>
        <div className={`plans_second_plan ${planFocus === 1 ? "plans_focus_plan" : null}`} onClick={() => handlePlanClick(1)}>
         <span>PRO <FaStar /></span>
         <span className="homePachetete_text"><FaCheckCircle />Branding & Website complet</span>
         <span className="homePachetete_text"><FaCheckCircle />Optimizare SEO si performanta</span>
         <span className="homePachetete_text"><FaCheckCircle />Gestionare completă a campaniilor de publicitate</span>
         <span className="homePachetete_text"><FaCheckCircle />Creare de conținut săptămânal</span>
         <span className="homePachetete_text"><FaCheckCircle />Consultanță și updateuri lunare</span>
         <button className="homePachete_alege_btn" onClick={() => setPlanFocus(1)}>ALEGE</button>
        </div>
        </div>
        {/* constent under plans */}  
        <div className="plans_content" ref={plansRef}>
          {planFocus === 0 ?
         <div className="plans_content_starter">
          <h1>STARTER</h1>
          <p>Pentru cei care doresc sa isi contureze identitatea de brand, acest pachet ofera fundatia perfecta</p>
          <div><span><FaCheckCircle />Creearea unui logo simplu:</span> <p>Un design elegant care capteaza esenta afacerii tale. Fiecare element este ales cu grija pentru a reflecta voalorile si personalitatea brandului tau.</p></div>
          <div><span><FaCheckCircle />Minisite de prezentare:</span> <p>O pagina web moderna, optimizata pentru a oferi informatii esentiale despre serviciile tale, intru-un formatr atragator si accesibil.</p></div>
          <div><span><FaCheckCircle />Design personalizat pentru social media:</span> <p>Creearea unui set de imagini si grafica unica, adaptate pentru fiecare platforma, care sa iti sporeasca vizibilitatea si atractivitatea online.</p></div>
         </div> 
         : null}

         {planFocus === 2 ? 
         <div className="plans_content_standard" >
          <h1>STANDARD</h1>
          <p>Ideal pentru afaceri in expansiune, acest pachet combina creativitatea cu strategia pentru a-ti transforma prezenta online</p>
          <div><span><FaCheckCircle />Design personalizat:</span><p>Un branding exclusivist, creat spacial pentru tine, care sa rezoneze cu publicul tinta si sa se distanteze de consurenta.</p></div>
          <div><span><FaCheckCircle />Logo avansat:</span><p>Un logo complex si memorabil, realizat cu tehnici de design de varf, pentru a transmite profesionalism si incredere.</p></div>
          <div><span><FaCheckCircle />Website de pana la 5 pagini:</span><p>O platforma eleganta, care ofera o experienta de navigare fluida si placuta pentru utilizatori</p></div>
          <div><span><FaCheckCircle />Creare de continut pntru postarile lunare:</span><p>Strategii de continut bine gandite care sa atraga si sa retina atentia audientei tale.</p></div>
          <div><span><FaCheckCircle />Campanie de publicitate:</span><p>Solutii strategica de marketing, adaptate spacific pentru a creste vizibilitatea brandului tau si a atrage clienti noi.</p></div>
         </div>
         : null}

         {planFocus === 1 ? 
         <div className="plans_content_pro">
          <h1>PRO</h1>
          <p>Pe langa serviciile din pachetele anterioare, aveti si:</p>
          <div><span><FaCheckCircle />Optinizare SEO si performanta:</span><p>Strategii de optimizare care asigura ca site-ul tau este nu doar vizibil, ci si preferat de motoarele de cautare.</p></div>
          <div><span><FaCheckCircle />Consultanta continua:</span><p>O echipa de experti care iti va oferi indrumari si sugestii personalizate, adaptate evolutiei afacerii tale.</p></div>
          <div><span><FaCheckCircle />Update-uri lunare</span><p>intretinerea constanta a siteului si actualizarea continutului pentru a menitine un standard inalt si o relevanta constanta</p></div>
          <div><span><FaCheckCircle />Domeniu gratuit</span><p>De exemplu  'afacerea-mea.com'. Ne ocupam noi sa platim domeniul siteului tau timp de un an.</p></div>
          <div><span><FaCheckCircle />Server Hosting</span><p>Pentru a-ți asigura un site sigur și vizibil în căutările Google, îl găzduim pe un server performant, oferindu-ți gratuit un an de hosting inclus din partea noastră.</p></div>

         </div>
         : null}

         <div className="plans_button_container">
            <Link to={`/contact/#/${planFocus === 0 ? "starter" : planFocus === 1 ? "pro" : "standard"}`}>ALEGE PLANUL {`${planFocus === 0 ? "STARTER" : planFocus === 1 ? "PRO" : "STANDARD"}`}</Link>
         </div>
        </div>

        <div className="plans_final_text">
          <span>Credem ca fiecare proiect este unic si merita o abordare personalizata. De aceea, preturile noastre sunt adaptate specific nevoilor si cerintelor fiecarui client.
            Costul final depinde de complexitatea proiectului, de timpul necesar pentru realizare si de volumul de munca implicat. Te incurajam sa ne cotactezi pentru a discuta despre viziunea ta, astfle incat sa putem oferi o oferta personalizata, care sa reflecte exact ceea ce iti doresti. 
            Asteptam cu interes sa colaboram si sa transormam ideile tale in realitate.
          </span>
          <div className="plans_button_container">
          <Link to="/contact">CERE O OFERTA</Link>  
          </div>
            
       </div>

    </div>
  )
}

export default Pachete