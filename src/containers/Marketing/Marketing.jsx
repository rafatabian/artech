
import { lazy, useEffect } from "react"
import firstMarketingURL from "../../assets/images/marketing/marketing_first_img.webp"
import secondMarktingURL from "../../assets/images/marketing/marketing_marketing_img.webp"
import thirdMarketingURL from "../../assets/images/marketing/marketing_digital.webp"
import forthMakretingURL from "../../assets/images/marketing/marketing_strategy.webp"
const ReusableComponent = lazy(() => import("../../components/ReusableComponent/ReusableComponent"))


const HomeMarketing = () => {

  // scroll to top
useEffect(() => {
  window.scrollTo(0, 0)
}, [])

  const marketingProps={
    titles: ["MARKETING", "MARKETING DIGITAL", "ANALIZA SI RAPOARTE", "STRATEGII DE MARKETING"],
    headings: ["Arată-le lumii cine esti", "Social Media Marketing", "Monitorizare continua", "Planificare strategica" ],
    firstImage: firstMarketingURL,
    secondImage: secondMarktingURL,
    thirdImage: thirdMarketingURL,
    forthImage: forthMakretingURL,
    firstText: "Într-o lume în continuă schimbare, marketingul inteligent este motorul creșterii și al succesului. Dacă vrei să-ți extinzi vizibilitatea, să atragi clienți valoroși și să îți consolidezi brandul, suntem partenerul de care ai nevoie. Cu strategii personalizate și soluții inovatoare, te ajutăm să transformi obiectivele afacerii tale în realitate. Descoperă cum serviciile noastre de marketing îți pot propulsa afacerea la următorul nivel.",
    secondText: "Oferim soluții complete de marketing digital. Social Media Marketing: gestionăm campanii eficiente pe Facebook, Instagram, LinkedIn și TikTok pentru a crește implicarea clienților. Publicitate Online (PPC): implementăm campanii PPC pe Google Ads și Facebook Ads, maximizând ROI-ul. Email Marketing: creăm campanii de email personalizate, folosind automatizări și segmentări pentru a crește rata de conversie.",
    thirdText: "Oferim monitorizare continuă a campaniilor tale de marketing pentru a identifica oportunități de optimizare și a asigura rezultate maxime. Îți furnizăm rapoarte detaliate și accesibile, împreună cu analize bazate pe date pentru decizii informate. Abordarea noastră personalizată, combinată cu creativitate și inovație, îți oferă soluții unice, adaptate nevoilor tale. Ne concentrăm pe rezultate măsurabile și ajustăm constant strategiile pentru a maximiza ROI-ul fiecărei campanii.",
    forthText: "Pornim cu o analiză detaliată a afacerii tale, pieței și concurenței pentru a dezvolta o strategie adaptată nevoilor tale. Oferim consultanță bazată pe obiectivele tale, urmată de un plan strategic pe termen scurt și lung, cu tactici clare și termene precise pentru implementare.",
}

  return (
   <ReusableComponent props={marketingProps}/>
  )
}

export default HomeMarketing