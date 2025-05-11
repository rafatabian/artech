import "./ReusablePlans.css"

const packages = [
    {
        tier: 'Basic',
        subtitle: 'Perfect for businesses just getting started and looking for a clean, professional visual presence.',
        price: 'From £399',
        delivery: '5–7 working days',
        highlights: [
          "TO DO",
          '30-min consultation',
          '2 custom logos + 1 revision',
          'color palette + typography',
          'Brand kit (web & print)',
          'Simple brand guide (PDF)',
        ],
      },
      {
        tier: 'Standard',
        subtitle: 'A comprehensive visual identity package designed for businesses seeking consistent and strategic brand.',
        price: 'From £1,199',
        delivery: '2–3 weeks',
        highlights: [
            "TO DO",
          '1-hour strategy consultation',
          'Brand audit (optional)',
          '3 custom logos + 2 revisions',
          'Visual system (icons, patterns)',
          'Colour palette, typography, iconography)',
          'Detailed brand guide (PDF)',
          'Imagery direction guide (photography style)'

        ],
      },
      {
        tier: 'Premium',
        subtitle: 'Strategy, creativity, and execution at a high level. Designed for ambitious businesses ready to elevate their brand positioning.',
        price: 'From £3,999',
        delivery: '4–6 weeks',
        highlights: [
          'Strategy workshop (2–3h)',
          'Market & competitor research',
          'Brand architecture',
          "Complete visual identity system",
          '4 custom logos + 3 revisions',
          "Comprehensive brand guidelines (design, tone of voice, applications)",
          'Social media + presentation templates',
          '30-day post-launch support',
          "copiright"
        ],
      }]

const ReusablePlans = () => {
  return (
    <div className="package-grid">
      {packages.map((pkg, index) => (
        <div className="package-card" key={index}>
          <div className="header">
            <h2>{pkg.tier}</h2>
            <p className="subtitle">{pkg.subtitle}</p>
          </div>
          <p className="price">{pkg.price}</p>
          <ul className="features">
            {pkg.highlights.map((feature, i) => (
              <li key={i}>{feature}</li>
            ))}
          </ul>
          <p className="delivery">⏱️ {pkg.delivery}</p>
          <button className="cta-btn">Choose Package</button>
        </div>
      ))}
    </div>
  )
}

export default ReusablePlans