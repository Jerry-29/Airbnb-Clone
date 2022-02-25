import { useEffect, useState } from "react";

export const GuestsCounter = () => {
  const [count, setCount] = useState(1);

  //   useEffect(()=>{
  // },[count])
  const k = () => {
    setCount(count + 1);
  };
  return (
    <>
      <div className="addguest-div-number1">
        <p onclick={k} className="incAdultNumber">
          +
        </p>
        <p>Adult:{count}</p>
        <p className="decAdultNumber1">-</p>
      </div>
      <div className="addguest-div-number1">
        <p className="incAdultNumber">+</p>
        <p>Children:0</p>
        <p className="decAdultNumber2">-</p>
      </div>
      <div className="addguest-div-number1">
        <p className="incAdultNumber">+</p>
        <p>Infaint:0</p>
        <p className="decAdultNumber3">-</p>
      </div>
    </>
  );
};
