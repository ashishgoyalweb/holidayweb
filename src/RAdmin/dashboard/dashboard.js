import React, { Component } from "react";
import "./dashboard.scss";
import holidaystand from "./../../assets/logo-white.png";
import { Link } from "react-router-dom";
import nikhil from "../assets/user/nikhil.jpg";

import { RouteConstants } from "../../utilities/constants";
import GetAdminContent from "./router";

class Dashboard extends Component {
  constructor() {
    super();
    this.state = {
      subMenu: "",
    };
  }
  handleMainMenu = (val) => {
    this.setState({ subMenu: val });
  };
  render() {
    return (
      <div className="dashboard">
        <div className="lft">
          <div className="logo">
            <img src={holidaystand} />
          </div>

          <div className="user">
            <div className="user-profile">
              <div className="profile-img">
                <img src={nikhil} />
              </div>

              <div className="profile-text">
                <h5>Nikhil</h5>
                <span>
                  <i className="fa fa-power-off"></i>
                </span>
              </div>
            </div>
          </div>

          <div className="link">
            <ul>
              <li>
                <i className="fa fa-tachometer"></i> <span>Dashboard</span>
              </li>
              <li onClick={() => this.handleMainMenu("booking")}>
                <i className="fa fa-pound"></i> <span>Booking</span>
                <ul
                  style={{
                    display:
                      this.state.subMenu === "booking" ? "block" : "none",
                  }}
                >
                  <li>
                    <Link to={RouteConstants.adminRoutes.newbooking}>
                      New Booking
                    </Link>
                  </li>
                  <li>Existing Booking</li>
                  <li>Import PNR</li>
                </ul>
              </li>
              <li>
                <i className="fa fa-home"></i> <span>Home</span>
              </li>
              <li>
                <i className="fa fa-plane"></i> <span>Flight</span>
              </li>
              <li>
                <i className="fa fa-hotel"></i> <span>Hotel</span>
              </li>
              <li onClick={() => this.handleMainMenu("holiday")}>
                <i className="fa fa-search"></i> <span>Holidays</span>
                <ul
                  style={{
                    display:
                      this.state.subMenu === "holiday" ? "block" : "none",
                  }}
                >
                  <li>
                    <Link to={RouteConstants.adminRoutes.holiday}>
                      Holiday Type
                    </Link>
                  </li>
                  <li>
                    <Link to={RouteConstants.adminRoutes.country}>Country</Link>
                  </li>

                  <li>
                    <Link to={RouteConstants.adminRoutes.package}>Package</Link>
                  </li>
                </ul>
              </li>
              <li>
                <i className="fa fa-tag"></i> <span>Special Offers</span>
              </li>
              <li>
                <i className="fa fa-map"></i> <span>Contact</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="rgt">
          <header>Header</header>
          <div className="route-Container">
            <GetAdminContent />
          </div>
        </div>
      </div>
    );
  }
}

export default Dashboard;
