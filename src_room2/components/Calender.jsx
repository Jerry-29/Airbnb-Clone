import React, { useState } from "react";

import "./date.css";

import { DateRangePickerComponent } from "@syncfusion/ej2-react-calendars";

function DateSelector() {
  return (
    <div className="Date-picker">
      <DateRangePickerComponent></DateRangePickerComponent>
    </div>
  );
}

export default DateSelector;
