import React from "react";
import "./KokartAPP.css";
import { Col, Container, Row } from "react-bootstrap";
import StoresBtn from "../../../UI-Components/StoresBtn";
import QrBarCode from "../../../UI-Components/QrBarCode/QrBarCode";
import { useTranslation } from "react-i18next";

const KokartAPP = () => {
  const { t, i18n, ready } = useTranslation();
  if (!ready) return "loading translations...";
  t("ko_cart", { returnObjects: true });
  return (
    <div className="Kokart-container">
      <Container>
        <Row className="align-items-center">
          <Col lg={6} md={12} sm={12} className="order-2 order-lg-1 order-md-2">
            <h2 className="title-tex text-center text-lg-start text-md-center">
              {t("home.ko_cart.title")}
            </h2>
            <p className="para ku-para text-center text-lg-start text-md-s">
              {t("home.ko_cart.sub")}
            </p>
            <div>
              <StoresBtn />
            </div>
            <QrBarCode />
          </Col>
          <Col lg={6} md={12} sm={12} className="order-1 order-lg-2 order-md-1">
            <div className="Kokart">
              <img
                src="Assets/Desktop%20Size/kokartapp.png"
                alt="kokart"
                className="kokart-image d-none d-md-none d-lg-block"
              />
              <img
                src="Assets/Mobile%20Size/kokartapp.png"
                alt="kokart"
                className="kokart-image w-100 d-block d-md-block d-lg-none"
              />
            </div>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default KokartAPP;
