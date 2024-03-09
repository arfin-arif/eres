import React from "react";
import "./QrBarCode.css";
import { useTranslation } from "react-i18next";
const QrBarCode = () => {
  const { t, i18n, ready } = useTranslation();

  if (!ready) return "loading translations...";
  t("download_prompt", { returnObjects: true });
  return (
    <div>
      <div className="QR-image-div">
        <img
          src="Assets/KokartImages/QR.svg"
          alt="qrcode"
          className="QR-code"
        />
        <p> {t("download_prompt")}</p>
      </div>
    </div>
  );
};

export default QrBarCode;
