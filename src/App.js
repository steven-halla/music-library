import React, {Component} from 'react';
import axios from "axios";
import {SongView} from "./components/SongView/SongView";

export class App extends Component {

    state = {
      songs: []
    }

    componentDidMount() {
      axios.get("http://127.0.0.1:8000/music/")
        .then(response => this.setState({
          songs: response.data
        }));
    }

    async makeGetRequest() {
      try{
        let response = await axios.get("http://127.0.0.1:8000/music/");
        console.log(response.data)
      }
      catch (ex) {
        console.log("Error in AP call");
      }
    }

  render() {
  return(
    <div>
      <h1>Hello moto</h1>
      <SongView songList={this.state.songs}/>
    </div>
    );
  }
}
