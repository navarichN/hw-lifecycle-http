import React, { Component } from "react";
import axios from "axios";

export default class Note extends Component {
  constructor(props) {
    super(props);
    this.state = {
      notes:[],
    };
    this.loadNotes = this.loadNotes.bind(this);
  }

  componentWillMount() {
    this.loadNotes();
  }

  async loadNotes() {
    const promise = await axios.get("http://localhost:7070/");
    const status = promise.status;
    if(status===200) {
        const data = promise.data;
        this.setState({notes:data});
    }
  }

  render() {
    return(
      <div>
        <h1>Notes</h1>
          <button>Обновить</button>
          {(this.state.notes.length >= 1) ? this.state.notes.map((value,index)=>{return <h4 key={index}>{value.content}</h4>}) : 'Здесь пока нет заметок'}
      </div>
    )
  }
}