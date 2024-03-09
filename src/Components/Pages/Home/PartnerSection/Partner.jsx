import React from "react";
import "./Partner.css";
import { Col, Container, Row } from "react-bootstrap";
import { PartnerArray } from "../../../DevData/Data";
import { useTranslation } from "react-i18next";
const Partner = () => {
  const { t, i18n, ready } = useTranslation();
  if (!ready) return "loading translations...";
  const PartnerArray = t("home.partner.PartnerArray", {
    returnObjects: true,
  });
  return (
    <div className="Partner-div">
      <Container>
        <Row>
          <Col lg={12}>
            <h2 className="title-tex">{t("home.partner.title")}</h2>
            <p className="para patner-p">{t("home.partner.sub")}</p>
          </Col>
        </Row>
      </Container>
      <div className="flex-wrap-div">
        {PartnerArray.map((data, index) => {
          return (
            <div key={index} className="Partner-cards">
              <img
                src={`Assets/PartnerSectionImages/${data.image}`}
                alt={data.image}
              />
              <p className="para">{data.para}</p>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Partner;
