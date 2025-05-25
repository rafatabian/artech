
import { lazy, Suspense, useEffect } from "react"
import packages from "../../assets/data/plansData.js"
import { Helmet } from "react-helmet-async"
import firstMarketingURL from "../../assets/images/marketing/marketing_first_img.webp"
import secondMarktingURL from "../../assets/images/marketing/marketing_marketing_img.webp"
import thirdMarketingURL from "../../assets/images/marketing/marketing_digital.webp"
import forthMakretingURL from "../../assets/images/marketing/marketing_strategy.webp"
import { useTranslation } from "react-i18next"

const ReusableComponent = lazy(() => import("../../components/ReusableComponent/ReusableComponent"))
const ReusablePlans = lazy(() => import("../../components/ReusablePlans/ReusablePlans"))
const MarketingGraph = lazy(() => import("../../components/MarketingGraph/MarketingGraph.jsx")) 



const HomeMarketing = () => {
  const [t] = useTranslation("global")

  // scroll to top
useEffect(() => {
  window.scrollTo(0, 0)
}, [])

  const marketingProps={
    titles: ["MARKETING", `${t("marketing_title2")}`, `${t("marketing_title3")}`, `${t("marketing_title4")}`],
    headings: [`${t("marketing_sub1")}`, `${t("marketing_sub2")}`, `${t("marketing_sub3")}`, `${t("marketing_sub4")}` ],
    firstImage: firstMarketingURL,
    secondImage: secondMarktingURL,
    thirdImage: thirdMarketingURL,
    forthImage: forthMakretingURL,
    firstText: `${t("marketing_details1")}`,
    secondText:[`${t("marketing_details2")}`, `${t("marketing_details2.1")}`], 
    thirdText: [`${t("marketing_details3")}`, `${t("marketing_details3.1")}`],
    forthText: [`${t("marketing_details4")}`, `${t("marketing_details4.1")}`],
}



  return (
    <>
     <Helmet>
      <title>Marketing</title>
      <meta name="description" content="Creste-ti numarul de vizitatori pe pagina si atrage mai multe priviri cu noi"/>
      <link rel="canonical" href="https://artech-agency.co/#/marketing"/>
    </Helmet>

       <ReusableComponent props={marketingProps}/>
       
       <MarketingGraph/>

      { packages && <ReusablePlans data={packages.Marketing} name="Marketing"/>}
    </>
   
  )
}

export default HomeMarketing