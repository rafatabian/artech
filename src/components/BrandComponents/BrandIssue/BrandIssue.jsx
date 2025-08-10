import "./BrandIssue.css"

const BrandIssue = () => {
  const data = [
    {
      before: "My brand feels unclear and forgettable",
      after: "A distinctive brand that captures attention instantly",
    },
    {
      before: "I struggle to communicate my value clearly",
      after: "Messaging that connects deeply with my ideal clients",
    },
    {
      before: "I’m unsure how to apply my branding consistently",
      after: "Ready-to-use templates that simplify every touchpoint",
    },
    {
      before: "My business blends into a crowded market",
      after: "A unique brand identity that sets you apart confidently",
    },
  ];

  return (
    <section className="brand-issue-section">
      <div className="brand-issue-container">
        <h2 className="brand-issue-heading">From Brand Uncertainty to Clear Impact</h2>

        <div className="brand-issue-grid">
          {data.map((item, index) => (
            <div key={index} className="brand-issue-card" tabIndex={0} aria-label={`Before: ${item.before}, After: ${item.after}`}>
              <div className="brand-issue-label before">Before</div>
              <p className="brand-issue-text before">“{item.before}”</p>
              <div className="brand-issue-label after">After</div>
              <p className="brand-issue-text after">{item.after}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};


export default BrandIssue