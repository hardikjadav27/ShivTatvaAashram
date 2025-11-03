import React from "react";
import Header from "../Header/Header";
import PhotoSlideshow from "../PhotoSlideshow/PhotoSlideshow";
import MissionVision from "../MissionVision/MissionVision";
import Initiatives from "../Initiatives/Initiatives";
import Donations from "../Donations/Donations";
import Celebrations from "../Celebrations/Celebrations";
import Footer from "../Footer/Footer";
import Religion from "../Religion/Religion";
import ShivTattvaShopSection from "../ShivTattvaShopSection/ShivTattvaShopSection";

const Aashracomponet = () => {
  return (
    <div>
      <Header />
      <PhotoSlideshow />
      <MissionVision />
      <Initiatives />
      <Donations />
      <Religion />
      <ShivTattvaShopSection />
      <Celebrations />
      <Footer />
    </div>
  );
};

export default Aashracomponet;
