import "./WebIssues.css"
import { motion } from "framer-motion"
import web_issues_img from "../../../assets/images/websites/web_issues.webp"


const WebIssues = () => {
  return (
    <div className="web_issues_background">
      <motion.div 
  initial="hidden"
  whileInView="visible"
  viewport={{ once: true }}
  variants={{
    visible: {
      transition: {
        staggerChildren: 0.2,
      },
    },
  }}
>
        <div className="web_issues">
          <motion.h1
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        viewport={{ once: true }}
      >Common issues</motion.h1>
      
        <div className="web_issues_continer">

          <motion.div
              variants={{
                hidden: { opacity: 0, y: 20 },
                visible: { opacity: 1, y: 0 },
              }}
              transition={{ duration: 0.5}}
            >
         <img src={web_issues_img} alt="issues" />
      </motion.div>
           
          <div>
            <motion.span
              variants={{
                hidden: { opacity: 0, y: 20 },
                visible: { opacity: 1, y: 0 },
              }}
              transition={{ duration: 0.5}}
            >No clear strategy</motion.span>
            <motion.span
              variants={{
                hidden: { opacity: 0, y: 20 },
                visible: { opacity: 1, y: 0 },
              }}
              transition={{ duration: 0.5}}
            >Marketing campains are not optimised</motion.span>
            <motion.span
              variants={{
                hidden: { opacity: 0, y: 20 },
                visible: { opacity: 1, y: 0 },
              }}
              transition={{ duration: 0.5}}
            >No testing or data-based improvement</motion.span>
            <motion.span
              variants={{
                hidden: { opacity: 0, y: 20 },
                visible: { opacity: 1, y: 0 },
              }}
              transition={{ duration: 0.5}}
            >Ads that look good but don’t sell</motion.span>
            <motion.span
              variants={{
                hidden: { opacity: 0, y: 20 },
                visible: { opacity: 1, y: 0 },
              }}
              transition={{ duration: 0.5}}
            >No ungoing support</motion.span>
          </div>
        </div>
        </div>
      </motion.div>
      </div>
  )
}

export default WebIssues