import React, { Component } from 'react';
import Calendar from 'react-calendar';
import './Calendar.css';
import moment from 'moment';
import ReactTimeslotCalendar from 'react-timeslot-calendar';
class MyCalendar extends Component {
  // state = {
  //   date: new Date(),
  // }
  constructor()
  {
    super();
    this.state = {date:new Date(), name: "neo", currentTime: (new Date()).toLocaleString()}

  }
  getTime()
  {
    var time = new Date();
    this.setState({date:time});
  }

  componentDidMount()
  {
    setInterval(()=> this.getTime(),1000);
  }

  onChange = date => this.setState({ date })

  render() {
    return (
      <div >
        <Calendar className="myframe" onChange={this.onChange} value={this.state.date} />
        <Calendar className="myframe" onChange={this.onChange} value={this.state.date} />
        <div>
          now: {this.state.date.toLocaleString()}
        </div>
        <ReactTimeslotCalendar
          initialDate={moment().format()}
        />
      </div>

    );

  }
}

export default MyCalendar;
