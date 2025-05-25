import "./MarketingGraph.css";
import { useRef, useState, useEffect } from "react";
import CountUp from "react-countup";
import { motion } from "framer-motion";
import { useTranslation } from "react-i18next";
import { FaRocket } from "react-icons/fa"


const MarketingGraph = () => {

    const ref = useRef();
      const [inView, setInView] = useState(false);
      const [t] = useTranslation("global");
    
      useEffect(() => {
        const observer = new IntersectionObserver(
          ([entry]) => {
            if (entry.isIntersecting) {
              setInView(true);
            }
          },
          { threshold: 1 }
        );
    
        if (ref.current) observer.observe(ref.current);
    
        return () => {
          if (ref.current) observer.unobserve(ref.current);
        };
      }, []);
    

  return (
    <section ref={ref} className="marketing_graps_container">
        <h2>{t("marketing_graph_title")}</h2>
        {inView && (
          <div className="markeging_graphs_numbers_container">
            <div>
              <p className="text-2xl">
                <CountUp end={500000} duration={2} />
              </p>
              <span>Views</span>
{/* bar */}
           <div className="marketing_graphs_bar_container">
            <motion.div
              initial={{ width: 0 }}
              animate={{ width: "100%" }}
              transition={{ duration: 2 }}
              ></motion.div>
              </div>

            </div>
            <div>
              <p className="text-2xl">
                <CountUp end={14850} duration={2.5} />
              </p>
              <span>Clicks</span>
{/* bar */}
           <div className="marketing_graphs_bar_container">
            <motion.div
              initial={{ width: 0 }}
              animate={{ width: "100%" }}
              transition={{ duration: 2 }}
              ></motion.div>
              </div>
            </div>
             <div>
              <p className="text-2xl">
                <CountUp end={2200} duration={3} />
              </p>
              <span>Leads</span>
{/* bar */}
           <div className="marketing_graphs_bar_container">
            <motion.div
              initial={{ width: 0 }}
              animate={{ width: "100%" }}
              transition={{ duration: 2 }}
              ></motion.div>
              </div>
            </div>
          </div>
        )}
            <p className="marketing_graph_scale_plan">{t("marketing_graph_scale_plan")[0]} <h5>Scale<FaRocket/></h5> {t("marketing_graph_scale_plan")[1]}</p>
    </section>
  )
}

export default MarketingGraph