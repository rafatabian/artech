import { lazy, useEffect } from "react"
import { Helmet } from "react-helmet-async"
import packages from "../../assets/data/plansData.js"

//images tools we use in branding
import img1 from "../../assets/images/moving_section_icons/branding/img1.webp"
import img2 from "../../assets/images/moving_section_icons/branding/img2.webp"
import img3 from "../../assets/images/moving_section_icons/branding/img3.webp"
import img4 from "../../assets/images/moving_section_icons/branding/img4.webp"
import img5 from "../../assets/images/moving_section_icons/branding/img5.webp"
import img6 from "../../assets/images/moving_section_icons/branding/img6.webp"
import img7 from "../../assets/images/moving_section_icons/branding/img7.webp"
import img8 from "../../assets/images/moving_section_icons/branding/img8.webp"
import img9 from "../../assets/images/moving_section_icons/branding/img9.webp"
import img10 from "../../assets/images/moving_section_icons/branding/img10.webp"
import img11 from "../../assets/images/moving_section_icons/branding/img11.webp"
import img12 from "../../assets/images/moving_section_icons/branding/img12.webp"
// components
const BrandIntro = lazy(() => import("../../components/BrandComponents/BrandIntro/BrandIntro.jsx"))
const BrandIssue = lazy(() => import("../../components/BrandComponents/BrandIssue/BrandIssue.jsx"))
const BrandSteps = lazy(() => import("../../components/BrandComponents/BrandSteps/BrandSteps.jsx"))
const BrandLogos = lazy(() => import("../../components/BrandComponents/BrandLogos/BrandLogos.jsx"))
const BrandRebranding = lazy(() => import("../../components/BrandComponents/BrandRebranding/BrandRebranding.jsx"))
const BrandMotivational = lazy(() => import("../../components/BrandComponents/BrandMotivational/BrandMotivational.jsx"))
const BrandStory = lazy(() => import("../../components/BrandComponents/BrandStory/BrandStory.jsx"))
const BrandTools = lazy(() => import("../../components/BrandComponents/BrandTools/BrandTools.jsx"))

const ReusablePlans = lazy(() => import("../../components/ReusablePlans/ReusablePlans"))
const MovingSection = lazy(() => import("../../components/MovingSection/MovingSection.jsx"))


const HomeBranding = () => {


    // scroll to top
useEffect(() => {
    window.scrollTo(0, 0)
}, [])
const props = {
    firstSet: [
        { image: img1},
        { image: img2},
        { image: img3},
        { image: img4},
        { image: img5},
        { image: img6},
        
    ],

    secondSet: [
        { image: img7},
        { image: img8},
        { image: img9},
        { image: img10},
        { image: img11},
        { image: img12}
    ]
}


 return(
    <>
    <Helmet>
        <title>Branding</title>
        <meta name="description" content="Alege brandingul de top pentru ati pune afacerea pe primul loc"/>
        <link rel="canonical" href="https://artech-agency.co/#/branding"/>
    </Helmet> 

    <BrandIntro />
    <BrandIssue/>
    <BrandSteps/>
    <BrandRebranding/>
    <BrandLogos/>
    <BrandStory/>
    {packages && <ReusablePlans data={packages.Branding} name="Branding"/>}
    <BrandTools/>
    <BrandMotivational/>










    
    <MovingSection props={props}/>
    
    {/* design and text approved */}
    {/* to do move it into a separate folder and import the child here */}
<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 py-12">
  <div className="p-6 bg-white shadow-md rounded-2xl">
    <img src={img1} alt="Logo Design" className="w-10 h-10 mb-4" />
    <h3 className="text-xl font-semibold mb-2">Strategic Logo Design</h3>
    <p className="text-gray-600">Build trust and recognition with a logo tailored to your values and audience.</p>
  </div>

  <div className="p-6 bg-white shadow-md rounded-2xl">
    <img src="/icons/rebrand.svg" alt="Rebranding" className="w-10 h-10 mb-4" />
    <h3 className="text-xl font-semibold mb-2">Complete Rebranding</h3>
    <p className="text-gray-600">Refresh your image and reposition your business for growth with a full identity overhaul.</p>
  </div>

  <div className="p-6 bg-white shadow-md rounded-2xl">
    <img src="/icons/business-card.svg" alt="Print Design" className="w-10 h-10 mb-4" />
    <h3 className="text-xl font-semibold mb-2">Business Cards & Print</h3>
    <p className="text-gray-600">Posters, banners, cards — every touchpoint designed to impress and convert.</p>
  </div>

  <div className="p-6 bg-white shadow-md rounded-2xl">
    <img src="/icons/template.svg" alt="Templates" className="w-10 h-10 mb-4" />
    <h3 className="text-xl font-semibold mb-2">Branded Templates</h3>
    <p className="text-gray-600">Editable assets like proposals, presentations, and social media posts – all on-brand and easy to use.</p>
  </div>

  <div className="p-6 bg-white shadow-md rounded-2xl">
    <img src="/icons/messaging.svg" alt="Messaging" className="w-10 h-10 mb-4" />
    <h3 className="text-xl font-semibold mb-2">Brand Messaging</h3>
    <p className="text-gray-600">Clarify your message and show why your business matters — in every word and visual.</p>
  </div>

  <div className="p-6 bg-white shadow-md rounded-2xl">
    <img src="/icons/guidelines.svg" alt="Brand Guidelines" className="w-10 h-10 mb-4" />
    <h3 className="text-xl font-semibold mb-2">Brand Guidelines</h3>
    <p className="text-gray-600">Ensure consistency across platforms with a rulebook for your fonts, colors, tone, and visuals.</p>
  </div>
</div>

    {/* del */}
    {/* customer experience section */}
   <section className="bg-white py-20">
  <div className="max-w-5xl mx-auto px-6 text-center">
    <h2 className="text-4xl md:text-5xl font-bold mb-4">
      Real Impact
    </h2>
    <p className="text-lg text-gray-600 mb-10">
      See how a refreshed brand helped one client build trust and attract more customers
    </p>

    <div className="bg-gray-50 border border-gray-200 rounded-xl p-8 text-left shadow-sm max-w-3xl mx-auto">
      <h3 className="text-2xl font-semibold text-gray-800 mb-4">
        From Confusing to Clear
      </h3>
      <p className="text-gray-700 mb-4">
        One client approached us with an outdated logo and no clear visual identity. Their brand felt disconnected and forgettable — and it was hurting their credibility.
      </p>
      <p className="text-gray-700 font-medium">
        We developed a bold new look, simplified their messaging, and gave them ready-to-use assets. The result? A confident brand that finally matched the quality of their work — and started getting noticed.
      </p>
    </div>

    <div className="mt-10">
      <a
        href="#contact"
        className="inline-block bg-black text-white px-6 py-3 rounded-full hover:bg-gray-800 transition"
      >
        Let’s Elevate Your Brand
      </a>
    </div>
  </div>
</section>
    </>
 )
}

export default HomeBranding