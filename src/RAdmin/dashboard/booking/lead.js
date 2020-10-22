import React, { Component } from "react";
import DatePicker from "react-datepicker";

import "react-datepicker/dist/react-datepicker.css";

class Lead extends Component {
  render() {
    return (
      <>
        <div className="booking-wrapper">
          <h4>New Booking</h4>
          <div className="bookingRow">
            <div className="label">Client Name</div>
            <div className="input" style={{ display: "flex" }}>
              <select style={{ width: "65px", marginRight: "8px" }}>
                <option>-</option>
                <option value="Dr">Dr.</option>
                <option value="Mr">Mr.</option>
                <option value="Mrs">Mrs.</option>
                <option value="Miss">Miss.</option>
                <option value="Master">Master</option>
                <option value="Baby">Baby</option>
              </select>
              <input
                type="text"
                placeholder="First Name"
                style={{ width: "180px", marginRight: "8px" }}
                name="fName"
              />
              <input
                type="text"
                placeholder="Middle Name"
                style={{ width: "180px", marginRight: "8px" }}
                name="mName"
              />
              <input
                type="text"
                placeholder="Last Name"
                style={{ width: "180px", marginRight: "8px" }}
                name="lName"
              />
            </div>
          </div>

          <div className="bookingRow">
            <div className="label">Address</div>
            <div className="input">
              <textarea></textarea>
            </div>
          </div>

          <div className="bookingRow">
            <div className="label">Post Code </div>
            <div className="input">
              <input
                type="text"
                name="postCode"
                placeholder="Post Code"
                style={{ width: "200px" }}
              />
            </div>
          </div>

          <div className="bookingRow">
            <div className="label">Country</div>
            <div className="input">
              <input
                type="text"
                name="postCode"
                placeholder="Country"
                style={{ width: "200px" }}
              />
            </div>
          </div>

          <div className="bookingRow">
            <div className="label">
              Client Contact Number <span>(Primary)</span>
            </div>
            <div className="input">
              <input
                type="text"
                name="contactPrimary"
                placeholder="Client Contact number"
                style={{ width: "200px" }}
              />
            </div>
          </div>

          <div className="bookingRow">
            <div className="label">
              Client Contact Number <span>(Secondary)</span>
            </div>
            <div className="input">
              <input
                type="text"
                name="contactSecondary"
                placeholder="Client Contact number"
                style={{ width: "200px" }}
              />
            </div>
          </div>

          <div className="bookingRow">
            <div className="label">Destination</div>
            <div className="input">
              <input
                type="text"
                name="destination"
                placeholder="Destination"
                style={{ width: "200px" }}
              />
            </div>
          </div>

          <div className="bookingRow">
            <div className="label">Date of Depart</div>
            <div className="input">
              <DatePicker
                placeholderText="Journey date"
                name="dDate"
                dateFormat="dd/MM/yyyy"
                value=""
              />
            </div>
          </div>

          <div className="bookingRow">
            <div className="label">Agent Name</div>
            <div className="input">
              <select style={{ width: "200px" }}>
                <option>-</option>
              </select>
            </div>
          </div>

          <div className="bookingRow">
            <div className="label">Booking Type</div>
            <div className="input">
              <select style={{ width: "200px" }}>
                <option>-</option>
                <option value="Flight">Flight Only</option>
                <option value="Hotel">Hotel Only</option>
                <option value="FlightHotel">Flight + Hotel</option>
                <option value="Holiday">Holiday</option>
                <option value="Car">Car</option>
              </select>
            </div>
          </div>

          <div className="bookingRow">
            <div className="label">Source</div>
            <div className="input">
              <select style={{ width: "200px" }}>
                <option>-</option>
              </select>
            </div>
          </div>

          <div className="bookingRow">
            <div className="label">Trading Source</div>
            <div className="input">
              <select style={{ width: "200px" }}>
                <option>-</option>
              </select>
            </div>
          </div>

          <div className="bookingRow">
            <div className="label"></div>
            <div className="input">
              <input type="button" value="Submit" />
            </div>
          </div>
        </div>
      </>
    );
  }
}

export default Lead;
