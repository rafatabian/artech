import "./Marketing.css"
import { lazy, useEffect } from "react"
// import packages from "../../assets/data/plansData.js"
import { Helmet } from "react-helmet-async"

// const ReusableComponent = lazy(() => import("../../components/ReusableComponent/ReusableComponent"))
// const ReusablePlans = lazy(() => import("../../components/ReusablePlans/ReusablePlans"))
const MarketingGraph = lazy(() => import("../../components/MarkeComponents/MarketingGraph/MarketingGraph.jsx")) 
const MarkeIntro = lazy(() => import("../../components/MarkeComponents/MarkeIntro/MarkeIntro.jsx"))
const MarkeIssues = lazy(() => import("../../components/MarkeComponents/MarkeIssue/MarkeIssue.jsx"))
const MarkeSolution = lazy(() => import("../../components/MarkeComponents/MarkeSolution/MarkeSolution.jsx"))
const MarkeSteps = lazy(() => import("../../components/MarkeComponents/MarkeSteps/MarkeSteps.jsx"))
const MarkeStory = lazy(() => import("../../components/MarkeComponents/MarkeStory/MarkeStory.jsx"))
const MarkeMotivational = lazy(() => import("../../components/MarkeComponents/MarkeMotivational/MarkeMotivational.jsx"))
const MarkeServices = lazy(() => import("../../components/MarkeComponents/MarkeServices/MarkeServices.jsx"))



const HomeMarketing = () => {

  // scroll to top
useEffect(() => {
  window.scrollTo(0, 0)
}, [])




  return (
    <>
     <Helmet>
      <title>Marketing</title>
      <meta name="description" content="Creste-ti numarul de vizitatori pe pagina si atrage mai multe priviri cu noi"/>
      <link rel="canonical" href="https://artech-agency.co/#/marketing"/>
    </Helmet>
    <div className="marketing_container">
      <MarkeIntro />
    <MarkeIssues />
    <MarkeSolution />
    <MarkeSteps />
    <MarkeServices />
    <MarkeStory />
     {/* { packages && <ReusablePlans data={packages.Marketing} name="Marketing"/>} */}
    <MarketingGraph/>
    <MarkeMotivational />
    

    </div>

    
    

       {/* <ReusableComponent props={marketingProps}/> */}
       
      
    </>
   
  )
}

export default HomeMarketing