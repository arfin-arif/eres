import React from "react";
import { ProductBannar, BannarSec4 } from "../Bannar.style";
import { Col, Container, Row } from "react-bootstrap";
import { features6, features7 } from "../../../DevData/Data";
import StoresBtn from "../../../UI-Components/StoresBtn";
import { useTranslation } from "react-i18next";
const Bannar = () => {
  const { t, i18n, ready } = useTranslation();
  const contentItems = t("product.banner_four.contentItems", {
    returnObjects: true,
  });
  const features6 = t("product.banner_four.features6", {
    returnObjects: true,
  });
  const features7 = t("product.banner_four.features7", {
    returnObjects: true,
  });
  return (
    <ProductBannar>
      <BannarSec4>
        <Container>
          <Row className="align-items-center">
            <Col lg={6} md={12} sm={12}>
              <div className="text-center img-center mb-4 mb-md-5 mb-lg-0">
                <img
                  className="d-none d-md-none d-lg-block"
                  src="Assets/Desktop%20Size/551.54x507%20ox.jpg"
                  alt=""
                  srcSet=""
                />
                <img
                  className="d-block d-md-block d-lg-none"
                  src="Assets/Desktop%20Size/551.54x507%20ox.jpg"
                  alt=""
                  srcSet=""
                />
              </div>
            </Col>
            <Col lg={6} md={12} sm={12}>
              <div>
                <h2 className="d-none d-lg-block">
                  {t("product.banner_four.title")}
                </h2>
                <h2 className="d-block d-lg-none">
                  {t("product.banner_four.sub")}
                </h2>
                <p>{t("product.banner_four.p")}</p>
                <div>
                  {contentItems.map((item, index) => (
                    <React.Fragment key={index}>
                      <div className="d-flex mb-3">
                        <img
                          className="pe-2"
                          src="Assets/Group%206045.svg"
                          alt=""
                          srcSet=""
                        />
                        <p className="m-0"> {item}</p>
                      </div>
                    </React.Fragment>
                  ))}
                </div>
                <div className="d-flex flex-wrap  bannaricons">
                  <div>
                    {features6.map((feature, index) => (
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
                    {features7.map((feature, index) => (
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
      </BannarSec4>
    </ProductBannar>
  );
};

export default Bannar;
