import React, { Component } from 'react';
import moment from 'moment';
import ReactTimeslotCalendar from 'react-timeslot-calendar';
class Timeslot extends Component {
render() {
  return (
    <ReactTimeslotCalendar
      initialDate={moment().format()}
    />
  );
}

}


export default Timeslot;
