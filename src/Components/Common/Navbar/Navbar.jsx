import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import * as S from "./Navbar.styled";
import { Link, NavLink } from "react-router-dom";
import {
  AiFillInstagram,
  AiOutlineTwitter,
  AiFillYoutube,
} from "react-icons/ai";
import { FaFacebookSquare } from "react-icons/fa";
import { useTranslation } from "react-i18next";
import i18next from "i18next";
import cookies from "js-cookie";
import { useEffect, useState } from "react";
import classNames from "classnames";
import "./Navbar.css";

const ToggleImg = "Assets/togglebtn/menu.svg";
const languages = [
  {
    code: "en",
    name: "English",
    dir: "ltr",
    country_code: "us",
  },
  {
    code: "ar",
    name: "العربية",
    dir: "rtl",
    country_code: "kw",
  },
];

function BasicExample() {
  const currentLanguageCode = cookies.get("i18next") || "en";
  const currentLanguage = languages.find((l) => l.code === currentLanguageCode);
  const { t } = useTranslation();
  const [flag, setFlag] = useState("");
  useEffect(() => {
    if (currentLanguageCode === "en") {
      setFlag("us");
    } else {
      setFlag("kw");
    }
  }, [currentLanguageCode]);
  useEffect(() => {
    document.body.dir = currentLanguage.dir || "ltr";
  }, [currentLanguage, t]);

  return (
    <S.Nav>
      <Navbar className="navbar" expand="lg">
        <Container>
          <Navbar.Brand className="!mb-0" to={"/"}>
            <Link to={"/"}>
              <img
                className="logo-desktop d-none d-md-none d-lg-block logo-desktop"
                src="Assets/Desktop%20Size/164x54%20px.jpg"
                alt=""
                srcSet=""
              />
              <img
                className="logo-mobile d-block d-md-block d-lg-none"
                src="Assets/Mobile%20Size/131x43%20px.jpg"
                alt=""
                srcSet=""
              />
            </Link>
          </Navbar.Brand>
          <Navbar.Toggle
            className="border-0 "
            as={Nav.Link}
            aria-controls="basic-navbar-nav"
            style={{ boxShadow: "none" }}
          >
            <img src={ToggleImg} alt="Toggle Button" />
          </Navbar.Toggle>

          <Navbar.Collapse
            className="flex-md-grow-0 bg-white"
            id="basic-navbar-nav"
          >
            <Nav className="ms-auto align-items-center">
              <NavLink to={"/"}>
                Home
                <img
                  className="un-line"
                  src="Assets/Page%20intigator.png"
                  alt=""
                  srcSet=""
                />
              </NavLink>
              <NavLink to={"/product"}>
                Product
                <img
                  className="un-line"
                  src="Assets/Page%20intigator.png"
                  alt=""
                  srcSet=""
                />
              </NavLink>
              <NavLink className="mt-0" to={"/contact"}>
                <S.ContactBtn>Contact</S.ContactBtn>
              </NavLink>
              <div
                className={`dropdown ${
                  currentLanguage.dir === "rtl" ? "dropdown-direction" : ""
                }`}
              >
                <button
                  className={`btn btn-link dropdown-toggle `}
                  type="button"
                  id="dropdownMenuButton1"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                >
                  <span className={`fi fi-${flag} `}></span>
                </button>
                <ul
                  className="dropdown-menu"
                  aria-labelledby="dropdownMenuButton1"
                >
                  {languages.map(({ code, name, country_code }) => (
                    <li key={country_code}>
                      <button
                        className={classNames("dropdown-item", {
                          disabled: currentLanguageCode === code,
                        })}
                        onClick={() => {
                          i18next.changeLanguage(code);
                        }}
                      >
                        <span
                          className={`fi fi-${country_code} mx-2`}
                          style={{
                            opacity: currentLanguageCode === code ? 0.5 : 1,
                          }}
                        ></span>
                        {name}
                      </button>
                    </li>
                  ))}
                </ul>
              </div>

              <button className="d-block d-lg-none d-md-none ft-btn">
                1:1 Consultation
              </button>
              <div className="icons d-flex justify-content-around w-100 d-block d-lg-none d-md-none">
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
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </S.Nav>
  );
}

export default BasicExample;
