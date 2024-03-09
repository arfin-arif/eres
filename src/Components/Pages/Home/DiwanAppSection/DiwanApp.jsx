import React from "react";
import "./DiwanApp.css";
import { Col, Container, Row } from "react-bootstrap";
import StoresBtn from "../../../UI-Components/StoresBtn";
import QrBarCode from "../../../UI-Components/QrBarCode/QrBarCode";
import { useTranslation } from "react-i18next";

const DiwanApp = () => {
  const { t, i18n, ready } = useTranslation();

  if (!ready) return "loading translations...";
  t("diwan", { returnObjects: true });
  return (
    <div className="Diwan-Section">
      <Container>
        <Row>
          <Col lg={7} md={12} sm={12}>
            <div className="diwan-image-div">
              <img
                src="Assets/Desktop%20Size/500x480%20px%203.jpg"
                alt="diwan-app"
                className="d-none d-md-none d-lg-block m-0"
              />{" "}
              <img
                src="Assets/Mobile%20Size/374x358%202.jpg"
                alt="diwan-app"
                className="d-block d-md-block d-lg-none m-0"
              />{" "}
            </div>
          </Col>
          <Col lg={5} md={12} sm={12}>
            <h2 className="title-tex text-center text-lg-start ">
              {t("home.diwan.title")}
            </h2>
            <p className="para text-center text-lg-start">
              {t("home.diwan.sub")}
            </p>
            <StoresBtn />
            <QrBarCode />
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default DiwanApp;
