"use client";

import React, { useEffect, useState } from "react";
import { FOOTER_LINKS } from "../utils/constants";
import { postMessage } from "../api/film.api";

function Input(props) {
  const {
    value,
    handleChangeValue,
    placeholder = "let me know your thought",
    rows = "5",
    required,
    disabled,
    error,
    helpertext = "",
    submitted,
  } = props;

  const [helpertextState, setHelpertextState] = useState(helpertext);

  useEffect(() => {
    if (error) {
      setHelpertextState("Please fill in your message");
    } else if (submitted) {
      setHelpertextState("Your message has been submitted");
    } else {
      setHelpertextState("");
    }
  }, [error, submitted]);

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
      {helpertextState && <div className="caption">{helpertextState}</div>}
    </div>
  );
}

function Footer() {
  const [message, setMessage] = useState({ value: "", touched: false });
  const [submittedMessage, setSubmittedMessage] = useState(false);
  const handleChangeMessage = (event) => {
    setSubmittedMessage(false);
    setMessage({ value: event.target.value, touched: true });
  };

  const handleSubmitMessage = async (e) => {
    e.preventDefault();
    setMessage({ ...message, touched: true });
    if (message.value.trim()) {
      const { data, submitted } = await postMessage(message.value.trim());
      setSubmittedMessage(submitted);

      // reset
      if (submitted) {
        setMessage({ value: "", touched: false });
      }
    }
  };

  return (
    <footer>
      <div className="footer-wrapper">
        <div className="footer-content-wrapper">
          <div className="footer-links-wrapper">
            {Object.keys(FOOTER_LINKS).map((list) => (
              <div key={list} className="flex flex-col gap-4">
                <h4>{FOOTER_LINKS[list].name}</h4>
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
              error={message.touched && !message.value.trim()}
              submitted={submittedMessage}
            />
            <button
              type="submit"
              className="primary-button-light"
              disabled={message.touched && !message.value.trim()}
            >
              submit
            </button>
          </form>
        </div>
        <div className="caption">© 2023 Zee the frontend dev</div>
      </div>
    </footer>
  );
}

export default Footer;
