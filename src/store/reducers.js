import { combineReducers } from "redux";
import { FlightReducer } from "../engine/flight/flightReducer";
import { HotelReducer } from "../engine/hotel/hotelReducer";
import { AdminNewBooking } from "../RAdmin/dashboard/booking/bookingReducer";
import { AdminReducer } from "../RAdmin/adminReducer";
import {loginReducer} from '../RAdmin/Login/loginReducer'

export default combineReducers({
  FlightReducer,
  HotelReducer,
  AdminNewBooking,
  AdminReducer,
  LoginReducer: loginReducer
});
