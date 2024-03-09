import React from "react";
import { Button, Col, Container, Form, Row } from "react-bootstrap";
import "./Contact.css";
import Phone from "../../Common/PhoneInput/Phone";
import { useTranslation } from "react-i18next";

const Contact = () => {
  const { t, i18n, ready } = useTranslation();
  if (!ready) return "loading translations...";
  const ContactArray = t("contact.contactArray", {
    returnObjects: true,
  });
  return (
    <div className="Contact-Section">
      <div className="Contact-heading-div">
        <Container>
          {" "}
          <h1> {t("contact.title")} </h1>
        </Container>
      </div>
      <Container>
        <Row>
          <Col lg={6} className="order-2 order-lg-1  order-md-1">
            <Col>
              <div className="kokart-entrance-section">
                <h1>{t("contact.sub")}</h1>
                <p className="mb-5 mb-lg-4 mb-md-4">{t("contact.about")}</p>
              </div>
            </Col>
            <Row>
              {ContactArray.map((data, index) => {
                return (
                  <Col key={index} lg={4} md={4}>
                    <div className="Service-div">
                      <div className="service-img-div mb-0 mb-lg-3 mb-md-3">
                        <img
                          src={`Assets/Contactimages/${data.img}`}
                          alt={data.img}
                        />
                      </div>
                      <h1>{data.heading}</h1>
                      <p>{data.para}</p>
                    </div>
                  </Col>
                );
              })}
            </Row>
            <Col>
              <div className="chat-div">
                <div className="div">
                  <img src="Assets/Contactimages/chat.svg" alt="chat" />

                  <p>{t("contact.chat")}</p>
                </div>

                <div className="button-div">
                  <button className="consul-btn">
                    {t("contact.consultation")}
                  </button>
                </div>
              </div>
            </Col>
            <Col lg={5}>
              <div className="img-box">
                <img
                  src="Assets/Contactimages/Map.svg"
                  alt="map"
                  className="my-4 map-image"
                />
              </div>
            </Col>
          </Col>
          <Col lg={6} md={12} className="order-1 order-lg-2 order-md-1">
            <div className="Form-div">
              <h1>{t("contact.would_u")}</h1>
              <p>{t("contact.apply_now")}</p>
              <Form>
                <Form.Group className="mb-2" controlId="formBasicEmail">
                  <Form.Label>{t("contact.num")}</Form.Label>
                  <Form.Control type="number" placeholder="000 0000 0000 000" />
                </Form.Group>

                <Form.Group className="mb-2" controlId="formBasicPassword">
                  <Form.Label>{t("contact.c_name")}</Form.Label>
                  <Form.Control type="text" placeholder="Full Name" />
                </Form.Group>
                <Form.Group className="mb-2" controlId="formBasicPassword">
                  <Form.Label>{t("contact.phone")}</Form.Label>
                  <Phone />
                </Form.Group>
                <Form.Group
                  className="mb-3 mb-lg-2 mb-md-2"
                  controlId="formBasicPassword"
                >
                  <Form.Label>{t("contact.email")}</Form.Label>
                  <Form.Control
                    type="email"
                    placeholder="exmaple@company.com"
                  />
                </Form.Group>
                <Form.Group
                  className="mb-2 d-flex gap-2 align-items-center"
                  controlId="formBasicCheckbox"
                >
                  <Form.Check
                    type="checkbox"
                    label={t("contact.label_one")}
                    className="custom-checkbox "
                  />
                  <span className="under-text">{t("contact.View")}</span>
                </Form.Group>
                <Form.Group className="mb-2" controlId="formBasicCheckbox">
                  <Form.Check
                    type="checkbox"
                    label={t("contact.label_two")}
                    id="custom-checkbox"
                  />
                </Form.Group>
                <Form.Group className="mb-2" controlId="formBasicCheckbox">
                  <span>{t("contact.purposes")}</span>
                </Form.Group>

                <div className="btn-div">
                  <Button>{t("contact.contact_us")}</Button>
                </div>
              </Form>
            </div>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default Contact;
