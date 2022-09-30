import React, { useState } from "react";

const EMAIL_REGEX = /[A-Za-z0-9]@[A-Za-z].(com|edu|net)/g;

const Footer = () => {
  const [showError, setShowError] = useState(false);
  const [email, setEmail] = useState("");
  const [msg, setMsg] = useState("");

  const toggleError = (msg) => {
    setShowError(true);
    setMsg(msg);
    setTimeout(() => setShowError(false), 2000);
  };

  const handleSubmit = (e) => {
    let result = EMAIL_REGEX.test(email);
    console.log(result);
    if (!result) toggleError("Please enter a valid email");
    else toggleError(`Congrats! ${email} has been successfully added! :)`);
    setEmail("");
  };

  return (
    <footer className="footer">
      <div className="footer-col footer-left-col">
        {/* <div className="footer-child-row"> */}
        <img className="footer-logo" src="./images/whitelogo.svg" alt="img" />
        {/* </div> */}
        {/* <div className="footer-child-row"> */}
        <ul className="media-footer-links">
          <li className="media-item">
            <img
              className="media-icon"
              src="./images/icon-facebook.svg"
              alt=""
            />
          </li>
          <li className="media-item">
            <img
              className="media-icon"
              src="./images/icon-youtube.svg"
              alt=""
            />
          </li>
          <li className="media-item">
            <img
              className="media-icon"
              src="./images/icon-twitter.svg"
              alt=""
            />
          </li>
          <li className="media-item">
            <img
              className="media-icon"
              src="./images/icon-pinterest.svg"
              alt=""
            />
          </li>
          <li className="media-item">
            <img
              className="media-icon"
              src="./images/icon-instagram.svg"
              alt=""
            />
          </li>
        </ul>
        {/* </div> */}
      </div>
      <div className="footer-col footer-middle-col">
        <div className="footer-child-col">
          <li className="footer-link">Home</li>
          <li className="footer-link">Pricing</li>
          <li className="footer-link">Products</li>
          <li className="footer-link">About us</li>
        </div>
        <div className="footer-child-col">
          <li className="footer-link">Careers</li>
          <li className="footer-link">Community</li>
          <li className="footer-link">Privacy Policy</li>
        </div>
      </div>
      <div className="footer-child-col footer-right-col">
        <div className="footer-input-row">
          <div>
            <input
              type="text"
              className="footer-input"
              placeholder="JohnDoe/mail"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              autoComplete="none"
            />
            <br />
            <small
              style={{ opacity: showError ? 1 : 0 }}
              className="error-small"
            >
              {msg}
            </small>
          </div>
          <div>
            <button onClick={handleSubmit} className="footer-input-btn">
              Ok
            </button>
          </div>
        </div>
      </div>
      {/* </div> */}
      <p className="copywrite-p">Copyright 2020. All Rights Reserved</p>
    </footer>
  );
};

export default Footer;
