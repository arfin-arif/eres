import React from "react";
import { ProductBannar } from "../Bannar.style";
import { Col, Container, Row } from "react-bootstrap";
import StoresBtn from "../../../UI-Components/StoresBtn";
import { useTranslation } from "react-i18next";
const Bannar = () => {
  const { t, i18n, ready } = useTranslation();
  if (!ready) return "loading translations...";
  const features = t("product.banner_one.features", {
    returnObjects: true,
  });
  const features2 = t("product.banner_one.features2", {
    returnObjects: true,
  });
  return (
    <ProductBannar>
      <Container>
        <Row>
          <Col lg={6} md={12} sm={12} className="order-2 order-lg-1 order-md-2">
            <div className="KoCart-content">
              <h2>{t("product.banner_one.title")}</h2>
              <p>{t("product.banner_one.sub")}</p>
              <div className="d-flex flex-wrap gap-2 bannaricons">
                <div>
                  {features.map((feature, index) => (
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
                  {features2.map((feature, index) => (
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
          <Col lg={6} md={12} sm={12} className="order-1 order-lg-2 order-md-1">
            <div className="">
              <div className="circle-radius d-flex justify-content-center align-items-end">
                <img
                  className="d-none d-lg-block d-md-block "
                  style={{ maxWidth: 678.24 }}
                  src="Assets/ProductBannar/prodcutbaner.svg"
                  alt=""
                  srcSet=""
                />
                <img
                  className="d-block d-lg-none  d-md-none "
                  style={{ maxWidth: 678.24 }}
                  src="Assets/ProductBannar/productbanner-mobile.svg"
                  alt=""
                  srcSet=""
                />
              </div>
            </div>
          </Col>
        </Row>
      </Container>
    </ProductBannar>
  );
};

export default Bannar;
