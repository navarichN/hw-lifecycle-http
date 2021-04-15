import React, { Component } from "react";

class Clock extends Component {
    constructor(props) {
      super(props);
      this.state = {
        time: this.toOffsetDate(this.props.offset),
      };
    }
    
    componentDidMount() {
      this.intervalID = setInterval(() => this.tick(), 1000);
    }

    componentWillUnmount() {
      clearInterval(this.intervalID);
    }

    toOffsetDate(offset) {
      if(offset[2] === ':' && offset[3] === '3'){
        offset = Number(offset[0] + offset[1]) + 0.5
      }
      let offsetInSec = (offset * 3600)*1000;
      let d = new Date(new Date().getTime() + offsetInSec);
      let hours = d.getUTCHours();
      let mints = d.getUTCMinutes();
      let secs = d.getUTCSeconds();
      return `${hours}:${mints}:${secs}`;
    }

    tick() {
      this.setState({
        time: this.toOffsetDate(this.props.offset),
      });
    }
    
    render() {
      return (
        <div className="clock" id = {this.props.id}>
            <p className="App-clock">The time in <strong>{this.props.city}</strong> is <strong>{this.state.time}</strong>.</p>
            <button onClick={(e) => this.props.remove(e)}>X</button>
        </div>
      )
    }
}

export default Clock
