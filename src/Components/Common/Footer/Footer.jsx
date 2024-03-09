import React from "react";
import { NavLink } from "react-router-dom";
import { Container, Row, Col, Form } from "react-bootstrap";
import {
  AiFillInstagram,
  AiOutlineTwitter,
  AiFillYoutube,
} from "react-icons/ai";
import { FaFacebookSquare } from "react-icons/fa";
import { PiTranslateBold } from "react-icons/pi";
import "./Footer.css";

import i18next from "i18next";
import cookies from "js-cookie";
import { useEffect, useState } from "react";
import classNames from "classnames";
import { useTranslation } from "react-i18next";
const languages = [
  {
    code: "en",
    name: "English",
    dir: "ltr",
    country_code: "gb",
  },
  {
    code: "ar",
    name: "العربية",
    dir: "rtl",
    country_code: "kw",
  },
];

const Footer = () => {
  const currentLanguageCode = cookies.get("i18next") || "en";
  const currentLanguage = languages.find((l) => l.code === currentLanguageCode);
  const { t } = useTranslation();
  const [flag, setFlag] = useState("");
  useEffect(() => {
    if (currentLanguageCode === "en") {
      setFlag("gb");
    } else {
      setFlag("kw");
    }
  }, [currentLanguageCode]);
  useEffect(() => {
    document.body.dir = currentLanguage.dir || "ltr";
  }, [currentLanguage, t]);

  const eresLinks = t("footer.eres.eresLinks", { returnObjects: true });
  const disc = t("footer.disc", { returnObjects: true });
  const productLinks = t("footer.product.productLinks", {
    returnObjects: true,
  });

  return (
    <footer
      className="text-center text-lg-start"
      style={{ backgroundColor: "#252525" }}
    >
      <Container>
        <section className="Up-footer">
          <Row>
            <Col
              md={6}
              lg={4}
              className="mx-auto text-center text-lg-start text-md-center"
            >
              <NavLink to={"/"}>
                <img
                  className="logo-desktop d-none d-md-none d-lg-block logo-desktop"
                  src="/Assets/ERES Logo.png"
                  alt=""
                  srcSet=""
                />
                <img
                  className="logo-mobile  d-md-block d-lg-none"
                  src="/Assets/ERES Logo.png"
                  alt=""
                  srcSet=""
                />
              </NavLink>
              <div className="icons d-flex gap-3">
                {[
                  AiFillInstagram,
                  AiOutlineTwitter,
                  FaFacebookSquare,
                  AiFillYoutube,
                ].map((Icon, index) => (
                  <div className="circle" key={index}>
                    <Icon />
                  </div>
                ))}
              </div>
              <div className="d-none d-lg-block d-md-block">
                <div className="d-flex align-items-center select-div">
                  <PiTranslateBold
                    style={{ fontSize: "18px", color: "#B0905B" }}
                  />
                  <Form.Select
                    aria-label="Default select example"
                    style={{ boxShadow: "none" }}
                    onChange={(e) => {
                      const selectedLanguageCode = e.target.value;
                      i18next.changeLanguage(selectedLanguageCode);
                    }}
                  >
                    {languages.map(({ code, name }) => (
                      <option key={code} value={code}>
                        {name}
                      </option>
                    ))}
                  </Form.Select>
                  <img src="Assets/Group%206089.svg" alt="" srcSet="" />
                </div>
              </div>
            </Col>
            <hr className="w-100 clearfix d-md-none" />
            {[eresLinks, productLinks].map((links, categoryIndex) => (
              <Col key={categoryIndex} sm={6} md={3} lg={2} className="mx-auto">
                <div>
                  <h4>
                    {categoryIndex === 0
                      ? t("footer.eres.title")
                      : t("footer.product.title")}
                  </h4>
                  {links.map((link, index) => (
                    <p key={index} className="">
                      <NavLink className="" to={link.link}>
                        {link.title}
                      </NavLink>
                    </p>
                  ))}
                </div>
              </Col>
            ))}
            <hr className="w-100 clearfix d-md-none" />
            <Col md={12} lg={4} className="mt-md-5 mt-lg-0 mx-auto">
              <div className="abs-footer">
                <span className="text">{t("footer.chat")}</span>
                <br />
                <button className="ft-btn">{t("footer.btn")}</button>
              </div>
            </Col>
          </Row>
        </section>
        <hr
          className="m-0 d-none d-lg-block d-md-block"
          style={{ borderTop: "1px solid #B0905B" }}
        />
        <section className="down-footer">
          <Row className="d-flex align-items-center">
            <Col
              md={12}
              lg={8}
              className={` ${
                currentLanguage.dir === "rtl"
                  ? "text-center text-md-end order-2 order-lg-1 order-md-1"
                  : "text-center text-md-start order-2 order-lg-1 order-md-1"
              }`}
            >
              <div className="up-p">
                <p> {t("footer.copyright")}</p>
              </div>
            </Col>
            <Col
              md={12}
              lg={4}
              className="col-12 text-center order-1 order-lg-2 order-md-2 text-md-end d-flex justify-content-between p-3 p-lg-0 p-md-4"
            >
              {disc.map((text, index) => (
                <p key={index}>{text}</p>
              ))}
            </Col>
          </Row>
        </section>
      </Container>
    </footer>
  );
};

export default Footer;
