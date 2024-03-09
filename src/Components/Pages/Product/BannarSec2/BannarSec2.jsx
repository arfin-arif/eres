import React from "react";
import { ProductBannar, BannarSec2 } from "../Bannar.style";
import { Col, Container, Row } from "react-bootstrap";

import StoresBtn from "../../../UI-Components/StoresBtn";
import { useTranslation } from "react-i18next";
const Bannar = () => {
  const { t, i18n, ready } = useTranslation();

  if (!ready) return "loading translations...";
  const features3 = t("product.banner_two.features3", {
    returnObjects: true,
  });
  const features4 = t("product.banner_two.features4", {
    returnObjects: true,
  });
  return (
    <ProductBannar>
      <BannarSec2>
        <Container>
          <Row className="align-items-center">
            <Col lg={6} md={12} sm={12}>
              <div className="text-center img-center mb-3 mb-md-5 mb-lg-0">
                <img
                  className="d-none d-md-none d-lg-block"
                  src="Assets/Desktop%20Size/584.85x527.231px.jpg"
                  alt=""
                  srcSet=""
                />
                <img
                  className="d-block d-md-block d-lg-none"
                  src="Assets/Mobile%20Size/374x358%203.jpg"
                  alt=""
                  srcSet=""
                />
              </div>
            </Col>
            <Col lg={6} md={12} sm={12}>
              <div>
                <h2>{t("product.banner_two.title")}</h2>
                <p>{t("product.banner_two.sub")}</p>
                <div className="d-flex flex-wrap gap-2 bannaricons">
                  <div>
                    {features3.map((feature, index) => (
                      <div key={index}>
                        <p>
                          <img
                            src={feature.icon}
                            alt=""
                            srcSet=""
                            className="pe-2"
                          />
                          {feature.text}
                        </p>
                      </div>
                    ))}
                  </div>
                  <div>
                    {features4.map((feature, index) => (
                      <div key={index}>
                        <p>
                          <img
                            src={feature.icon}
                            alt=""
                            srcSet=""
                            className="pe-2"
                          />
                          {feature.text}
                        </p>
                      </div>
                    ))}
                  </div>
                </div>
                <StoresBtn />
              </div>
            </Col>
          </Row>
        </Container>
      </BannarSec2>
    </ProductBannar>
  );
};

export default Bannar;
