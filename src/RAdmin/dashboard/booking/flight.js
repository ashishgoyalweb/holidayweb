import React, { Component } from "react";

import DatePicker from "react-datepicker";
import { connect } from "react-redux";

import "react-datepicker/dist/react-datepicker.css";

import {
  AddSegmentAction,
  RemoveSegmentAction,
  SegmentValueAction,
} from "./bookingAction";
import Input from "../../../component/input";

class FlightBooking extends Component {
  constructor(props) {
    super(props);
  }

  addSegment = () => {
    this.props.AddSegmentAction();
  };
  SegmentValue = (event) => {
    this.props.SegmentValueAction(event);
  };
  RemoveSegment = (index) => {
    this.props.RemoveSegmentAction(index);
  };
  render() {
    console.log("pax ", this.props.pax);
    let pax = this.props.pax.filter((idx) => idx.travller === "Adult");
    console.log("adult ", pax);
    return (
      <>
        <div className="booking-wrapper flight">
          <h4>Flight Details</h4>
          <div className="flightInfo">
            <table>
              <thead>
                <tr>
                  <th>S.No.</th>
                  <th>
                    Airlines
                    <br />
                    Flight No.
                  </th>
                  <th>
                    Departure
                    <br /> Airport
                  </th>
                  <th>
                    Arrival
                    <br /> Airport
                  </th>
                  <th>
                    Date of
                    <br /> Departure
                  </th>
                  <th>
                    Date of
                    <br /> Arrival
                  </th>
                  <th>
                    Depart
                    <br /> Time
                  </th>
                  <th>
                    Arrival
                    <br /> Time
                  </th>
                  <th>PNR</th>
                  <th>
                    Airline
                    <br /> Refrence
                  </th>
                  <th>Class</th>
                  <th>Supplier</th>
                  <th>&nbsp;</th>
                </tr>
              </thead>
              <tbody>
                {this.props.flightBooking.map((item, index) => {
                  return (
                    <tr key={index}>
                      <td>{index + 1}</td>
                      <td>
                        <Input
                          type="text"
                          placeholder="Airline/Flight No."
                          action={() => this.SegmentValue(index)}
                          Name="flightNo"
                          Value={this.props.flightBooking[index].flightNo}
                        />
                      </td>
                      <td>
                        <Input
                          type="text"
                          placeholder="Departure Airport"
                          action={() => this.SegmentValue(index)}
                          Name="departAir"
                          Value={this.props.flightBooking[index].departAir}
                        />
                      </td>
                      <td>
                        <Input
                          type="text"
                          placeholder="Arrival Airport"
                          action={() => this.SegmentValue(index)}
                          Name="arrivalAir"
                          Value={this.props.flightBooking[index].arrivalAir}
                        />
                      </td>
                      <td>
                        <DatePicker
                          placeholderText="Dapart date"
                          name="DOB"
                          dateFormat="dd/MM/yyyy"
                          onSelect={() => this.SegmentValue(index)}
                          name="departDate"
                          value={this.props.flightBooking[index].departDate}
                        />
                      </td>
                      <td>
                        <DatePicker
                          placeholderText="Arrival date"
                          name="DOB"
                          dateFormat="dd/MM/yyyy"
                          onSelect={(date) => this.handlePaxValue(index, date)}
                          name="arrivalDate"
                          value={this.props.flightBooking[index].arrivalDate}
                        />
                      </td>
                      <td>
                        <Input
                          type="text"
                          placeholder="Depart Time"
                          action={() => this.SegmentValue(index)}
                          Name="departTime"
                          Value={this.props.flightBooking[index].departTime}
                        />
                      </td>
                      <td>
                        <Input
                          type="text"
                          placeholder="Arrival Time"
                          action={() => this.SegmentValue(index)}
                          Name="arrivalTime"
                          Value={this.props.flightBooking[index].arrivalTime}
                        />
                      </td>
                      <td>
                        <Input
                          type="text"
                          placeholder="PNR"
                          action={() => this.SegmentValue(index)}
                          Name="PNR"
                          Value={this.props.flightBooking[index].PNR}
                        />
                      </td>
                      <td>
                        <Input
                          type="text"
                          placeholder="Airline Refrence"
                          action={() => this.SegmentValue(index)}
                          Name="airlineRef"
                          Value={this.props.flightBooking[index].airlineRef}
                        />
                      </td>
                      <td>
                        <Input
                          type="text"
                          placeholder="Class"
                          action={() => this.SegmentValue(index)}
                          Name="class"
                          Value={this.props.flightBooking[index].class}
                        />
                      </td>
                      <td>
                        <Input
                          type="text"
                          placeholder="Supplier"
                          action={() => this.SegmentValue(index)}
                          Name="supplier"
                          Value={this.props.flightBooking[index].supplier}
                        />
                      </td>
                      <td>
                        <i
                          className="fa fa-trash"
                          onClick={() => this.RemoveSegment(index)}
                        ></i>
                      </td>
                    </tr>
                  );
                })}
              </tbody>
            </table>
          </div>
          <input type="button" value="Add Segment" onClick={this.addSegment} />
          <div className="note">
            <label>Note: </label> <textarea></textarea>
          </div>
          <div className="note">
            <label style={{ verticalAlign: "middle" }}>Airport Terminal:</label>
            <Input type="text" placeholder="Airport Terminal" Name="terminal" />
            <label style={{ verticalAlign: "middle", marginLeft: "40px" }}>
              Baggage:
            </label>
            <Input type="text" placeholder="Baggage" Name="terminal" />
          </div>

          <div className="flightAmount">
            <h4>Net</h4>
            <table>
              <thead>
                <tr>
                  <th>Base Fare</th>
                  <th>Taxes</th>
                  <th>No. of Passengers</th>
                  <th>Travleer</th>
                  <th>Total Fare</th>
                </tr>
              </thead>
            </table>
          </div>
        </div>
      </>
    );
  }
}

const mapStateToProps = (state) => ({
  flightBooking: state.AdminNewBooking.flightBooking,
  pax: state.AdminNewBooking.pax,
});

export default connect(mapStateToProps, {
  AddSegmentAction,
  RemoveSegmentAction,
  SegmentValueAction,
})(FlightBooking);
