import React, {Component} from 'react';
import axios from "axios";
import {SongView} from "./components/SongView/SongView";

export class App extends Component {

    state = {
      songs: []
    }

    componentDidMount() {
      this.makeGetRequest()
    }

    async makeGetRequest() {
      try{
        let response = await axios.get("http://127.0.0.1:8000/music/");
        console.log(response.data)
        this.setState({
          songs: response.data
        })
      }
      catch (ex) {
        console.log("Error in AP call", ex);
      }
    }

    // might need a set state
    songDelete = async (songId) => {
      console.log("song is trying to delete");
      try{
        await axios.delete('http://127.0.0.1:8000/music/' + songId + '/')
      }catch (ex){
        console.log('Error in DELeTE Call', ex)
      }
    }

  render() {
  return(
    <div>
      <h1>Hello moto</h1>
      <SongView songList={this.state.songs} deleteSongFromDB={this.songDelete}/>
    </div>
    );
  }
}
