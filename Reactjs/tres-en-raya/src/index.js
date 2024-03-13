import React, { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import Board from "./App";
import "./index.css";

const root = createRoot(document.getElementById("root"));
root.render(
  <StrictMode>
    <Board />
  </StrictMode>
);
