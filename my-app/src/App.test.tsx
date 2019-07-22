import React from "react";
import ReactDOM from "react-dom";
import App from "./App";

it("renders without crashing", () => {
  const root: HTMLDivElement = document.createElement("div");
  ReactDOM.render(<App />, root);
  ReactDOM.unmountComponentAtNode(root);
});
