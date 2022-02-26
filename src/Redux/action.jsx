import {
  FILTER_BY_AC,
  FILTER_BY_CANCELLATION,
  FILTER_BY_IRON,
  FILTER_BY_KITCHEN,
  FILTER_BY_PARKING,
  FILTER_BY_PLACE,
  FILTER_BY_PRICE,
  FILTER_BY_WIFI,
  FILTER_BY_WM,
  SHOW_FILTER_DATA,
  SHOW_SEARCH_PLACE
} from "./actiontype";

export const filterbycancellation = (payload) => ({
  type: FILTER_BY_CANCELLATION,
  payload
});
export const filterbywifi = (payload) => ({ type: FILTER_BY_WIFI, payload });
export const filterbykitchen = (payload) => ({
  type: FILTER_BY_KITCHEN,
  payload
});
export const filterbyac = (payload) => ({ type: FILTER_BY_AC, payload });
export const filterbywm = (payload) => ({ type: FILTER_BY_WM, payload });
export const filterbyiron = (payload) => ({ type: FILTER_BY_IRON, payload });
export const filterbyparking = (payload) => ({
  type: FILTER_BY_PARKING,
  payload
});
export const filterbyprice = (payload) => ({ type: FILTER_BY_PRICE, payload });
export const filterbyplace = (payload) => ({ type: FILTER_BY_PLACE, payload });
export const showfilterdata = (payload) => ({
  type: SHOW_FILTER_DATA,
  payload
});
export const showsearchdata=(payload)=>(
  {type:SHOW_SEARCH_PLACE,payload}
)

