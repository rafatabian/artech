import "./BrandIssue.css"

const Brandissue = () => {

  const data = [
    {
      before: "My logo doesn’t look professional",
      after: "A logo I’m proud to show everywhere",
    },
    {
      before: "People don’t get what I offer",
      after: "Clear messaging that speaks to my audience",
    },
    {
      before: "I don’t know how to use my brand",
      after: "Templates and tools that make it easy",
    },
    {
      before: "I’m blending in with others",
      after: "A brand that actually stands out",
    },
  ]; 
  
  return (
    <section className="brand_section">
      <div className="brand_container">
        <h2 className="brand_heading">From Frustrated to Fully Branded</h2>

        <div className="brand_grid">
          {data.map((item, index) => (
            <div key={index} className="brand_card">
              <div className="brand_label_before">Before</div>
              <p className="brand_before_text">“{item.before}”</p>
              <div className="brand_label_after">After</div>
              <p className="brand_after_text">{item.after}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Brandissue