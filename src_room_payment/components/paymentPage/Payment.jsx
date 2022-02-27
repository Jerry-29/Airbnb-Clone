import React from "react";
import "./Payment.css";
import GooglePay from "../payment/GooglePay";


function Payment() {
  return (
      <div>
      <h1 style={{marginLeft:"150px"}}>Confirm and pay</h1>
    <div className="payment-container">
      <div className="left">
        <div className="add">
        <p>This is a rare find.</p>
        <p>
        Daleep's place is usually booked.
        </p>
        </div>
        <h2>Your trip</h2>
        <p>Dates</p>
        <p>
          25 Mar - 1 Apr <span className="edit">Edit</span>
        </p>

        <p>Guests</p>
        <p>
          1 Guest <span className="edit">Edit</span>
        </p>
        <hr />
        <div className="pay">
          <h2>Pay with</h2>
          <select name="pay" id="sel">
            <option value="">Credit card or Debit Card</option>

            <option value="">Google Pay</option>
            <option value="">Phone Pay</option>
          </select>
        </div>
        <a href="" style={{ color: "black" }}>
          Enter a Coupon
        </a>
        <hr />
        <h2>Cancellation policy</h2>
        <p>
          Free cancellation before 12:00 pm on 24 Mar. After that, cancel before
          12:00 pm on 25 Mar and get a full refund, minus the first night and
          service fee. Learn more
          
        </p>
        <p>
          Our Extenuating Circumstances policy does not cover travel disruptions
          caused by COVID-19. Learn more
        </p>
        <hr />
        <GooglePay/>
      </div>
      <div className=""></div>
    </div>
    </div>
  );
}

export default Payment;
