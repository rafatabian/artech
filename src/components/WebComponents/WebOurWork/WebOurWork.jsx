import "./WebOurWork.css"
import { motion } from "framer-motion"
import { FiTool } from "react-icons/fi";
import { Link } from "react-router-dom";
import our_work_img_2 from "../../../assets/images/websites/web_our_work_2.webp"
import our_work_img_3 from "../../../assets/images/websites/web_our_work_3.webp"


const WebOurWork = () => {
  return (
    <motion.div className="web_work">
 
        <motion.h1
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
         viewport={{ once: true}}
      >Our work</motion.h1>
        <div className="web_work_cards_conteiner">
            {/* second card */}
            <motion.div
              className="web_work_card" 
              variants={{
                hidden: { opacity: 0, y: 20 },
                visible: { opacity: 1, y: 0 },
              }}
              initial="hidden"
              whileInView="visible"
              transition={{ duration: 0.5}}
            viewport={{ once: true }}
            >
                <img src={our_work_img_2} alt="project" />
                <h2>E-commerce</h2>
                <p>We developed a custom online store where users can quickly search, browse, and discover products without delays. Built for speed and performance, the site loads in under 1s and offers a seamless shopping experience on any device.</p>
                <Link to="https://rafatabian.github.io/store" aria-label="link to propject">Discover</Link>
            </motion.div>
            {/* third card */}
            <motion.div
              className="web_work_card"
              variants={{
                hidden: { opacity: 0, y: 20 },
                visible: { opacity: 1, y: 0 },
              }}
              initial="hidden"
              whileInView="visible"
              transition={{ duration: 0.5, delay: 0.2 }}
            viewport={{ once: true}}
            >
                <img src={our_work_img_3} alt="project" />
                <h2>Xplora+</h2>
                <p>We created a sleek, fast website for Explora to promote their social app. Clear messaging and smart design helped boost downloads by over 300%.</p>
                <Link to="https://rafatabian.github.io/xplora/" aria-label="link to propject">Discover</Link>
            </motion.div>
             {/* first card */}
            <motion.div
              className="web_work_card"
              variants={{
                hidden: { opacity: 0, y: 20 },
                visible: { opacity: 1, y: 0 },
              }}
              initial="hidden"
              whileInView="visible"
              transition={{ duration: 0.5, delay: 0.4 }}
            viewport={{ once: true }}
            > 
                {/* <img src={our_work_img_2} alt="project" /> */}
                <FiTool />
                <h2>AI assistant</h2>
                <p>We built a custom AI assistant using React, designed with a clean and intuitive interface to ensure a smooth user experience. It’s fast, reliable, and always ready to help making advanced AI accessible and useful for everyday tasks.</p>
                <Link to="" aria-label="link to propject">Discover</Link>
            </motion.div>
        </div>
    </motion.div>
  )
}

export default WebOurWork