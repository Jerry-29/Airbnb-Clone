import React from "react";
import "./Login.css";

import {signInWithGoogle} from '../Firebase'

import {auth} from '../Firebase'
export const Login =()=> {
  const logout= async()=>{

    console.log( auth.signOut)
    auth.signOut().then(()=>{
     alert("Log out Successfuuly")
})
  }
  
  let myWindow;
  function closeWin() {
    myWindow.close();
  }
  return (
    <div className="login-container">
      <form>
        <div id="sign-in-button"></div>
        {/* <button className='close' onClick={HandleClose}>X</button> */}
        <p className="p2"><button style={{float:"left"}} onClick={closeWin}>x</button> Log in or sign up</p>
        <hr></hr>
        <h1>Welcome to Airbnb</h1>
        {/* <input type="text" placeholder='India +91' className='inp' required/> */}
        <input
          type="number"
          placeholder="Phone number "
          className="inp2"
          required
          // onChange={handleChange}
        />
        <p>
          We’ll call or text you to confirm your number. Standard message and
          data rates apply. Privacy Policy
        </p>
        <br />
        <button type="submit" className="inp3">
          Submit
        </button>
      </form>
      {/* <form>
        <input
          type="number"
          placeholder="Enter OTP "
          className="inp2"
          required
          // onChange={handleChange}
        />
        <button type="submit" className="inp3">
          Submit OTP
        </button>
      </form> */}
      <p>or</p>
      <hr />
      <br />
      <div onClick={signInWithGoogle} className="via-google">
        <img
          src="https://www.freepnglogos.com/uploads/google-logo-png/google-logo-png-webinar-optimizing-for-success-google-business-webinar-13.png"
          alt=""
        />
        <span>
          <p style={{ marginTop: "5px" }}> Continue with Google</p>
        </span>
      </div>
    </div>
  );
}

