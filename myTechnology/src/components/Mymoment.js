import React, { Component } from 'react';
import {Form, FormControl, Button } from 'react-bootstrap';
import './Mymoment.css';
// import moment from 'moment';
class Mymoment extends Component {
  constructor(props)
  {
    super(props);
    this.state = {
      days:0, hours:0, minutes:0, seconds:0,
      deadline: "September 14 2018",
      newDeadline: ""
    }
    console.log("this.props", this.props);
  }
  componentWillMount()
  {
    this.getTimeUntil(this.state.deadline);
  }
  componentDidMount()
  {
    setInterval(()=> this.getTimeUntil(this.state.deadline),1000);
  }
  changeDeadline()
  {
    this.setState({deadline: this.state.newDeadline});
    // console.log("state:", this.state);
  }
  getTimeUntil(deadline)
  {
    const time = Date.parse(deadline) - Date.parse(new Date());
    console.log(time);
    const seconds = Math.floor((time/1000)%60);
    const minutes = Math.floor((time/1000/60)%60);
    const hours = Math.floor(time/(1000*60*60)%24);
    const days = Math.floor(time/(1000*60*60*24));
    console.log(days, hours, minutes, seconds);
    this.setState({days, hours, minutes, seconds});
  }
  leading0(num)
  {
    return num < 10 ? '0' + num : num;
  }

  render() {
    // this.getTimeUntil(this.state.deadline);
    // var now = moment().format();
    // var valid = moment("2011-10-10","YYYY-MM-DD","zh-cn");
    return (
      <div className = "moment-wrapper">
      <div className = "moment-title">I will be back on {this.state.deadline} </div>
          <div className= "Clock-days"> {this.leading0(this.state.days)} days </div>
          <div className= "Clock-hours"> {this.leading0(this.state.hours)} hours </div>
          <div className= "Clock-minutes">{this.leading0(this.state.minutes)} minutes </div>
          <div className= "Clock-seconds"> {this.leading0(this.state.seconds)} seconds </div>
          <Form inline>
            <FormControl onChange={event => this.setState({newDeadline:event.target.value})} placeholder = "new data" />
            <Button onClick = { () => this.changeDeadline()}> change </Button>
          </Form>
      </div>
    );
  }
}

export default Mymoment;
