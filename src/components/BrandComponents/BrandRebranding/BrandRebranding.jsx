import "./BrandRebranding.css"
import firstBussCard from "../../../assets/images/branding/brand_first_visit_card.webp"
import secondBussCard from "../../../assets/images/branding/brand_second_visit_card.webp"


const BrandRebranding = () => {
  return (
 <section className="rebranding-section">
  <div className="rebranding-container">
    <h2 className="rebranding-title">Why Rebranding Works</h2>

    <div className="card-comparison">
      {/* Before Card */}
      <div className="card before-card">
        <img
          src={firstBussCard}
          alt="Old Business Card"
          className="card-image"
        />
        <h3 className="card-label">Before</h3>
        <p className="card-description">Unstructured, low contrast, easy to ignore.</p>
      </div>

      {/* After Card */}
      <div className="card after-card">
        <img
          src={secondBussCard}
          alt="New Business Card"
          className="card-image"
        />
        <h3 className="card-label">After</h3>
        <p className="card-description">Clear hierarchy, bold contrast, instantly memorable.</p>

        <ul className="card-benefits">
          <li>Strong visual identity</li>
          <li>Designed for clarity and impact</li>
          <li>Consistent with brand values</li>
          <li>Built to stand out and convert</li>
        </ul>
      </div>
    </div>

    {/* CTA */}
    <div className="cta">
      <a href="#contact" className="cta-button">
        Start Rebranding
      </a>
    </div>
  </div>
</section>

  )
}

export default BrandRebranding