export function HotelDate(date, name) {
  return (dispatch) => {
    dispatch({
      type: name === "depart" ? "FLIGHTDEPARTDATE" : "FLIGHTRETURNDATE",
      payload: date,
    });
  };
}
