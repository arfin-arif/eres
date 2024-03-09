import React from "react";
import Bannar from "./Bannar/Bannar";
import BannarSec2 from "./BannarSec2/BannarSec2";
import BannarSec3 from "./BannarSec3/BannarSec3";
import BannarSec4 from "./BannarSec4/BannarSec4";

const Product = () => {
  return (
    <div>
      <Bannar />
      <BannarSec2 />
      <BannarSec3 />
      <BannarSec4 />
    </div>
  );
};

export default Product;
