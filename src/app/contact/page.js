"use client";

import React, { useState } from "react";

function Contact() {
  const [name, setName] = useState();

  const handleChangeName = (event) => {
    setName(event.target.value);
    console.log(name);
  };

  return (
    <div>
      <h1>Contact Me</h1>
      <label>
        Name: <input type="text" value={name} onChange={handleChangeName} />
      </label>
    </div>
  );
}

export default Contact;
