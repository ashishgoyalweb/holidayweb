import React, { Component } from "react";
import Breadcrum from "../breadcrum";

import Lead from "./lead";
import AddPassenger from "./addPassenger";
import FlightBooking from "./flight";

import "./booking.scss";

import { bookingMenu } from "../../../utilities/constants";

class NewBooking extends Component {
  constructor() {
    super();
    this.state = {
      currTab: "LEAD",
    };
  }

  onTabClick = (tab) => {
    this.setState({ currTab: tab });
  };

  renderTabs = () => {
    const { currTab } = this.state;

    switch (currTab) {
      case "LEAD":
        return <Lead />;
      case "APAS":
        return <AddPassenger />;

      case "FLIGHT":
        return <FlightBooking />;
      default:
        return null;
    }
  };
  render() {
    return (
      <>
        <Breadcrum title="New Booking" />
        <div className="wrapper booking">
          <div className="lft">
            <ul>
              {bookingMenu.map((menu) => (
                <li key={menu.key} onClick={() => this.onTabClick(menu.key)}>
                  {menu.tabName}
                </li>
              ))}
            </ul>
          </div>
          <div className="rgt">{this.renderTabs()}</div>
        </div>
      </>
    );
  }
}

export default NewBooking;
