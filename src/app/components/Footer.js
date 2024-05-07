"use client";

import React, { useState } from "react";

const FOOTER_LINKS = {
  frameWorks: {
    name: "Frameworks",
    links: ["NextJS", "Framer Motion", "StoryBlok"],
  },
  otherWorks: { name: "Other works", links: ["Xoi Com", "RTD"] },
  socials: { name: "Socials", links: ["GitHub", "LinkedIn"] },
};

function Input(props) {
  const {
    value,
    handleChangeValue,
    placeholder = "let me know your thought",
    rows = "5",
    required,
    disabled,
    error,
    helpertext = "Please fill in your message",
  } = props;
  return (
    <div className="input-wrapper">
      <label>
        Your message
        <textarea
          className="hide-scrollbar"
          rows={rows}
          value={value}
          required={required}
          error={error}
          disabled={disabled}
          placeholder={placeholder}
          onChange={handleChangeValue}
        />
      </label>
      {error && <div className="caption">{helpertext}</div>}
    </div>
  );
}
function Footer() {
  const [message, setMessage] = useState({ value: "", touched: false });

  const handleChangeMessage = (event) => {
    setMessage({ value: event.target.value, touched: true });
    console.log(message);
  };
  return (
    <footer>
      <div className="footer-wrapper">
        <div className="footer-links-wrapper">
          {Object.keys(FOOTER_LINKS).map((list) => (
            <div key={list} className="footer-links-list">
              <h4 className="footer-heading">{FOOTER_LINKS[list].name}</h4>
              <div className="body-text footer-links">
                {FOOTER_LINKS[list].links.map((link, index) => (
                  <div key={index}>{link}</div>
                ))}
              </div>
            </div>
          ))}
        </div>
        <div className="footer-input-wrapper">
          <Input
            value={message.value}
            handleChangeValue={handleChangeMessage}
            required
            error={message.touched && !message.value}
          />
          <button
            className="primary-button-light"
            disabled={message.touched && !message.value}
          >
            submit
          </button>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
