import React, { Component } from "react";
import "./holidays.scss";
import axios from "axios";
import HolidayCard from "./holidayCard";
import Heading from "../../utilities/heading";

class Holidays extends Component {
  constructor() {
    super();
    this.state = {
      holidays: [],
    };
  }
  componentDidMount() {
    axios
      .get(
        "https://cors-anywhere.herokuapp.com/http://holidaystand.co.uk/server/db/json/holidays.json"
      )
      .then((res) => {
        this.setState({ holidays: res.data.holidays });
      });
  }

  render() {
    const holidays = this.state.holidays;

    return (
      <>
        <div className="holidaysHome">
          <div className="wrapper">
            <Heading
              heading="Our Most Popular Holiday Packages"
              subheading="Browse through our most popular tours"
            />
            <div className="wrapper-container">
              <div className="lft">
                {holidays.length > 0 ? (
                  <>
                    <HolidayCard holidayItem={holidays[0]} />
                    <HolidayCard holidayItem={holidays[1]} />
                  </>
                ) : null}
              </div>
              <div className="rgt">
                {holidays.length > 0 ? (
                  <>
                    <HolidayCard holidayItem={holidays[2]} />
                  </>
                ) : null}
              </div>
            </div>
          </div>
        </div>
      </>
    );
  }
}

export default Holidays;
