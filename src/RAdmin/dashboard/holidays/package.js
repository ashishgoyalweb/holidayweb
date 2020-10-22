import React, { Component } from "react";

import Breadcrum from "../breadcrum";
import { connect } from "react-redux";
import {
  getValueAction,
  updateGalleryAction,
  HomeViewAction,
} from "../../adminAction";

class HolidayPackage extends Component {
  constructor() {
    super();
    this.state = {
      activetab: "add",
    };
  }

  handleTab = (val) => {
    this.setState({ activetab: val });
  };

  updateGallery = () => {
    this.props.updateGalleryAction();
  };

  getValue = (event) => {
    this.props.getValueAction(event);
  };

  handleHomeView = (event) => {
    this.props.HomeViewAction(event.target.checked);
  };

  handlePackage = () => {
    let packageJSON = {};
    packageJSON = {
      boardbasis: this.props.boardbasis,
      destination: this.props.destination,
      packageName: this.props.packageName,
      DepartDate: this.props.DepartDate,
      ReturnDate: this.props.ReturnDate,
      night: this.props.night,
      inclusive: this.props.inclusive,
      description: this.props.description,
      pacakgeImg: this.props.pacakgeImg,
      flightInfo: this.props.flightInfo,
      fare: this.props.fare,
      showOnHomeScreen: this.props.showOnHomeScreen,
    };
    console.log("Package JSON ", packageJSON);
  };

  render() {
    return (
      <>
        <Breadcrum title="Holiday Package" />
        <div className="wrapper holiday">
          <ul className="tabs">
            <li
              className={this.state.activetab === "add" ? "active" : ""}
              onClick={() => this.handleTab("add")}
            >
              <span>Add</span>
            </li>
            <li
              className={this.state.activetab === "view" ? "active" : ""}
              onClick={() => this.handleTab("view")}
            >
              <span>View</span>
            </li>
          </ul>

          <div
            className="tab-container"
            style={{
              display: this.state.activetab === "add" ? "block" : "none",
            }}
          >
            <h4>Add Holiday Package </h4>
            <div className="tab-row">
              <div className="tab-col-one">Board Basis</div>
              <div className="tab-col-two">
                <select
                  value={this.props.boardbasis}
                  name="boardbasis"
                  onChange={(e) => this.getValue(e)}
                >
                  <option>-</option>
                  <option value="All Inclusive">All Inclusive</option>
                  <option value="Beach Holidays">Beach Holidays</option>
                </select>
              </div>
            </div>

            <div className="tab-row">
              <div className="tab-col-one">Destination</div>
              <div className="tab-col-two">
                <select
                  value={this.props.destination}
                  name="destination"
                  onChange={(e) => this.getValue(e)}
                >
                  <option>-</option>
                  <option value="India">India</option>
                  <option value="California">California</option>
                </select>
              </div>
            </div>

            <div className="tab-row">
              <div className="tab-col-one">Package Name</div>
              <div className="tab-col-two">
                <input
                  type="text"
                  placeholder="Package Name"
                  name="packageName"
                  value={this.props.packageName}
                  onChange={(e) => this.getValue(e)}
                />
              </div>
            </div>

            <div className="tab-row">
              <div className="tab-col-one">Travel Date</div>
              <div className="tab-col-two">
                <input
                  type="text"
                  placeholder="Depart Travel Date"
                  style={{ width: "40%", marginRight: "20px" }}
                  name="DepartDate"
                  value={this.props.DepartDate}
                  onChange={(e) => this.getValue(e)}
                />
                <input
                  type="text"
                  placeholder="Return Travel Date"
                  style={{ width: "40%" }}
                  name="ReturnDate"
                  value={this.props.ReturnDate}
                  onChange={(e) => this.getValue(e)}
                />
              </div>
            </div>

            <div className="tab-row">
              <div className="tab-col-one">Night</div>
              <div className="tab-col-two">
                <input
                  type="text"
                  placeholder="Night"
                  style={{ width: "40%" }}
                  name="night"
                  value={this.props.night}
                  onChange={(e) => this.getValue(e)}
                />
              </div>
            </div>

            <div className="tab-row">
              <div className="tab-col-one">Inclusive</div>
              <div className="tab-col-two">here come text edition</div>
            </div>

            <div className="tab-row">
              <div className="tab-col-one">Description</div>
              <div className="tab-col-two">here come text edition</div>
            </div>

            <div className="tab-row">
              <div className="tab-col-one">Image</div>
              <div className="tab-col-two">
                <input
                  type="file"
                  name="pacakgeImg"
                  onChange={this.updateGallery}
                  accept="image/gif,image/jpeg,image/jpg,image/png"
                />
                <div className="thum-container">
                  {this.props.pacakgeImg.map((imageURI) => {
                    return (
                      <div className="thum" key={imageURI}>
                        <img
                          className="photo-uploaded"
                          src={imageURI}
                          alt="Photo uploaded"
                        />
                      </div>
                    );
                  })}
                </div>
              </div>
            </div>

            <div className="tab-row">
              <div className="tab-col-one">Flight Info</div>
              <div className="tab-col-two">here come text edition</div>
            </div>

            <div className="tab-row">
              <div className="tab-col-one">Fare</div>
              <div className="tab-col-two">
                <input
                  type="text"
                  placeholder="Package cost PP"
                  name="fare"
                  value={this.props.fare}
                  onChange={(e) => this.getValue(e)}
                />
              </div>
            </div>

            <div className="tab-row">
              <div className="tab-col-one">Show on Home page</div>
              <div className="tab-col-two">
                <input
                  type="checkbox"
                  checked={this.props.showOnHomeScreen}
                  onChange={this.handleHomeView}
                />
              </div>
            </div>

            <div className="tab-row">
              <div className="tab-col-one"></div>
              <div className="tab-col-two">
                <input type="button" value="Add" onClick={this.handlePackage} />
              </div>
            </div>
          </div>

          {/*View part */}
          <div
            className="tab-container"
            style={{
              display: this.state.activetab === "view" ? "block" : "none",
            }}
          >
            <h4>View/Delete/Modified Country</h4>

            <div className="tab-row view">
              <table style={{ width: "100%" }}>
                <thead>
                  <tr>
                    <th style={{ width: "5%" }}>S. No.</th>
                    <th style={{ width: "75%" }}>Country List</th>
                    <th style={{ width: "10%" }}>Delete</th>
                    <th style={{ width: "10%" }}>Update</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>1</td>
                    <td>Southern Caribbean Cruise</td>
                    <td>
                      <span>
                        <i className="fa fa-trash"></i>
                      </span>
                    </td>
                    <td>
                      <span>
                        <i className="fa fa-edit"></i>
                      </span>
                    </td>
                  </tr>

                  <tr>
                    <td>2</td>
                    <td>Alaskan Adventure</td>
                    <td>
                      <span>
                        <i className="fa fa-trash"></i>
                      </span>
                    </td>
                    <td>
                      <span>
                        <i className="fa fa-edit"></i>
                      </span>
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </>
    );
  }
}

const mapStateToProps = (state) => ({
  boardbasis: state.AdminReducer.boardbasis,
  destination: state.AdminReducer.destination,
  packageName: state.AdminReducer.packageName,
  DepartDate: state.AdminReducer.DepartDate,
  ReturnDate: state.AdminReducer.ReturnDate,
  night: state.AdminReducer.night,
  inclusive: state.AdminReducer.inclusive,
  description: state.AdminReducer.description,
  pacakgeImg: state.AdminReducer.pacakgeImg,
  flightInfo: state.AdminReducer.flightInfo,
  fare: state.AdminReducer.fare,
  showOnHomeScreen: state.AdminReducer.showOnHomeScreen,
});

export default connect(mapStateToProps, {
  getValueAction,
  updateGalleryAction,
  HomeViewAction,
})(HolidayPackage);
