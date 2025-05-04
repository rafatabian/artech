import "./Home_offer.css"

const Home_offer = () => {
  return (
    <div className="pricing-wrapper" id="fair-pricing">
      <div className="pricing-content">
        <h2 className="pricing-title">Simple & Fair Pricing</h2>
        <p className="pricing-subtitle">Just <span className="price-amount">£100</span> upfront for small projects</p>
        <p className="pricing-text">For projects valued up to £500, we charge just a £100 upfront deposit to get started.
        The remaining balance is only due once the project is completed.</p>
        <p className="pricing-highlight">We will update your project till you're happy</p>
        {/* <p className="pricing-description">We value transparency, trust, and quality above all. No hidden fees, No surprises, no pressure — just great work, delivered with your satisfaction in mind.<Link to="/terms"> Terms and conditions</Link> apply.</p> */}

        <a href="#contact" className="pricing-button">Start Your Project</a>
      </div>
    </div>
  )
}

export default Home_offer