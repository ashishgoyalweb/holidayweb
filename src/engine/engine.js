import React, { Component } from "react";
import { Tabs, Tab } from "react-bootstrap";
import "./engine.scss";

import Flight from "./flight/flight";
import Hotel from "./hotel/hotel";
import Holidays from "./holiday/holiday";

class Engine extends Component {
  constructor(props, context) {
    super(props, context);
    this.state = {
      key: "flight",
    };
  }
  render() {
    return (
      <div className="engine">
        <Tabs
          id="controlled-tab-example"
          activeKey={this.state.key}
          onSelect={(key) => this.setState({ key })}
        >
          <Tab eventKey="flight" title="Flights" tabClassName="flight">
            <Flight />
          </Tab>
          <Tab eventKey="hotels" title="Hotels" tabClassName="hotel">
            <Hotel />
          </Tab>
          <Tab
            eventKey="flightHotel"
            title="Flight + Hotel"
            tabClassName="flightHotel"
          >
            <Flight />
          </Tab>
          <Tab eventKey="holidays" title="Holidays" tabClassName="holiday">
            <Holidays />
          </Tab>
        </Tabs>
      </div>
    );
  }
}

export default Engine;
