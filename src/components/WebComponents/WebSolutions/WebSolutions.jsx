import "./WebSolutions.css"
import { motion } from "framer-motion"
import web_speed_insights from "../../../assets/images/websites/web_solutions_img.webp"
import web_seo from "../../../assets/images/websites/web_solutions_seo.webp"
import web_colors from "../../../assets/images/websites/web_colors.webp"
import web_support from "../../../assets/images/websites/web_support.webp"

const WebSolutions = () => {
  return (
    <motion.div 
    className="web_solutions_container"
>
        <motion.h1
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
         viewport={{ once: true}}
      >Our solutions</motion.h1>
        {/* first container */}
                 <motion.div
              className="web_solution" 
              variants={{
                hidden: { opacity: 0, y: 20 },
                visible: { opacity: 1, y: 0 },
              }}
              initial="hidden"
              whileInView="visible"
              transition={{ duration: 0.5}}
            viewport={{ once: true, amount: 0.3 }}
            >
        <div className="web_solution_text">
            <h2>Websites that loads in under 2s guranteed</h2>

      <p>Our websites load in under 2 seconds and often under 1 second on high-speed connections. Every site is tested with Google’s top performance tools and optimised for speed on all devices.</p>
        </div>
        <div>
            <img src={web_speed_insights} alt="solution" />
        </div>
         </motion.div>
       {/* second container */}
       <motion.div
              className="web_solution_reverse" 
              variants={{
                hidden: { opacity: 0, y: 20 },
                visible: { opacity: 1, y: 0 },
              }}
              initial="hidden"
              whileInView="visible"
              transition={{ duration: 0.5}}
                viewport={{ once: true, amount: 0.3 }}
            >
        <div className="web_solution_text_reverse">
            <h2>SEO Optimisation</h2>
      <p>We optimise your website to rank higher on Google and attract free long-term traffic.Speed, structure, and accessibility all impact SEO and we take care of it all so you don’t have to.</p>
        </div>
        <div>
            <img src={web_seo} alt="solution" />
        </div>
              </motion.div>
       {/* third container */}
       <motion.div
              className="web_solution" 
              variants={{
                hidden: { opacity: 0, y: 20 },
                visible: { opacity: 1, y: 0 },
              }}
              initial="hidden"
              whileInView="visible"
              transition={{ duration: 0.5}}
                viewport={{ once: true, amount: 0.3 }}
            >
        <div className="web_solution_text">
            <h2>Custom design, Unlimited Possibilities</h2>
            <p>We design your website around your goals and purpose, whether that’s getting more clients, bookings, or sales. From the color palette and branding to the messaging and structure, everything is crafted to help you stand out</p>
        </div>
        <div>
            <img src={web_colors} alt="solution" />
        </div>
         </motion.div>
       {/* fourth container */}
       <motion.div
              className="web_solution_reverse"
              variants={{
                hidden: { opacity: 0, y: 20 },
                visible: { opacity: 1, y: 0 },
              }}
              initial="hidden"
              whileInView="visible"
              transition={{ duration: 0.5}}
              viewport={{ once: true, amount: 0.3}}
            >
        <div className="web_solution_text_reverse">
             <h2>Ongoing support</h2>
        <p>We help you make the right choices from layout and design to structure and content. You’ll always speak to real people, not chatbots, and if you need help after your site is live, we offer ongoing support to keep things running smoothly.</p>
        </div>
        <div>
            <img src={web_support} alt="solution" />
        </div>
       </motion.div>
       <motion.a
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        href="/plans"
        transition={{ duration: 0.6, ease: "easeOut"}}
        viewport={{ once: true }}
       >Explore our plans
       
    </motion.a>
    </motion.div>
  )
}

export default WebSolutions