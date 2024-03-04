import "w3-css/w3.css";
import React, { useState } from "react";

export default function Order() {
  const [count, setCount] = useState(11);
  return (
    <>
      <div class="w3-container">
        <h1>My first hook: useState</h1>

        <p>You clicked {count} times</p>
        <button class="w3-button w3-blue" onClick={() => setCount(count + 54)}>
          Click me
        </button>
      </div>
    </>
  );
}
