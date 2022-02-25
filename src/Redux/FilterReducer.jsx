import {
  FILTER_BY_AC,
  FILTER_BY_CANCELLATION,
  FILTER_BY_IRON,
  FILTER_BY_KITCHEN,
  FILTER_BY_PARKING,
  FILTER_BY_WIFI,
  FILTER_BY_WM,
  SHOW_FILTER_DATA
} from "./actiontype";

import data from "../db.json";

const init = {
  data: data
};

export const FilterReducer = (store = init, { type, payload }) => {
  switch (type) {
    case FILTER_BY_CANCELLATION:
      let filter = data.slice().filter((e) => {
        return e.cancel === true;
      });
      return { ...store, data: filter };
    case FILTER_BY_AC:
      let filter2 = data.slice().filter((e) => {
        return e.ac === true;
      });
      return { ...store, data: filter2 };
    case FILTER_BY_IRON:
      let filter3 = data.slice().filter((e) => {
        return e.heating === true;
      });
      return { ...store, data: filter3 };
    case FILTER_BY_KITCHEN:
      let filter4 = data.slice().filter((e) => {
        return e.kitchen === true;
      });
      return { ...store, data: filter4 };
    case FILTER_BY_PARKING:
      let filter5 = data.slice().filter((e) => {
        return e.parking === true;
      });
      return { ...store, data: filter5 };
    case FILTER_BY_WM:
      let filter6 = data.slice().filter((e) => {
        return e.beds === true;
      });
      return { ...store, data: filter6 };
    case FILTER_BY_WIFI:
      let filter7 = data.slice().filter((e) => {
        return e.wifi === true;
      });
      return { ...store, data: filter7 };
    case SHOW_FILTER_DATA:
      return { ...store, data: payload };
    default:
      return store;
  }
};
