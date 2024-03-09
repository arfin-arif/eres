import React from "react";
import { Button } from "react-bootstrap";
import "../Pages/Home/KoKartAPP/KokartAPP.css";
const StoresBtn = () => {
  return (
    <div className="btns">
      <Button className="button text-black">
        <img
          src="Assets/KokartImages/Google.svg"
          alt="google"
          className="Google-image"
        />
        Google Play
      </Button>
      <Button className="button text-black">
        <img src="Assets/KokartImages/Apple.svg" alt="apple" />
        Apple Store
      </Button>
    </div>
  );
};

export default StoresBtn;
