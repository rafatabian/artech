import { lazy, useEffect } from "react"
// import { Link } from "react-router-dom"
import firstImageURL from "../../assets/images/branding/branding_first_img.webp"
import secondImageURL from "../../assets/images/branding/logos.webp"
import thirdImageURL from "../../assets/images/branding/branding_visit_card.webp"
import forthImageURL from "../../assets/images/branding/branding_graphic_design.webp"
import { Helmet } from "react-helmet-async"
import { useTranslation } from "react-i18next"
import packages from "../../assets/data/plansData.js"
//images
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



const ReusableComponent = lazy(() => import("../../components/ReusableComponent/ReusableComponent"))
const ReusablePlans = lazy(() => import("../../components/ReusablePlans/ReusablePlans"))
const MovingSection = lazy(() => import("../../components/MovingSection/MovingSection.jsx"))


const HomeBranding = () => {
    const [t] = useTranslation("global")

    const moving_section_translation = t("moving_section_title_v1")


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

const brandingProps={
    titles: ["BRAND DESIGN", `${t("branding_title2")}`, `${t("branding_title3")}`, `${t("branding_title4")}`],
    headings: [`${t("branding_sub1")}`, `${t("branding_sub2")}`, `${t("branding_sub3")}`, `${t("branding_sub4")}`],
    firstImage: firstImageURL,
    secondImage: secondImageURL,
    thirdImage: thirdImageURL,
    forthImage: forthImageURL,
    firstText: `${t("branding_details1")}`,
    secondText: `${t("branding_details2")}`,
    thirdText: `${t("branding_details3")}`,
    forthText: `${t("branding_details4")}`
}

 return(
    <>
    <Helmet>
        <title>Branding</title>
        <meta name="description" content="Alege brandingul de top pentru ati pune afacerea pe primul loc"/>
        <link rel="canonical" href="https://artech-agency.co/#/branding"/>
    </Helmet> 
    <ReusableComponent props={brandingProps} />
    {packages && <ReusablePlans data={packages.Branding} name="Branding"/>}
    <MovingSection props={props} translation={moving_section_translation}/>

    </>
 )
}

export default HomeBranding