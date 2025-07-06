import "./Home_faq.css"
import { useState } from "react"
import { Link } from "react-router-dom"
import { motion } from "framer-motion"

const Home_faq = () => {
    const [show, setShow] = useState(0)

    const handleQuestion = (e) => {
        if(show === e){
            setShow(0)
        }else{
            setShow(e)
        }
    }


  return (
     <div className="home_faq_background">
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
        <motion.h1
             className="faq_title"
              variants={{
                hidden: { opacity: 0, y: 20 },
                visible: { opacity: 1, y: 0 },
              }}
              transition={{ duration: 0.5 }}
            >Frequently asked questions</motion.h1>

        <motion.div
             className="home_faq_container"
              variants={{
                hidden: { opacity: 0, y: 20 },
                visible: { opacity: 1, y: 0 },
              }}
              transition={{ duration: 0.5 }}
            >
            {/* first question */}
          <div className="home_faq_question" onClick={() => handleQuestion(1)} >
            <h2>How long does it take?</h2>
            {show === 1 ? <p>Custom websites can take 1 to 4 weeks for simpler projects and up to 2–3 months for more advanced ones. Branding services like logos, colors, and business cards usually take 2–5 days. Marketing campaigns (ads, content, analytics) start within a few days and are ongoing based on your goals. We always provide a clear timeline before starting and we stick to it.</p> : null}
          </div>
          {/* second question */}
          <div className="home_faq_question" onClick={() => handleQuestion(2)} >
            <h2>What if I don’t like the first version?</h2>
            {show === 2 ? <p>No worries your satisfaction matters. We include unlimited revisions during the project to make sure you’re 100% happy with the result. You’ll be involved in every step so we build something that truly fits your business.</p> : null}
          </div>
          {/* third question */}
          <div className="home_faq_question" onClick={() => handleQuestion(3)} >
            <h2>Do I own my website after it’s done?</h2>
            {show === 3 ? <p>Absolutely. Everything we create for you, website, logo, branding, marketing materials is 100% yours. You’ll have full access and control, with no hidden fees or limitations.</p> : null}
          </div>
          {/* fourth question */}
          <div className="home_faq_question" onClick={() => handleQuestion(4)} >
            <h2>Can I get updates later?</h2>
            {show === 4 ? <p>Yes, we offer ongoing updates even after the project is complete. Whether it’s a small tweak, a new section, or content changes — we’re here to keep things up to date as your business grows.</p> : null}
          </div>
        </motion.div>
        <motion.div
             className="faq_title"
              variants={{
                hidden: { opacity: 0, y: 20 },
                visible: { opacity: 1, y: 0 },
              }}
              transition={{ duration: 0.5 }}
            >
        <div className="home_faq_contact"><p>Still not sure?</p><Link to="/contact">Contact us</Link></div>
        </motion.div>
        </motion.div>
     </div>
    )
}

export default Home_faq