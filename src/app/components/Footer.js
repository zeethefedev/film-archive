"use client";

import React, { useState } from "react";
import { FOOTER_LINKS } from "../utils/constants";

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
  };

  const handleSubmitMessage = (e) => {
    e.preventDefault();
    setMessage({ ...message, touched: true });
    if (message.value.trim()) {
      console.log(message);
    }
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
                  <a key={index} href={link.href}>
                    {link.name}
                  </a>
                ))}
              </div>
            </div>
          ))}
        </div>
        <form className="footer-input-wrapper" onSubmit={handleSubmitMessage}>
          <Input
            value={message.value}
            handleChangeValue={handleChangeMessage}
            required
            error={message.touched && !message.value}
          />
          <button
            type="submit"
            className="primary-button-light"
            disabled={message.touched && !message.value}
          >
            submit
          </button>
        </form>
      </div>
    </footer>
  );
}

export default Footer;
