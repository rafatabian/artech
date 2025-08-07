import "./BrandSteps.css"
import { motion } from "framer-motion"

const BrandSteps = () => {
  return (
    <motion.div className="brand_steps_background">
        <div className="brand_steps">
            <motion.h1
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}  
        transition={{ duration: 0.6, ease: "easeOut" }}
         viewport={{ once: true}}
      >Step-by-step process</motion.h1>
            {/* first banner */}
            <motion.div
              className="brand_step_banner"
              variants={{
                hidden: { opacity: 0, y: 20 },
                visible: { opacity: 1, y: 0 },
              }}
              initial="hidden"
              whileInView="visible"
              transition={{ duration: 0.5}}
            viewport={{ once: true, amount: 0.2 }}
            >
                <div className="brand_number_conteiner">
                   <h3>1</h3>  
                </div>
                <div className="brand_step_texts">
                    <h2>Build Your Brand Core</h2>
                    <p>Before we design anything, we define everything. We start by uncovering your brand’s essence who you are, what makes you different, and how you should be perceived. From audience targeting to mission, vision, and brand personality, we lay the foundation that sets your brand apart and ensures it’s built to last.</p>
                </div>
            </motion.div>
            {/* second banner */}
             <motion.div
              className="brand_step_banner"
              variants={{
                hidden: { opacity: 0, y: 20 },
                visible: { opacity: 1, y: 0 },
              }}
              initial="hidden"
              whileInView="visible"
              transition={{ duration: 0.5}}
            viewport={{ once: true, amount: 0.3 }}
            >
                <div className="brand_number_conteiner">
                     <h3>2</h3>
                </div>
                <div className="brand_step_texts">
                    <h2>Apply It Everywhere</h2>
                    <p>Now that your brand is ready, we help you show it off consistently, across every touchpoint. From business cards to social media and packaging, we design everything your business needs to look professional, cohesive, and instantly recognizable, both online and offline.</p>
                </div>
            </motion.div>
            {/* third banner */}
            <motion.div
              className="brand_step_banner"
              variants={{
                hidden: { opacity: 0, y: 20 },
                visible: { opacity: 1, y: 0 },
              }}
              initial="hidden"
              whileInView="visible"
              transition={{ duration: 0.5}}
              viewport={{ once: true, amount: 0.3 }}
            >
                <div className="brand_number_conteiner">
                   <h3>3</h3>  
                </div>
                <div className="brand_step_texts">
                    <h2>Development</h2>
                    <p>We write clean, efficient code and fully optimise your site for speed, SEO, and performance. After launch, we run extra testing to make sure everything works perfectly and continues to support your growth.</p>
                </div>
            </motion.div>
            <motion.a
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        href="/contact"
        transition={{ duration: 0.6, ease: "easeOut"}}
        viewport={{ once: true }}
       >Start
       
    </motion.a>
        </div>
    </motion.div>
  )
}

export default BrandSteps