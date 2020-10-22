import React, { Component } from "react";
import axios from "axios";

import "./destination.scss";
import Heading from "../../utilities/heading";

class Destination extends Component {
  constructor() {
    super();
    this.state = {
      destination: [],
    };
  }

  componentDidMount() {
    axios
      .get(
        "https://cors-anywhere.herokuapp.com/http://holidaystand.co.uk/server/db/json/destination.json"
      )
      .then((res) => {
        this.setState({ destination: res.data.destinations });
      });
  }

  render() {
    let destinations = this.state.destination;
    return (
      <div className="destiContainer">
        <Heading
          heading="Popular Destinations"
          subheading="Find out what the best destinations in the World"
        />
        <div className="wrapper">
          {destinations.length > 0 &&
            destinations.map((item, index) => {
              return (
                <div className="destiList" key={index}>
                  <div className="destiBox">
                    <div className="destiInfo">
                      <div className="destiHead">{item.heading}</div>
                      <div className="destiSubhead">{item.subhead}</div>
                      <div className="destiCost">&#163;{item.fare}</div>
                    </div>
                    <figure>
                      <img src={item.imgURL} alt={item.heading} />
                    </figure>
                  </div>
                </div>
              );
            })}
        </div>
      </div>
    );
  }
}

export default Destination;
