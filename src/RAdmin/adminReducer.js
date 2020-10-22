const initialState = {
  /*Holiday Type */
  holiday: {
    holiday_name: "",
    holiday_image: [],
    holiday_video: [],
    is_banner: false
  },
  holidays: [],
  
  /*Country */
  country: {
    country_name: "",
    country_image: [],
    country_video: [],
    is_banner: false,
  },
  countries: [],

  /*Holiday Package */
  boardbasis: "",
  destination: "",
  packageName: "",
  DepartDate: "",
  ReturnDate: "",
  night: "",
  inclusive: "dummy text inclusive",
  description: "dummy text description",
  pacakgeImg: [
    "https://www.w3schools.com/css/img_5terre.jpg",
    "https://www.w3schools.com/css/img_forest.jpg",
  ],
  flightInfo: "dummy text flightInfo",
  fare: "",
  showOnHomeScreen: false,
};

export const AdminReducer = (state = initialState, action) => {
  switch (action.type) {
    case "ADDHOLIDAYTYPEIMG": {
      return {
        ...state,
      };
    }

    case "UPDATEVALUE": {
      return {
        ...state,
        [action.payload.target.name]: action.payload.target.value,
      };
    }
    case "UPDATE_COUNTRY": {
      return {
        ...state,
        country: {
          ...state.country,
          [action.payload.target.name]: action.payload.target.value,
        },
      };
    }
      case "UPDATE_HOLIDAY": {
      return {
        ...state,
        holiday: {
          ...state.holiday,
          [action.payload.target.name]: action.payload.target.value,
        },
      };
    }

    case "HOMEVIEW": {
      return { ...state, showOnHomeScreen: action.payload };
    }
    case "COUNTRY_LIST": {
      return { ...state, countries: action.payload };
    }
    case "COUNTRY_INITIAL_DATA": {
      return { ...state, country: action.payload };
    }
    case "COUNTRY_SAVE": {
      const index = state.countries.findIndex(
        (count) => count.id === action.payload.id
      );
      if (index !== -1) {
        state.countries[index] = action.payload;
      } else {
        state.countries.push(action.payload);
      }
      return {
        ...state,
        country: {
          country_name: "",
          country_image: [],
          country_video: [],
          is_banner: false,
        },
      };
    }
      
      case "HOLIDAY_LIST": {
      return { ...state, holidays: action.payload };
    }
    case "HOLIDAY_INITIAL_DATA": {
      return { ...state, holiday: action.payload };
    }
    case "HOLIDAY_SAVE": {
      const index = state.holidays.findIndex(
        (hol) => hol.id === action.payload.id
      );
      if (index !== -1) {
        state.holidays[index] = action.payload;
      } else {
        state.holidays.push(action.payload);
      }
      return {
        ...state,
        holiday: {
         holiday_name: "",
    holiday_image: [],
    holiday_video: [],
    is_banner: false
        },
      };
    }

    default:
      return {
        ...state,
      };
  }
};
