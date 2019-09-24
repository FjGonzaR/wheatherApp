import React, { Component } from "react";
import { withTracker } from 'meteor/react-meteor-data';

import { Forecast } from '../api/forecast.js';
import DayForecast from "./DayForecast.js";
 
class WeekForecast extends Component {

    state ={
        id : parseInt(this.props.value)
    }

  renderDays() {
      let id = this.state.id;
      let inicio = id === 1 ? 0 : id === 2 ? 7 : id === 3 ? 14 : 21;
      console.log("semana " + id + "dia inicial " + inicio)
    return this.props.forecast.slice(inicio,7*id).map((d) => (
      <DayForecast key={d._id} report={d} />
    ));
  }

  render() {
    return (
      <div>
        <div className="row text-center">
          <div className="col-sm">
              <strong id="semana">WEEK {this.state.id}</strong>
          </div>
        </div>
        <div className="row">
          {this.renderDays()}
        </div>
      </div>
    );
  }
}

export default withTracker(() => {
  return {
    forecast: Forecast.find({}).fetch(),
  };
})(WeekForecast);

