import React, { Component } from 'react';
import { Card,Image } from 'react-bootstrap';
import './dayforecast.css';
export default class DayForecast extends Component {
    state = {
        statusImage : ""
    }
    componentDidMount(){
        if(this.props.report.status === 'Sunny')
        {
            this.setState({
                statusImage : "https://image.flaticon.com/icons/svg/979/979585.svg"
            })
        }
        else if(this.props.report.status === 'Cloudy'){
            this.setState({
                statusImage : "https://image.flaticon.com/icons/svg/414/414927.svg"
            })
        }
        else if(this.props.report.status === 'Rainy'){
            this.setState({
                statusImage : "https://image.flaticon.com/icons/svg/414/414974.svg"
            })
        }
        else {
            this.setState({
                statusImage : "https://image.flaticon.com/icons/svg/861/861059.svg"
            })
        }


    }
    render() {
        return (
            <div className="col-3 col-md-2 col-lg-2 ">
                <Card >
                    <Card.Body>
                        <Card.Title>{this.props.report.dayName}</Card.Title>
                        <Image src={this.state.statusImage} roundedCircle />
                        <Card.Text>
                        {this.props.report.minTemp} C - {this.props.report.maxTemp} C
                        </Card.Text>
                    </Card.Body>
                </Card>
            </div>
        );
    }
}