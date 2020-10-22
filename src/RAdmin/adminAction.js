import Axios from 'axios'
import { BASE_URL } from '../utilities/api';

export function updateGalleryAction(e) {
  return (dispatch) => {
    dispatch({ type: "ADDHOLIDAYTYPEIMG" });
  };
}

export function getValueAction(event) {
  return (dispatch) => {
    dispatch({ type: "UPDATEVALUE", payload: event });
  };
}

export function handleCountryChange(event) {
  return (dispatch) => {
    dispatch({ type: "UPDATE_COUNTRY", payload: event });
  };
}

export function HomeViewAction(check) {
  return (dispatch) => {
    dispatch({ type: "HOMEVIEW", payload: check });
  };
}

export function getAllCountries() {
  return async (dispatch) => {
    try {
      const response = await Axios.get(`${BASE_URL}/countries`)
      dispatch({ type: "COUNTRY_LIST", payload: response.data });
    } catch (err) {
      console.log("Error ", err)
    }
  };
}

export function countrySaveUpdate(countryDetail) {
  return async (dispatch) => {
    try {
      if (countryDetail.id) {
      const response = await Axios.put(`${BASE_URL}/countries/${countryDetail.id}`, countryDetail)
       dispatch({ type: "COUNTRY_SAVE", payload: response.data });    
      } else {
          const response = await Axios.post(`${BASE_URL}/countries`, countryDetail)
       dispatch({ type: "COUNTRY_SAVE", payload: response.data });
      }
    
    } catch (err) {
      console.log("Error ", err)
    }
  };
}

export function setCountryInitialData(countryData) {
  return { type: "COUNTRY_INITIAL_DATA", payload: countryData}
}

export function handleHolidayChange(event) {
  return (dispatch) => {
    dispatch({ type: "UPDATE_HOLIDAY", payload: event });
  };
}

export function getAllHolidayTypes() {
  return async (dispatch) => {
    try {
      const response = await Axios.get(`${BASE_URL}/holiday-types`)
      dispatch({ type: "HOLIDAY_LIST", payload: response.data });
    } catch (err) {
      console.log("Error ", err)
    }
  };
}

export function holidaySaveUpdate(holidayDetail) {
  return async (dispatch) => {
    try {
      if (holidayDetail.id) {
      const response = await Axios.put(`${BASE_URL}/holiday-types/${holidayDetail.id}`, holidayDetail)
       dispatch({ type: "HOLIDAY_SAVE", payload: response.data });    
      } else {
          const response = await Axios.post(`${BASE_URL}/holiday-types`, holidayDetail)
       dispatch({ type: "HOLIDAY_SAVE", payload: response.data });
      }
    
    } catch (err) {
      console.log("Error ", err)
    }
  };
}

export function setHolidayInitialData(holidayData) {
  return { type: "HOLIDAY_INITIAL_DATA", payload: holidayData}
}
