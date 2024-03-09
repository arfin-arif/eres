import styled from "styled-components";

export const ProductBannar = styled.div`
  background: #f8f5f0;
  ,
  & .KoCart-content {
    padding: 72px 0;
    @media screen and (max-width: 560px) {
      padding: 47px 0;
    }
  }
  ,
  & .text-center img {
    width: 100%;
  }
  ,
  & h2 {
    font-size: 36px;
    font-weight: 600;
    line-height: 44px;
    color: #786546;
    margin-bottom: 16px;

    @media screen and (max-width: 560px) {
      font-size: 24px;
      font-style: normal;
      font-weight: 600;
      line-height: normal;
    }
  }
  ,
  & p {
    font-family: Inter;
    font-size: 16px;
    font-weight: 400;
    line-height: 26px;
    color: #69573a;
    @media screen and (max-width: 560px) {
      font-size: 15px;
    }
  }
  ,
  .bannaricons {
    margin: 32px 0;
    ,
    & p {
      margin-bottom: 23px;
      @media screen and (max-width: 560px) {
        font-size: 16px;
      }
    }
  }

  ,
  & .circle-radius {
    ,
    & img {
      margin-top: 101px;
      @media screen and (max-width: 560px) {
        margin-top: 0;
        width: 100%;
      }
    }
  }
`;
export const BannarSec2 = styled.div`
  padding: 100px 0 108px;
  background: white;
  @media screen and (max-width: 560px) {
    padding: 70px 0;
  }
`;
export const BannarSec3 = styled.div`
  padding: 109px 0;
  @media screen and (max-width: 560px) {
    padding: 70px 0;
  }
`;
export const BannarSec4 = styled.div`
  padding: 112px 0;
  background: white;
  @media screen and (max-width: 560px) {
    padding: 40px 0 60;
  }
`;
