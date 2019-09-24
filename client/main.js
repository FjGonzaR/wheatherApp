import React from "react";
import { Meteor } from "meteor/meteor";
import { render } from "react-dom";
 
import MonthForeCast from "../imports/ui/MonthForeCast.js";
 
Meteor.startup(() => {
  render(<MonthForeCast />, document.getElementById("root"));
});