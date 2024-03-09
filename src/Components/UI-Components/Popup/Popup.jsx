import React, { useState } from "react";
import "./Popup.css";
import { Col, Container, Row } from "react-bootstrap";
import { RxCross1 } from "react-icons/rx";
import { useTranslation } from "react-i18next";

const Popup = () => {
  const [isPopupVisible, setPopupVisible] = useState(true);

  const handlePopUp = () => {
    setPopupVisible(!isPopupVisible);
  };
  const { t, i18n, ready } = useTranslation();

  return (
    <div>
      {isPopupVisible && (
        <div className="Pop-Main">
          <Container>
            <Row>
              <div className="cross-icon">
                <RxCross1 onClick={handlePopUp} className="curser" />
              </div>
              <Col lg={4} md={4} sm={6}>
                <div className="right-div">
                  <img src="Assets/Contactimages/qrpop.svg" alt="qr" />
                  <p>{t("download_prompt")}</p>
                </div>
              </Col>
              <Col sm={6} md={4}>
                <div className="Mobile-div">
                  <img
                    src="Assets/ProductBannar/productbanner-mobile.svg"
                    alt=""
                  />
                </div>
              </Col>
            </Row>
          </Container>
        </div>
      )}
    </div>
  );
};

export default Popup;
