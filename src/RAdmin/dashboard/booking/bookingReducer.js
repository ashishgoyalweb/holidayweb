const initialState = {
  pax: [
    {
      title: "Title",
      fname: "",
      mname: "",
      lname: "",
      travller: "Adult",
      DOB: new Date(),
      ticketNo: "",
    },
  ],
  flightBooking: [],
};

export const AdminNewBooking = (state = initialState, action) => {
  switch (action.type) {
    case "ADDPAX": {
      return {
        ...state,
        pax: state.pax.concat([
          {
            title: "Title",
            fname: "",
            mname: "",
            lname: "",
            travller: "Adult",
            DOB: new Date(),
            ticketNo: "",
          },
        ]),
      };
    }

    case "REMOVEPAX": {
      return {
        ...state,
        pax: state.pax.filter((s, idx) => action.payload !== idx),
      };
    }

    case "PAXVALUE": {
      const newValues = state.pax.map((item, indx) => {
        if (action.payload.index !== indx) return item;
        return {
          ...item,
          [action.payload.event.target.name]: action.payload.event.target.value,
        };
      });
      console.log("state ", newValues);
      return { ...state, pax: newValues };
    }

    case "ADDSEGMENT": {
      return {
        ...state,
        flightBooking: state.flightBooking.concat([
          {
            flightNo: "",
            departAir: "",
            arrivalAir: "",
            departDate: new Date(),
            arrivalDate: new Date(),
            departTime: "",
            arrivalTime: "",
            PNR: "",
            airlineRef: "",
            class: "",
            supplier: "",
          },
        ]),
      };
    }

    case "REMOVESEGMENT": {
      return {
        ...state,
        flightBooking: state.flightBooking.filter(
          (s, idx) => action.payload !== idx
        ),
      };
    }

    case "SEGMENTVALUE": {
      const newValues = state.flightBooking.map((item, indx) => {
        if (action.payload.index !== indx) return item;
        return {
          ...item,
          [action.payload.event.target.name]: action.payload.event.target.value,
        };
      });
      return { ...state, flightBooking: newValues };
    }

    default:
      return {
        ...state,
      };
  }
};
