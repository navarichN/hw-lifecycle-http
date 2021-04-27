import React, { Component } from "react";
import axios from "axios";

export default class Note extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return(
      <div className="note" id = {this.props.id}>
        <button onClick={(e)=>this.props.onClick(e)}>X</button>
        <p>{this.props.content}</p>
      </div>
    )
  }
}