import "./Plans.css"
import { lazy } from "react"
import { Helmet } from "react-helmet-async"
import { useRef } from "react"

const PlansIntro = lazy(() => import("../../components/PlansComponents/PlansIntro/PlansIntro"))
const PlansDifference = lazy(() => import("../../components/PlansComponents/PlansDifference/PlansDifferrence"))
const PlansPlans = lazy(() => import("../../components/PlansComponents/PlansPlans/PlansPlans"))
const PlansMotivational = lazy(() => import("../../components/PlansComponents/PlansMotivational/PlansMotivational"))





const Pachete = () => {
const targetRef = useRef(null)

  

  return (
    <>
      <Helmet>
        <title>Pachete</title>
        <meta
          name="description"
          content="Alege pachetul potrivit pentru nevoile tale, fie ca vrei ceva simplu sau ceva mai complex."
        />
        <link rel="canonical" href="https://artech-agency.co/#/plans" />
      </Helmet>
       <div className="plans_main_continer">

       
      <PlansIntro scrollToRef={targetRef}/>
      <PlansDifference />
      <PlansPlans sectionRef={targetRef}/>
      <PlansMotivational />

        </div>
    </>
  );
};

export default Pachete;



