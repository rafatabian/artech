import "./MarkeStory.css"
import { Link } from "react-router-dom"
import xImage from "../../../assets/images/marketing/marke_story.jpg"

const MarkeStory = () => {
  return (
    <div className="marke_story_background">
      <div className="marke_story_container">
        <div className="marke_story_image">
          <img src={xImage} alt="Marketing Story" />
        </div>
        <div className="marke_story_text">
          <h1>Real Results</h1>
          <h2>See how one of our clients skyrocketed their traffic by over 10x</h2>
          <h3>A Real Success Story</h3>
          <p>One of our clients came to us with a great product but barely any traffic. After a consultation, we developed and launched a targeted strategy tailored to their business.</p>
          <p>The results? they started receiving daily visits, new leads, and conversions, all in weeks </p>
          <Link to="/contact" className="marke_story_button">Free consultatioon</Link>
        </div>
        
      </div>
    </div>
  )
}

export default MarkeStory