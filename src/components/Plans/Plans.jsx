import "./Plans.css"
import { useEffect, useRef } from "react"
import { Link} from "react-router-dom"
import { Helmet } from "react-helmet-async"
import { useTranslation } from "react-i18next"


const Pachete = () => {
  const plansRef = useRef()
  const [t] = useTranslation("global")

  // scroll to top and to plans details when redirected from another page
useEffect(() => {
  const hash = window.location.hash
  const hashParts = hash.split("/")
  const planSelected = hashParts[hashParts.length - 1]
  if(planSelected !== "plans"){
    plansRef.current.scrollIntoView()
  }else{
  window.scrollTo(0, 0)
  }
}, [])



  return (
    <>
     <Helmet>
      <title>Pachete</title>
      <meta name="description" content="Alege pachetul potrivit pentru nevoile tale, fie ca vrei ceva simplu sau ceva mai complex."/>
      <link rel="canonical" href="https://artech-agency.co/#/plans"/>
    </Helmet>
    
     <div className="plans_container">
      <h1>Branding + Websites + Marketing all together</h1>
 <h2>All our plans include an initial consultation where we understand your business target so we can make the best website design, funtionality and promote it to the right audience for maximum profit for every pound invested in our services. We do weekly updates to let you know how is your project going and we provide full support after the completion of the project so you don't have to worry abount nothing. For the PRO plan we provide FREE maintanence for 3 months that mean if you want to update your website, add new pictures or make changers we gonna do it for you at no extra cost included. We focus on the quality of each project rather than the quantity</h2>
       <div className="plans_pannel_option">
       
        <div className="plans_pannele_title_container">
          <h1>STARTER</h1>
        </div>
        <div>
           <ul>
            <li>30 minutes consultation</li>
            <li>Custom Design and one Page Webstie optimised for fast persormance</li>
            <li>Custom Domain name and server hosting for one year</li>
            <li>Custom Logo based on your needs</li>
            <li>We can change your website one time after complertion</li>
            <li>Social media accounts setup(google business, facebook,  instagram, maps)</li>
           </ul>
           <div>
            <p>fast delivery: 3-7days</p>
            <p>starting from: 499 ideal is 150 pounds day for each person wokring on the project</p>
           </div>

        </div>
           
           
       </div>
       <div className="plans_pannel_option">
           <div className="plans_pannele_title_container">
            <h1>STANDRD</h1>
          </div>
          <div>
            <ul>
            <li>1 hour consultation</li>
            <li>3 pages custom website with form integration, SEO and performance optimised</li>
            <li>Custom Domain name and server hosting for 5 years</li>
            <li>2 Custom Logos based on your needs</li>
            <li>Business card desing</li>
            <li>Up to 2 revisions after complertion</li>
            <li>Social media accounts setup(google business, facebook,  instagram, maps)</li>
            <li>advertisement posts creation </li>
            <li>166k views</li>
            <li>2 weeks marketing ads</li>
            
           </ul>
           <div>
             <p>delivery: 1-2 weeks</p>
             <p>price: from 1999 (- 500 pt ads si programe =1500 profit)</p>
             <p>50% upfront payment</p>
           </div>

          </div>
           
           
       </div>
       <div className="plans_pannel_option">
        <div className="plans_pannele_title_container">
          <h1>PRO</h1>
        </div>
        <div>
          <ul>
            <li>up to 3 hours of counsultation</li>
            <li>High functionality website(login pannels, bookings, contact forms) integrated</li>
            <li>SEO and performance optimised</li>
            <li>Lifetime domain name and server hosting</li>
            <li>3 Custom Logos based on your needs(you can choose wich one you like the most :)</li>
            <li>Business card desing</li>
            <li>Banners, Posters Design </li>
            <li>Social media accounts setup(google business, facebook,  instagram, maps)</li>
            <li>advertisement posts creation(photo/video)</li>
            <li>one month of marketing ads</li>
            <li>FREE 3 months maintanance</li>
            <li>Competition research</li>
            <li>Traffic reports on website</li>
            <li> 250k views</li>
            <li>Email marketing</li>
          </ul>
            <p>Marketing performance reports</p>
            
            <div>
              <p>delivery time 2-3 weeks</p>
              <p>price: 3500 (- 500 in ads si alte programe)</p>
              <p>30% upfront payment</p>
            </div>
        </div>
          
           
       </div>
       <p>or make your own plan and we make separate price but be carefull for needy people wich will want many things for a small price</p>
  

    </div> 
    </>
  )
}

export default Pachete



