import React, { Component } from 'react'
import './wheaterapp.css';

import WeekForecast from './WeekForecast';

export default class MonthForeCast extends Component {
    render() {
        return (
            <div>
                <h1 className="text-center title">Weatherapp</h1>
                <div className="main">
                    <WeekForecast value="1" />
                    <WeekForecast value="2" />
                    <WeekForecast value="3" />
                    <WeekForecast value="4" />
                </div>
            </div>
        )
    }
}
