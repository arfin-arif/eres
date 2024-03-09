import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import "./CourValue.css";
// import { cardArray } from "../../../DevData/Data";
import { useTranslation } from "react-i18next";
const CourValue = () => {
  const { t, i18n, ready } = useTranslation();
  if (!ready) return "loading translations...";
  const cardArray = t("home.core_values.cardArray", {
    returnObjects: true,
  });
  return (
    <div className="Cour-div">
      <Container>
        <Row>
          <Col lg={12}>
            <h2 className="title-tex"> {t("home.core_values.title")}</h2>
            <p className="para">
              {t("home.core_values.subtitle")}
              <br />
              {t("home.core_values.subtitle_end")}
            </p>
          </Col>
          <div className="flex-wrap-div">
            {cardArray.map((data, index) => (
              <div key={index} className="Cour-Carda-div card-margin">
                <img src={`Assets/CardImages/${data.image}`} alt={data.image} />
                <p className="para">{data.para}</p>
              </div>
            ))}
          </div>
        </Row>
      </Container>
    </div>
  );
};

export default CourValue;
