import React, { Component } from "react";
import DatePicker from "react-datepicker";
import { connect } from "react-redux";

import "react-datepicker/dist/react-datepicker.css";

import { AddPaxAction, RemovePaxAction, PaxValueAction } from "./bookingAction";

class AddPassenger extends Component {
  constructor(props) {
    super(props);
  }

  handleAddPax = () => {
    this.props.AddPaxAction();
  };

  handleRemovePax = (idx) => {
    this.props.RemovePaxAction(idx);
  };

  handlePaxValue = (index) => (event) => {
    this.props.PaxValueAction(index, event);
  };

  render() {
    return (
      <>
        <div className="booking-wrapper pax">
          <h4>Passenger Details</h4>
          {this.props.pax.map((item, index) => {
            return (
              <div className="addpax" key={index}>
                <select
                  style={{ width: "70px", marginRight: "5px", height: "38px" }}
                  value={this.props.pax[index].title}
                  onChange={this.handlePaxValue(index)}
                  name="title"
                >
                  <option value="Title">Title</option>
                  <option value="Dr.">Dr.</option>
                  <option value="Mr.">Mr.</option>
                  <option value="Mrs.">Mrs.</option>
                  <option value="Miss.">Miss.</option>
                  <option value="Master">Master</option>
                  <option value="Baby">Baby</option>
                </select>
                <input
                  type="text"
                  name="fname"
                  placeholder="Firts Name"
                  value={this.props.pax[index].fname}
                  onChange={this.handlePaxValue(index)}
                />
                <input
                  type="text"
                  name="mname"
                  placeholder="Middle Name"
                  value={this.props.pax[index].mname}
                  onChange={this.handlePaxValue(index)}
                />
                <input
                  type="text"
                  name="lname"
                  placeholder="Last Name"
                  value={this.props.pax[index].lname}
                  onChange={this.handlePaxValue(index)}
                />
                <select
                  style={{ width: "75px", marginRight: "5px", height: "38px" }}
                  value={this.props.pax[index].travller}
                  onChange={this.handlePaxValue(index)}
                  name="travller"
                >
                  <option value="Travller">Travller</option>
                  <option value="Adult">Adult</option>
                  <option value="Child">Child</option>
                  <option value="Infant">Infant</option>
                </select>
                <DatePicker
                  placeholderText="DOB"
                  name="DOB"
                  dateFormat="dd/MM/yyyy"
                  value={this.props.pax[index].DOB}
                  onSelect={(date) => this.handlePaxValue(index, date)}
                  name="DOB"
                />
                <input
                  type="text"
                  name="ticketNo"
                  placeholder="Ticket No."
                  value={this.props.pax[index].ticketNo}
                  onChange={this.handlePaxValue(index)}
                />
                <span
                  className="remove"
                  onClick={() => this.handleRemovePax(index)}
                >
                  X
                </span>
              </div>
            );
          })}

          <div className="btn">
            <input
              type="button"
              value="Add Passenger"
              style={{ marginRight: "10px" }}
              onClick={this.handleAddPax}
            />
            <input type="button" value="Save" />
          </div>
        </div>
      </>
    );
  }
}

const mapStateToProps = (state) => ({
  pax: state.AdminNewBooking.pax,
});

export default connect(mapStateToProps, {
  AddPaxAction,
  RemovePaxAction,
  PaxValueAction,
})(AddPassenger);
