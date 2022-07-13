import React from "react";
import ReactDOM from "react-dom";

const img = "https://picsum.photos/200?grayscale";

ReactDOM.render(
  <div>
    <h1 className="heading" contentEditable="true" spellCheck="false">
      My Favourite Foods
    </h1>
    <img alt="random" src={img}></img>
  </div>,
  document.getElementById("root")
);
