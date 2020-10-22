import React, { Component } from "react";
import HolidayStand from "../assets/holidaystand.png";

class Navigation extends Component {
  render() {
    return (
      <nav>
        <div className="wrapper">
          <div className="logo">
            <a href="">
              <img
                src={HolidayStand}
                alt="Holoday Stand"
                title="Holiday Stand"
              />
            </a>
          </div>

          <div className="nav">
            <ul>
              <li>
                <a href="javascript:void(0)" className="active">
                  Home
                </a>
              </li>
              <li>
                <a href="">Flights</a>
              </li>
              <li>
                <a href="">Hotels</a>
              </li>
              <li>
                <a href="">Holidays</a>
              </li>
              <li>
                <a href="">Special Offers</a>
              </li>
              <li>
                <a href="">Contact Us</a>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    );
  }
}

export default Navigation;
