import "./Offer.css"
import { Link } from "react-router-dom"

import first_proj_one from "../../assets/images/offer/offer_second_img.webp"
import first_proj_two from "../../assets/images/offer_extra_imgs/offer_fifth_project.webp"
import first_proj_three from "../../assets/images/offer_extra_imgs/offer_fifth_project_three.webp"
import first_proj_four from "../../assets/images/offer_extra_imgs/offer_fifth_project_four.webp"
import first_proj_five from "../../assets/images/offer_extra_imgs/offer_fifth_project_five.webp"
import first_proj_six from "../../assets/images/offer_extra_imgs/offer_fifth_project_six.webp"

import second_proj_one from "../../assets/images/offer/offer_first_img.webp"
import second_proj_two from "../../assets/images/offer_extra_imgs/offer_first_project.webp"
import second_proj_three from "../../assets/images/offer_extra_imgs/offer_first_project_three.webp"
import second_proj_four from "../../assets/images/offer_extra_imgs/offer_first_project_four.webp"

import third_proj_one from "../../assets/images/offer/offer_fifty_img.webp"
import third_proj_two from "../../assets/images/offer_extra_imgs/offer_fourth_project.webp"
import third_proj_three from "../../assets/images/offer_extra_imgs/offer_fourth_project_three.webp"
import third_proj_four from "../../assets/images/offer_extra_imgs/offer_fourth_project_four.webp"
import third_proj_five from "../../assets/images/offer_extra_imgs/offer_fourth_project_five.webp"
import third_proj_six from "../../assets/images/offer_extra_imgs/offer_fourth_project_six.webp"
import third_proj_seven from "../../assets/images/offer_extra_imgs/offer_fourth_project_seven.webp"
import third_proj_eight from "../../assets/images/offer_extra_imgs/offer_fourth_project_eight.webp"

import fourth_proj_one from "../../assets/images/offer/offer_third_img.webp"
import fourth_proj_two from "../../assets/images/offer_extra_imgs/offer_second_project.webp"
import fourth_proj_three from "../../assets/images/offer_extra_imgs/offer_second_project_three.webp"
import fourth_proj_four from "../../assets/images/offer_extra_imgs/offer_second_project_four.webp"

import fifth_proj_one from "../../assets/images/offer/offer_fourth_img.webp"
import fifth_proj_two from "../../assets/images/offer_extra_imgs/offer_third_project.webp"
import fifth_proj_three from "../../assets/images/offer_extra_imgs/offer_third_project_three.webp"
import fifth_proj_four from "../../assets/images/offer_extra_imgs/offer_third_project_four.webp"
import fifth_proj_five from "../../assets/images/offer_extra_imgs/offer_third_project_five.webp"
import { useTranslation } from "react-i18next"

  
  const Offer = () => {
    const [t] = useTranslation("global");

    const templates = [
      {
        id: 1,
        title: t("offer_template1_title"),
        description: t("offer_template1_p"),
        price: t("offer_template1_price"),
        image: [third_proj_one, third_proj_two, third_proj_three, third_proj_four, third_proj_five, third_proj_six, third_proj_seven, third_proj_eight],
      },
      {
        id: 2,
        title:t("offer_template2_title"),
        description: t("offer_template2_p"),
        price: t("offer_template2_price"),
        image: [fourth_proj_one, fourth_proj_two, fourth_proj_three, fourth_proj_four],
      },
      {
        id: 3,
        title: t("offer_template3_title"),
        description: t("offer_template3_p"),
        price: t("offer_template3_price"),
        image: [first_proj_one, first_proj_two, first_proj_three, first_proj_four, first_proj_five, first_proj_six],
      },
      {
        id: 4,
        title: t("offer_template4_title"),
        description: t("offer_template4_p"),
        price: t("offer_template4_price"),
        image: [second_proj_one, second_proj_two, second_proj_three, second_proj_four],
      },
      {
        id: 5,
        title: t("offer_template5_title"),
        description: t("offer_template5_p"),
        price: t("offer_template5_price"),
        image: [fifth_proj_one, fifth_proj_two, fifth_proj_three, fifth_proj_four, fifth_proj_five],
      },
    ];

    return (
<div className="offers-page">
      {templates.map((template) => (
        <section className="template-section" key={template.id}>
          <div className="template-card">
            <div className="images-scroll">
              {template.image.map((img, index) => (
                <img src={img} alt={`${template.title} ${index + 1}`} key={index} />
              ))}
            </div>
            <div className="template-details">
              <h2>{template.title}</h2>
              <p>{template.description}</p>
              <div className="template-meta">
                <span className="price">{template.price}</span>
                <Link to="/contact" className="buy-btn">{t("offer_page_button")}</Link>
              </div>
            </div>
          </div>
        </section>
      ))}
    </div>
    );
  };

export default Offer