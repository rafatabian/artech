import "././Home_reviews.css";
import { useEffect, useState } from "react";
import { IoStar } from "react-icons/io5"
import { motion } from "framer-motion";
// images
import cori from "../../../assets/images/home/reviews/corina.jpeg"
import george from "../../../assets/images/home/reviews/george.jpeg"
import sebi from "../../../assets/images/home/reviews/sebastian.jpeg"
import ahmed from "../../../assets/images/home/reviews/ahmed.jpeg"
import vini from "../../../assets/images/home/reviews/vinicius.jpeg"
import maysa from "../../../assets/images/home/reviews/maysa.jpeg"

const Home_reviews = () => {
  const [showRewies, setShowReviews] = useState(3)

  const reviewsData = [{
    image: george,
    name:"George",
    description:"I keep getting compliments on how smooth my site looks and works. The ongoing support is amazing too. Thank you guys!"
  },
{
    image:cori,
    name:"Corina",
    description:"I got a full rebrand with a new logo, business card, and some amazing video edits for my social media👌🏻👌🏻👌🏻"
  },
{
    image:vini,
    name:"Vinicius",
    description:"Told them my idea and they just made it happen. Domain, branding, everything one less headache for me"
  },
{
    image:ahmed,
    name:"Ahmed",
    description:"They design me a new logo and an amazing website, it honestly looks so professional now"
  },
{
    image:sebi,
    name:"Sebi",
    description:"Amazing customer service! I'm really happy they explained everything and helped me choose the right service. I'm glad I went with them."
  },
{
    image:maysa,
    name:"Maysa",
    description:"They’ve been helping me with updates and tweaks to my website whenever I need, super responsive and easy to talk to."
  }]

  // check if they are on the phone and show all reviews
  useEffect(() => {
    if (window.innerWidth < 700) {
      setShowReviews(6);
    }
  },[])

  return (
    <div className="reviews_background">
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
              className="reviews_title"
              variants={{
                hidden: { opacity: 0, y: 20 },
                visible: { opacity: 1, y: 0 },
              }}
              transition={{ duration: 0.5 }}
            >Trusted by Clients in London and Beyond</motion.h1>
      <motion.h2
              className="reviews_subtitle"
              variants={{
                hidden: { opacity: 0, y: 20 },
                visible: { opacity: 1, y: 0 },
              }}
              transition={{ duration: 0.5 }}
            >See how we helped others go from invisible to unforgettable</motion.h2>
      <motion.div
              className="reviews_stars"
              variants={{
                hidden: { opacity: 0, y: 20 },
                visible: { opacity: 1, y: 0 },
              }}
              transition={{ duration: 0.5 }}
            >
        <IoStar />
        <IoStar />
        <IoStar />
        <IoStar />
        <IoStar />
      </motion.div>
      <motion.div
              className="reviews_container"
              variants={{
                hidden: { opacity: 0, y: 20 },
                visible: { opacity: 1, y: 0 },
              }}
              transition={{ duration: 0.5 }}
            >
         {reviewsData.slice(0, showRewies).map((item, index) => (
          <div className="review_card" key={index * 2}>
              <img src={item.image} alt="reviewer photo"/>
              <div><IoStar /><IoStar /><IoStar /><IoStar /><IoStar /> </div>
              <p>{item.description}</p>
              <h3>{item.name}</h3>
          </div>
         ))}
      </motion.div>

     <motion.div
              variants={{
                hidden: { opacity: 0, y: 20 },
                visible: { opacity: 1, y: 0 },
              }}
              transition={{ duration: 0.5 }}
            >
      {showRewies === 3 ? <button className="revioews_arror" onClick={() => setShowReviews(6)}>Show more</button> : null}
      </motion.div>
      </motion.div>
    </div>
  )
}

export default Home_reviews