import "./MarkeSolution.css"
import { Link } from "react-router-dom"
import peopleImg from "../../../assets/images/marketing/marke_people.webp"
import chessImg from "../../../assets/images/marketing/marke_chess.webp"
import ladderImg from "../../../assets/images/marketing/marke_ladder.webp"
import coinsimg from "../../../assets/images/marketing/marke_coins.webp"

const Markesolution = () => {
  return (
  <div className="marke_solubion_background">
    <div className="marke_solution_container">
      <h1>Our Solutions</h1>
      {/* first solution */}
      <div className="marke_solution">
      <img src={chessImg} alt="solution" />
      <h2>Custom Strategy That Converts</h2>
      <p>We build a custom marketing plan based on your goals, step by step. Each action has a clear purpose and is designed to deliver measurable results.</p>
      </div>
      {/* second solution */}
      <div className="marke_solution">
      <img src={peopleImg} alt="solution" />
      <h2>Target the Right People</h2>
      <p>Trying to appeal to everyone means your message connects with no one. Poor targeting is one of the biggest reasons marketing fails.</p>
      </div>
      {/* third solution */}
      <div className="marke_solution">
      <img src={coinsimg} alt="solution" />
      <h2>Smarter Budget, Better Results</h2>
      <p>We use A/B testing and monitor real-time results to constantly improve performance. Your budget works harder and smarter.</p>
      </div>
      {/* fourth solution */}
      <div className="marke_solution">
      <img src={ladderImg} alt="solution" />
      <h2>Ads That Sell</h2>
      <p>We create ads that sell, not just look pretty. Sharp copy, effective design, and smart targeting lead to real results.</p>
      </div>
      <div className="marke_solution_button">
         <Link to="/contact" >Contact Us</Link>
      </div>
      
  </div>
  </div>
  )
}

export default Markesolution