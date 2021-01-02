import React from "react";
import ReactDOM from "react-dom";
import "./styles.css";

var date = new Date();
var hours = date.getHours();

const cssStyle = {};

var greet = "";
if (hours >= 1 && hours < 11) {
  greet = "Good Morning!";
  cssStyle.color = "red";
} else if (hours >= 11 && hours < 16) {
  greet = "Good Afternoon!";
  cssStyle.color = "Orange";
} else if (hours >= 16 && hours < 19) {
  greet = "Good Evening!";
  cssStyle.color = "magenta";
} else {
  greet = "Good Night!";
  cssStyle.color = "white";
}
function Greet() {
  return (
    <>
      <div>
        <h1 className="greetings">
          {" "}
          Hello Sir, <span style={cssStyle}>{greet}</span>
        </h1>
      </div>
    </>
  );
}
export default Greet;
