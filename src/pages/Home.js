import React from "react";

import Header from "../header/header";
import Banner from "../banner/banner";
import OurServices from "../home/services/services";
import ImageSlider from "../component/carousel/carousel";
import Holidays from "../component/holidays/holidays";
import Destination from "../component/destination/destination";
import Footer from "../component/footer/footer";

class Home extends React.Component {
  render() {
    return (
      <>
        <Header />
        <Banner />
        <OurServices />
        <ImageSlider />
        <Holidays />
        <Destination />
        <Footer />
      </>
    );
  }
}

export default Home;
