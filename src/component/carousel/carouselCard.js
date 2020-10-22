import React from "react";

const Card = (props) => {
  let item = props.flight.flight;
  return (
    <div className="carouselWarpper">
      {item &&
        item.map((item, index) => {
          return (
            <div className="list" key={index}>
              <figure>
                <img src={item.url} alt={item.heading} />
                <div className="overlay">
                  <span>Book Now</span>
                </div>
              </figure>

              <div className="info">
                <div className="head">
                  <div className="route">{item.heading}</div>
                  <div className="finfo">{item.trip}</div>
                </div>
                <div className="fare">
                  <div className="from">from</div>
                  <div className="cost">&#163;{item.fare}</div>
                </div>
              </div>
            </div>
          );
        })}
    </div>
  );
};

export default Card;
