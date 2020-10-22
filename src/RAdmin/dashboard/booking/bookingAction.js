export function AddPaxAction() {
  return (dispatch) => {
    dispatch({ type: "ADDPAX" });
  };
}

export function RemovePaxAction(idx) {
  return (dispatch) => {
    dispatch({ type: "REMOVEPAX", payload: idx });
  };
}

export function PaxValueAction(index, event) {
  return (dispatch) => {
    dispatch({ type: "PAXVALUE", payload: { index, event } });
  };
}

export function AddSegmentAction() {
  return (dispatch) => {
    dispatch({ type: "ADDSEGMENT" });
  };
}

export function RemoveSegmentAction(idx) {
  return (dispatch) => {
    dispatch({ type: "REMOVESEGMENT", payload: idx });
  };
}

export function SegmentValueAction(event) {
  return (dispatch) => {
    dispatch({ type: "SEGMENTVALUE", payload: event });
  };
}
