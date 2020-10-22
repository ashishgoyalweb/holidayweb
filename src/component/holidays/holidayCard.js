import React from "react";

const HolidayCard = (props) => {
  let item = props.holidayItem;
  return (
    <>
      <div className="itemBox">
        <img src={item.url} alt={item.heading} />
        <div className="infoHoliday">
          <div className="holidayHeading">{item.heading}</div>
          <div className="holidaytxt">{item.txt}</div>
          <div className="holidayInfo">
            <div className="head">
              <div className="route">{item.subhead}</div>
              <div className="finfo">{item.trip}</div>
            </div>
            <div className="fare">
              <div className="from">from</div>
              <div className="cost">
                &#163;{item.fare}
                <span className="from">pp</span>
              </div>
            </div>
          </div>
          <div className="btnInfo">
            <input type="button" value="Book Now" />
          </div>
        </div>
      </div>
    </>
  );
};

export default HolidayCard;
