import React from "react";
import { Switch, Route } from "react-router-dom";
import { RouteConstants } from "../../utilities/constants";
//import Country from "./holidays/country";
import HolidayType from "./holidays/holidaytype";
import CountryType from "./holidays/country";
import HolidayPackage from "./holidays/package";
import NewBooking from "./booking/newbooking";

const GetAdminContent = () => {
  return (
    <>
      <Switch>
        <Route
          path={RouteConstants.adminRoutes.newbooking}
          component={NewBooking}
        />
        {/* <Route path={RouteConstants.adminRoutes.dashboard} component={ProjectDashboard} /> */}
        <Route
          path={RouteConstants.adminRoutes.holiday}
          component={HolidayType}
        />
        <Route
          path={RouteConstants.adminRoutes.country}
          component={CountryType}
        />
        <Route
          path={RouteConstants.adminRoutes.pacakge}
          component={HolidayPackage}
        />
      </Switch>
    </>
  );
};

export default GetAdminContent;
