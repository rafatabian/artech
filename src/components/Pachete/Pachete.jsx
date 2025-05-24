// import "./Pachete.css"
// import { useEffect, useRef } from "react"
// import { Link} from "react-router-dom"
// import { Helmet } from "react-helmet-async"
// import { useTranslation } from "react-i18next"


// const Pachete = () => {
//   const plansRef = useRef()
//   const [t] = useTranslation("global")

//   // scroll to top and to plans details when redirected from another page
// useEffect(() => {
//   const hash = window.location.hash
//   const hashParts = hash.split("/")
//   const planSelected = hashParts[hashParts.length - 1]
//   if(planSelected !== "plans"){
//     plansRef.current.scrollIntoView()
//   }else{
//   window.scrollTo(0, 0)
//   }
// }, [])




//   return (
//     <>
//      <Helmet>
//       <title>Pachete</title>
//       <meta name="description" content="Alege pachetul potrivit pentru nevoile tale, fie ca vrei ceva simplu sau ceva mai complex."/>
//       <link rel="canonical" href="https://artech-agency.co/#/plans"/>
//     </Helmet>
    
//     <div className="plans_container">
//       <h1>{t("navbar_pachete")}</h1>
//         {/* constent under plans */}  
//         <div className="plans_content" ref={plansRef}>
//          <div className="plans_content_normal">
//           <h1>STARTER</h1>
//           <p>{t("pachete_page_starter_sub")}</p>
//           <div><span>{t("pachete_page_starter_title1")}</span> <p>{t("pachete_page_starter_p1")}</p></div>
//           <div><span>{t("pachete_page_starter_title2")}</span> <p>{t("pachete_page_starter_p2")}</p></div>
//           <div><span>{t("pachete_page_starter_title3")}</span> <p>{t("pachete_page_starter_p3")}</p></div>
//           <div className="plans_button_container">
//             <Link to="/contact"> {t("pachete_page_button")} STARTER </Link>
//           </div>
//          </div> 

//          <div className="plans_content_normal" >
//           <h1>STANDARD</h1>
//           <p>{t("pachete_page_standard_sub")}</p>
//           <div><span>{t("pachete_page_standard_title1")}</span><p>{t("pachete_page_standard_p1")}</p></div>
//           <div><span>{t("pachete_page_standard_title2")}</span><p>{t("pachete_page_standard_p2")}</p></div>
//           <div><span>{t("pachete_page_standard_title3")}</span><p>{t("pachete_page_standard_p3")}</p></div>
//           <div><span>{t("pachete_page_standard_title4")}</span><p>{t("pachete_page_standard_p4")}</p></div>
//           <div><span>{t("pachete_page_standard_title5")}</span><p>{t("pachete_page_standard_p5")}</p></div>
//           <div className="plans_button_container">
//             <Link to="/contact"> {t("pachete_page_button")} STANDARD</Link>
//             </div>
//          </div>

//          <div className="plans_content_normal">
//           <h1>PRO</h1>
//           <p>{t("pachete_page_pro_sub")}</p>
//           <div><span>{t("pachete_page_pro_title1")}</span><p>{t("pachete_page_pro_p1")}</p></div>
//           <div><span>{t("pachete_page_pro_title2")}</span><p>{t("pachete_page_pro_p2")}</p></div>
//           <div><span>{t("pachete_page_pro_title3")}</span><p>{t("pachete_page_pro_p3")}</p></div>
//           <div><span>{t("pachete_page_pro_title4")}</span><p>{t("pachete_page_pro_p4")}</p></div>
//           <div><span>{t("pachete_page_pro_title5")}</span><p>{t("pachete_page_pro_p5")}</p></div>
//           <div className="plans_button_container">
//             <Link to="/contact"> {t("pachete_page_button")} PRO</Link>
//           </div>
//          </div>

//         </div>

//         <div className="plans_final_text">
//           <span>{t("pachete_final_text")}</span>
    
//          <div className="plans_button_last_container">
//             <Link to="/contact">{t("branding_contact")}</Link>  
//           </div>
            
//        </div>

//     </div>
//     </>
//   )
// }

// export default Pachete



// import { motion } from "framer-motion";
// import { useEffect, useRef, useState } from "react";

// // ✅ RadialChart component
// const RadialChart = ({ percentage }) => {
//   const radius = 50;
//   const stroke = 8;
//   const circumference = 2 * Math.PI * radius;

//   const ref = useRef();
//   const [inView, setInView] = useState(false);

//   useEffect(() => {
//     const observer = new IntersectionObserver(
//       ([entry]) => setInView(entry.isIntersecting),
//       { threshold: 0.5 }
//     );
//     if (ref.current) observer.observe(ref.current);
//     return () => observer.disconnect();
//   }, []);

//   const progress = (percentage / 100) * circumference;

//   return (
//     <div ref={ref} className="w-32 h-32">
//       <svg width="100%" height="100%" viewBox="0 0 120 120">
//         <circle
//           cx="60"
//           cy="60"
//           r={radius}
//           fill="none"
//           stroke="#e5e7eb"
//           strokeWidth={stroke}
//         />
//         <motion.circle
//           cx="60"
//           cy="60"
//           r={radius}
//           fill="none"
//           stroke="#3b82f6"
//           strokeWidth={stroke}
//           strokeDasharray={circumference}
//           strokeDashoffset={circumference}
//           animate={{
//             strokeDashoffset: inView ? circumference - progress : circumference,
//           }}
//           transition={{ duration: 1.5, ease: "easeOut" }}
//           strokeLinecap="round"
//         />
//         <text
//           x="60"
//           y="65"
//           textAnchor="middle"
//           className="text-xl font-bold fill-blue-600"
//         >
//           {inView ? `${percentage}%` : "0%"}
//         </text>
//       </svg>
//     </div>
//   );
// };

// export const Pachete = () => (
//   <div className="flex justify-center gap-10 mt-20">
//     <RadialChart percentage={75} />
//     <RadialChart percentage={90} />
//     <RadialChart percentage={60} />
//   </div>
// );
// export default Pachete;

import React, { useRef, useState, useEffect } from "react";
import CountUp from "react-countup";
import { motion } from "framer-motion";

const Pachete = () => {
  const ref = useRef();
  const [inView, setInView] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setInView(true);
        }
      },
      { threshold: 0.5 } // Trigger when 50% of the section is visible
    );

    if (ref.current) observer.observe(ref.current);

    return () => {
      if (ref.current) observer.unobserve(ref.current);
    };
  }, []);
  // ✅ RadialChart component
const RadialChart = ({ percentage }) => {
  const radius = 50;
  const stroke = 8;
  const circumference = 2 * Math.PI * radius;

  const ref = useRef();
  const [inView, setInView] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => setInView(entry.isIntersecting),
      { threshold: 0.5 }
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);

  const progress = (percentage / 100) * circumference;

  return (
    <div ref={ref} className="w-32 h-32">
      <svg width="100%" height="100%" viewBox="0 0 120 120">
        <circle
          cx="60"
          cy="60"
          r={radius}
          fill="none"
          stroke="#e5e7eb"
          strokeWidth={stroke}
        />
        <motion.circle
          cx="60"
          cy="60"
          r={radius}
          fill="none"
          stroke="#3b82f6"
          strokeWidth={stroke}
          strokeDasharray={circumference}
          strokeDashoffset={circumference}
          animate={{
            strokeDashoffset: inView ? circumference - progress : circumference,
          }}
          transition={{ duration: 1.5, ease: "easeOut" }}
          strokeLinecap="round"
        />
        <text
          x="60"
          y="65"
          textAnchor="middle"
          className="text-xl font-bold fill-blue-600"
        >
          {inView ? `${percentage}%` : "0%"}
        </text>
      </svg>
    </div>
  );
};

  return (
    <section ref={ref} className="h-screen flex items-center justify-center">
      <div className="text-center">
        <h2 className="text-3xl mb-4">Our Growth</h2>
        {inView && (
          <div className="flex justify-center gap-10">
            <div>
              <p className="text-2xl">
                <CountUp end={5000} duration={2} />
              </p>
              <span>Users</span>
            </div>
            <div>
              <p className="text-2xl">
                <CountUp end={1200} duration={2} />
              </p>
              <span>Downloads</span>
            </div>
          </div>
        )}

        {/* Graph Example */}
        <div className="mt-10 w-64 h-4 bg-gray-200 rounded-full overflow-hidden">
          {inView && (
            <motion.div
              className="h-full bg-blue-500"
              initial={{ width: 0 }}
              animate={{ width: "80%" }}
              transition={{ duration: 2 }}
            />
          )}

        </div>
      </div>
      <div className="flex justify-center gap-10 mt-20">
    <RadialChart percentage={75} />
    <RadialChart percentage={90} />     
    <RadialChart percentage={60} />
  </div>
    </section>
  );
};

export default Pachete
