import React from "react";
import "./Banner.css";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import { useTranslation } from "react-i18next";

const Home = () => {
  const { t, i18n, ready } = useTranslation();

  if (!ready) return "loading translations...";
  t("home", { returnObjects: true });
  return (
    <div className="home-bannar">
      <Container>
        <Row>
          <Col lg={6} md={12} sm={12} className="block1">
            <h1 className="title-tex"> {t("home.banner.title")}</h1>
            <p className="para">
              {t("home.banner.paragraph1")}
              <br /> <br className="d-none d-lg-block d-md-block" />
              {t("home.banner.paragraph2")}
            </p>
            <img
              src="Assets/Map.png"
              alt=""
              className="w-100 h-auto d-block d-lg-none"
            />
            <Row className="text-center">
              <Col>
                <h5>22</h5>
                <span> {t("home.banner.operate_countries")}</span>
              </Col>
              <Col className="border-LR">
                <div>
                  <h5>6</h5>
                  <span>
                    {t("home.banner.primary_focus")} <br />
                    {t("home.banner.countries")}
                  </span>
                </div>
              </Col>
              <Col>
                <h5>200+</h5>
                <span> {t("home.banner.korean_brands")}</span>
              </Col>
            </Row>
          </Col>
          <Col lg={6} md={12}>
            <img
              src="Assets/Map.png"
              alt=""
              className="w-100 h-auto d-none d-lg-block"
            />
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default Home;
