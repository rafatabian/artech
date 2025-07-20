import "./WebSteps.css"
import { motion } from "framer-motion"


const WebSteps = () => {
  return (
    <motion.div className="web_steps_background">
        <div className="web_steps">
            <motion.h1
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
         viewport={{ once: true}}
      >Step-by-step process</motion.h1>
            {/* first banner */}
            <motion.div
              className="web_step_banner"
              variants={{
                hidden: { opacity: 0, y: 20 },
                visible: { opacity: 1, y: 0 },
              }}
              initial="hidden"
              whileInView="visible"
              transition={{ duration: 0.5}}
            viewport={{ once: true, amount: 0.2 }}
            >
                <div className="number_conteiner">
                   <h3>1</h3>  
                </div>
                <div className="web_step_texts">
                    <h2>Planing and Strategy</h2>
                    <p>We start by understanding your website’s purpose whether it’s to sell, showcase, or inform. Together, we define the structure, key content, pages, and functionality your audience expects. We also help you choose the right hosting setup for your needs.</p>
                </div>
            </motion.div>
            {/* second banner */}
             <motion.div
              className="web_step_banner"
              variants={{
                hidden: { opacity: 0, y: 20 },
                visible: { opacity: 1, y: 0 },
              }}
              initial="hidden"
              whileInView="visible"
              transition={{ duration: 0.5}}
            viewport={{ once: true, amount: 0.3 }}
            >
                <div className="number_conteiner">
                     <h3>2</h3>
                </div>
                <div className="web_step_texts">
                    <h2>Design and Colors</h2>
                    <p>We create a design that feels right for your brand and easy for your visitors. From colors and fonts to layout and logo, everything is thoughtfully combined to deliver a great user experience and a professional look.</p>
                </div>
            </motion.div>
            {/* third banner */}
            <motion.div
              className="web_step_banner"
              variants={{
                hidden: { opacity: 0, y: 20 },
                visible: { opacity: 1, y: 0 },
              }}
              initial="hidden"
              whileInView="visible"
              transition={{ duration: 0.5}}
              viewport={{ once: true, amount: 0.3 }}
            >
                <div className="number_conteiner">
                   <h3>3</h3>  
                </div>
                <div className="web_step_texts">
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

export default WebSteps