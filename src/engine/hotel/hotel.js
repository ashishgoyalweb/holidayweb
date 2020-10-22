import React, { Component } from "react";
import { connect } from "react-redux";
import DatePicker from "react-datepicker";

import "react-datepicker/dist/react-datepicker.css";

import * as constant from "../../utilities/defination";
import { HotelDate } from "./hotelAction";

class Hotel extends Component {
  constructor(props) {
    super(props);
    this.state = { openTraveller: false };
  }

  toggleTraveller = () => {
    const { openTraveller } = this.state;
    this.setState({ openTraveller: !openTraveller });
  };

  hotelDate = (date, name) => {
    this.props.HotelDate(date, name);
  };

  render() {
    return (
      <div className="engine-wrapper hotel">
        <div className="trip">
          <div className="tInfo">
            <div className="dFrom">
              <span>Dsetination</span>
              <input type="text" placeholder="Enter a destination airport" />
            </div>
            <div className="date">
              <span>Check-in</span>
              <DatePicker
                selected={this.props.departDate}
                onChange={(date) => this.hotelDate(date, "depart")}
                placeholderText="Dapart date"
                minDate={new Date()}
                selectsStart
                startDate={this.props.departDate}
                endDate={this.props.returnDate}
                name="depart"
                value={this.props.departDate}
                dateFormat="dd/MM/yyyy"
              />
            </div>
            <div className="date">
              <span>Check-out</span>
              {
                <DatePicker
                  selected={this.props.returnDate}
                  onChange={(date) => this.hotelDate(date, "return")}
                  placeholderText="Return date"
                  minDate={this.props.departDate}
                  selectsEnd
                  startDate={this.props.departDate}
                  endDate={this.props.returnDate}
                  name="return"
                  dateFormat="dd/MM/yyyy"
                />
              }
            </div>
            <div className="traveller">
              <span>Guests & Rooms</span>
              <div
                className={"info " + (this.state.openTraveller ? "up" : "down")}
                onClick={this.toggleTraveller}
              >
                <span>Traveller,</span>
              </div>
              {this.state.openTraveller && this.travellerInfo()}
            </div>

            <div className="btn">
              <div className="btnInfo">
                <div>
                  <input type="button" value="search hotel" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }

  travellerInfo() {
    return (
      <div className="travellerInfo">
        <ul>
          <li>
            <span>
              <section>
                Adults <span>(12+)</span>
                <select value="" name="adult">
                  <option>test</option>
                </select>
              </section>
            </span>
          </li>
          <li>
            <span>
              <section>
                Children <span>(2-11)</span>
                <select value="" name="child">
                  <option value="">test</option>
                </select>
              </section>
            </span>
          </li>
          <li>
            <input type="button" value="Add Room" />
          </li>
        </ul>

        <div className="child">if child</div>
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  departDate: state.HotelReducer.departDate,
  returnDate: state.HotelReducer.returnDate,
});

export default connect(mapStateToProps, { HotelDate })(Hotel);
