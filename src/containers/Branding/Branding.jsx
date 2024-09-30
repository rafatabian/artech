import { lazy, useEffect } from "react"
import firstImageURL from "../../assets/images/branding/branding_first_img.webp"
import secondImageURL from "../../assets/images/branding/logos.webp"
import thirdImageURL from "../../assets/images/branding/branding_visit_card.webp"
import forthImageURL from "../../assets/images/branding/branding_graphic_design.webp"
import { Helmet } from "react-helmet-async"
import { useTranslation } from "react-i18next"
const ReusableComponent = lazy(() => import("../../components/ReusableComponent/ReusableComponent"))

const HomeBranding = () => {
    const [t] = useTranslation("global")

    // scroll to top
useEffect(() => {
    window.scrollTo(0, 0)
}, [])

const brandingProps={
    titles: ["BRANDING", `${t("branding_title2")}`, `${t("branding_title3")}`, `${t("branding_title4")}`],
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
    </>
 )
}

export default HomeBranding