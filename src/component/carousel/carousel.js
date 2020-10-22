import React, { Component } from "react";
import "./carousel.scss";
import axios from "axios";
import Card from "./carouselCard";
import Heading from "../../utilities/heading";

class ImageSlider extends Component {
  constructor() {
    super();
    this.state = {
      carousel: [],
    };
  }

  componentDidMount() {
    axios
      .get(
        "https://cors-anywhere.herokuapp.com/http://holidaystand.co.uk/server/db/json/carouselFlight.json"
      )
      .then((res) => {
        this.setState({ carousel: res.data });
      });
  }
  render() {
    return (
      <div className="carouselSlider">
        <Heading
          heading="Cheap Flight Offers"
          subheading="Browse through our best and cheap flight offers"
        />
        <Card flight={this.state.carousel} />
      </div>
    );
  }
}

export default ImageSlider;
