import React from "react";
import Banner from "./Banner/Banner";
import CourValue from "./CoursValue/CourValue";
import Partner from "./PartnerSection/Partner";
import KokartAPP from "./KoKartAPP/KokartAPP";
import DiwanApp from "./DiwanAppSection/DiwanApp";
const Home = () => {
  return (
    <div>
      <Banner />
      <CourValue />
      <Partner />
      <KokartAPP />
      <DiwanApp />
    </div>
  );
};

export default Home;
