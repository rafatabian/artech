import { lazy, useEffect } from "react"
import { Helmet } from "react-helmet-async"
// import packages from "../../assets/data/plansData.js"

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
const BrandServices = lazy(() => import("../../components/BrandComponents/BrandServices/BrandServices.jsx"))

// const ReusablePlans = lazy(() => import("../../components/ReusablePlans/ReusablePlans"))
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
    <BrandServices/>
    <BrandSteps/>
    <BrandRebranding/>
    <BrandLogos/>
    <BrandStory/>
    {/* {packages && <ReusablePlans data={packages.Branding} name="Branding"/>} */}
    <MovingSection props={props}/>
    <BrandMotivational/>
    </>
 )
}

export default HomeBranding