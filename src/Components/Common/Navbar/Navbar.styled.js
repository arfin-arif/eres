import styled from "styled-components";

export const Nav = styled.nav`
  padding: 10px 0;
  ,
  & .pr-mobile {
    @media screen and (max-width: 901px) {
    }
  }
  & a {
    font-size: 16px;
    font-weight: 400;
    line-height: 19px;
    color: #786546;
    text-decoration: none;
    margin-right: 30px;

    &.active {
      ,
      & button {
        font-weight: 600 !important;
        color: #b0905b !important;
      }
      font-size: 16px;
      font-weight: 600 !important;
      color: #b0905b !important;
      @media screen and (max-width: 901px) {
        padding: 10px 0;
      }
    }
    @media screen and (max-width: 901px) {
      padding: 10px 0;
      margin-right: 0;
    }
  }
`;

export const ContactBtn = styled.button`
  font-size: 16px;
  font-weight: 500;
  line-height: 19px;
  color: #b0905b;
  margin: 0;
  height: 44px;
  padding: 0 26px;
  border-radius: 8px;
  border: 1px solid #e7d4b5;
  background: #f8f5f0;

  @media screen and (max-width: 901px) {
    font-size: 16px;
    font-weight: 400;
    line-height: 19px;
    color: #786546;
    height: auto;
    padding: 0;
    border: none;
  }

  &.active {
    font-size: 16px;
    font-weight: 600 !important;
    color: #b0905b !important;
  }
`;
