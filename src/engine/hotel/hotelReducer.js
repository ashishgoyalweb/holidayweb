let returndate = new Date();

const initialState = {
  adult: 1,
  child: 0,
  ChildAge: [{ age: "" }],
  departDate: new Date(),
  returnDate: new Date(),
};

export const HotelReducer = (state = initialState, action) => {
  switch (action.type) {
    case "FLIGHTDEPARTDATE": {
      return {
        ...state,
        departDate: action.payload,
        returnDate: action.payload.addDays(7),
      };
    }

    case "FLIGHTRETURNDATE": {
      return {
        ...state,
        returnDate: action.payload,
      };
    }

    default:
      return state;
  }
};

Date.prototype.addDays = function (days) {
  let date = new Date(this.valueOf());
  date.setDate(date.getDate() + days);
  return date;
};
