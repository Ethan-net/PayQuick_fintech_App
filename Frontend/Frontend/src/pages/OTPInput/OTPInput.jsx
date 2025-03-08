import React from "react";
import "./OTPInput.css";
import logoImg from "./image/PayQuickLogo.png" 
import { FaArrowLeft } from "react-icons/fa6";

function OTPInput() {
  return (
    <>
      <div className="otpcontainer">
        <FaArrowLeft className="leftArrow" />
        <div className="codeLogo">
          <div className="codeDiv">
            <div className="text">
            <h2>Enter verification code</h2>
            <p>
              We sent you a verification code to <br />
              the Email provided.
            </p>
            </div>
            <form action="">
              <div className="inputDiv">
                <input type="password" name="" id="pinDesign" />
                <input type="password" name="" id="pinDesign" />
                <input type="password" name="" id="pinDesign" />
                <input type="password" name="" id="pinDesign" />
              </div>
              <input type="button" value="Verify" id="pinBtn" />
            </form>
          </div>
          <div className="logoDiv">
<article> <img src={logoImg} alt=""  id="logoImg"/></article>
<h3>ayQuick</h3>
          </div>
        </div>
      </div>
    </>
  );
}

export default OTPInput;
