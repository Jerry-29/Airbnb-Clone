import "../CSS/PriceFilter.css";
import React, { useCallback, useEffect, useState, useRef } from "react";
import classnames from "classnames";
import PropTypes from "prop-types";

export const Price = ({ min = 750, max = 60000, onChange, prop, setprop }) => {
  const [minVal, setMinVal] = useState(min);
  const [maxVal, setMaxVal] = useState(max);
  const minValRef = useRef(null);
  const maxValRef = useRef(null);
  const range = useRef(null);

  useEffect(() => {
    const handelfun = () => {
      if (prop) {
        setprop(false);
      } else {
        setprop(true);
      }
    };
  }, [prop, setprop]);

  // Convert to percentage
  const getPercent = useCallback(
    (value) => Math.round(((value - min) / (max - min)) * 100),
    [min, max]
  );

  // Set width of the range to decrease from the left side
  useEffect(() => {
    if (maxValRef.current) {
      const minPercent = getPercent(minVal);
      const maxPercent = getPercent(+maxValRef.current.value); // Preceding with '+' converts the value from type string to type number

      if (range.current) {
        range.current.style.left = `${minPercent}%`;
        range.current.style.width = `${maxPercent - minPercent}%`;
      }
    }
  }, [minVal, getPercent]);

  // Set width of the range to decrease from the right side
  useEffect(() => {
    if (minValRef.current) {
      const minPercent = getPercent(+minValRef.current.value);
      const maxPercent = getPercent(maxVal);

      if (range.current) {
        range.current.style.width = `${maxPercent - minPercent}%`;
      }
    }
  }, [maxVal, getPercent]);

  // Get min and max values when their state changes
  useEffect(() => {
    onChange({ min: minVal, max: maxVal });
  }, [minVal, maxVal, onChange]);

  return (
    <div className="filter-pricediv">
      <p>The average nightly price is ₹4,244</p>
      <div>
        <div className="container">
          <input
            type="range"
            min={min}
            max={max}
            value={minVal}
            ref={minValRef}
            onChange={(event) => {
              const value = Math.min(+event.target.value, maxVal - 1);
              setMinVal(value);
              event.target.value = value.toString();
            }}
            className={classnames("thumb thumb--zindex-3", {
              "thumb--zindex-5": minVal > max - 100
            })}
          />
          <input
            type="range"
            min={min}
            max={max}
            value={maxVal}
            ref={maxValRef}
            onChange={(event) => {
              const value = Math.max(+event.target.value, minVal + 1);
              setMaxVal(value);
              event.target.value = value.toString();
            }}
            className="thumb thumb--zindex-4"
          />

          <div className="slider">
            <div className="slider__track" />
            <div ref={range} className="slider__range" />
            <div className="slider__left-value">{minVal}</div>
            <div className="slider__right-value">{maxVal}</div>
          </div>
        </div>
        <div className="sliderinpDiv">
          <label htmlFor="showlsiderminval">
            min price
            <input
              className="showlsiderminval"
              value={minVal}
              type="text"
              name=""
              id=""
            />
          </label>
          <span className="centerline">-</span>
          <label htmlFor="">
            max price
            <input
              className="showlsidermaxval"
              value={maxVal}
              type="text"
              name=""
              id=""
            />
          </label>
        </div>
      </div>
      <hr className="placetype-line" />
      <div className="div-placetype">
        <button className="button-placetype-clear">Clear</button>
        <button
          onClick={() => {
            setprop(prop);
          }}
          className="button-placetype-save"
        >
          Save
        </button>
      </div>
    </div>
  );
};

Price.propTypes = {
  min: PropTypes.number.isRequired,
  max: PropTypes.number.isRequired,
  onChange: PropTypes.func.isRequired
};
