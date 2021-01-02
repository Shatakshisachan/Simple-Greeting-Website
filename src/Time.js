import React from "react";
import ReactDOM from "react-dom";
import "./styles.css";

var date = new Date();
var hours = date.getHours();
var ampm = "";
var minutes = date.getMinutes();
if (minutes >= 12) {
  ampm = "PM";
  hours = hours - 12;
} else {
  ampm = "AM";
}
function Time() {
  return (
    <>
      <h1 className="Time">
        {" "}
        {hours} : {minutes} {ampm}
      </h1>
    </>
  );
}
export default Time;
