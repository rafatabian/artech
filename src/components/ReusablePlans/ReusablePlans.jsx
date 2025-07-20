import "./ReusablePlans.css"
import { motion } from "framer-motion"
import { Link } from "react-router-dom"
import { useLocation } from "react-router-dom"
import { FaLeaf, FaRocket } from "react-icons/fa"
import { IoExtensionPuzzle } from "react-icons/io5"



const ReusablePlans = ({data}) => {
  const location = useLocation()


  return (
    data?.length > 0 &&(
      <motion.div className="package_content_and_button_container">

    <div className={location.pathname === "/websites" ? 'package_container_websites' : 'package_container'}>
     <motion.h1
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
         viewport={{ once: true}}
      >Plans</motion.h1>
    <div className="package-grid">
      {data.map((pkg, index) => (
        <motion.div
              className="package-card"
              key={index}
              variants={{
                hidden: { opacity: 0, y: 20 },
                visible: { opacity: 1, y: 0 },
              }}
              initial="hidden"
              whileInView="visible"
              transition={{ duration: 0.5, delay: index *0.2}}
              viewport={{ once: true, amount: 0.3 }}
            >
          <div className="header">
            <h2>{pkg.tier}{index === 0 ? <FaLeaf /> : index === 1 ?<IoExtensionPuzzle /> : <FaRocket />}</h2>
            {/* <p className="subtitle">{pkg.subtitle}</p> */}
          </div>
          <ul className="features">
            {pkg.highlights.map((feature, i) => (
              <li key={i}>{feature}</li>
            ))}
          </ul>
          <p className="delivery">⏱️ {pkg.delivery}</p>
          <p className="price">{pkg.price}</p>
          <Link to="/contact" className="cta-btn">Choose Package</Link>
        </motion.div>
      ))}
    </div>
      
    </div>
    </motion.div>
    )
  )
}

export default ReusablePlans