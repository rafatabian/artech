import "./BrandStory.css"
import { Link } from "react-router-dom"
import marke_story_img from "../../../assets/images/branding/brand_story.webp"

const BrandStory = () => {
  return (
    <div className="brand_story_background">
      <div className="brand_story_container">
        <div className="brand_story_image">
          <img src={marke_story_img} alt="Marketing Story" />
        </div>
        <div className="brand_story_text">
          <h1>Real Impact</h1>
          <h2>Discover how our branding transformed a small business into a recognized name</h2>
          <h3>A True Transformation</h3>
          <p>One of our clients had an amazing service, but their brand lacked a clear identity. We worked closely with them to create a visual style, voice, and presence that resonated with their audience.</p>
          <p>The outcome? Their brand became instantly recognizable, their customer trust grew, and they started attracting higher-value clients within just weeks.</p>
          <Link to="/contact" className="brand_story_button">Free consultatioon</Link>
        </div>
        
      </div>
    </div>
  )
}

export default BrandStory