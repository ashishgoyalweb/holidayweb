import React from "react";
import "./footer.scss";
import holidaystand from "../../assets/holidaystand-transparent.png";

const Footer = () => {
  return (
    <footer>
      <div className="wrapper">
        <ul>
          <li>
            <h4>Book Now</h4>
            <a href="index.html">Flight</a>
            <a href="index.html">Holidays</a>
            <a href="index.html">Hotels</a>
            <a href="index.html">Packages</a>
            <a href="index.html">Car Rent</a>
          </li>

          <li>
            <h4>About Holiday Stand</h4>
            <a href="index.html">Contact Us</a>
            <a href="index.html">About Us</a>
            <a href="index.html">Site Map</a>
            <a href="index.html">Terms &amp; Conditions</a>
            <a href="index.html">Privacy Policy</a>
          </li>

          <li>
            <h4>Customer Products</h4>
            <a href="index.html">FAQ</a>
            <a href="index.html">Baggage Policies</a>
            <a href="index.html">Special Assistance</a>
            <a href="index.html">Traveling with Infants</a>
            <a href="index.html">Purchasing &amp; Refunds</a>
            <a href="index.html">Web Check-in</a>
          </li>

          <li>
            <div className="logo">
              <img src={holidaystand} />
            </div>
            <div className="info">
              <i className="fa fa-map-marker"></i> 46 Stirling Close London Sw
              16 5hh
            </div>
            <div className="info">
              <i className="fa fa-envelope"></i>{" "}
              <a href="mailto:info@holidaystand.co.uk">
                info@holidaystand.co.uk
              </a>
            </div>
            <div className="info">
              <i className="fa fa-phone"></i> 020 3137 8757
            </div>
          </li>
        </ul>
      </div>
    </footer>
  );
};

export default Footer;
