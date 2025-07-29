import "./MarketingGraph.css";
import { useRef, useState, useEffect } from "react";
import CountUp from "react-countup";
import { motion } from "framer-motion";


const MarketingGraph = () => {

    const ref = useRef();
      const [inView, setInView] = useState(false);
    
      useEffect(() => {
          const element = ref.current;
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
      if (element) observer.unobserve(element);
    };
      }, []);
    

  return (
    <div className="marke_graph_background">
    <section ref={ref} className="marketing_graps_container">
        <h1>Smart campaigns, more customers</h1>
        <p>We make marketing work for you</p>
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
    </section>
        </div>
  )
}

export default MarketingGraph