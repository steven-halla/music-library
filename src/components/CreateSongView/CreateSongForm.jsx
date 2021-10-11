import React, {Component} from "react";
import axios from "axios";

export class CreateSongForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      title: '',
      artist: '',
      album: '',
      genre: '',
      release_date: '',
    }
  }

  handleChange = (event) => {
    this.setState({
      [event.target.name]: event.target.value
    });
  }

  handleSubmit = (event) => {
    event.preventDefault();
    const song = {
      title: this.state.title,
      artist: this.state.artist,
      album: this.state.album,
      genre: this.state.genre,
      release_date: this.state.release_date,


    };
    axios
      .post('http://127.0.0.1:8000/music/', song)
      .then(res => console.log(res))
      .catch(err => console.log(err));
  };




  render(){
    return(
      <div>
        <form action="" onSubmit={this.handleSubmit}>
          <label htmlFor="">Title</label>
          <input name="title" onChange={this.handleChange} type="text"/><br/>
          <label htmlFor="">artist</label>
          <input name="artist" onChange={this.handleChange} type="text"/><br/>
          <label htmlFor="">album</label>
          <input name="album" onChange={this.handleChange} type="text"/><br/>
          <label htmlFor="">genre</label>
          <input name="genre" onChange={this.handleChange} type="text"/><br/>
          <label htmlFor="">release date</label>
          <input name="release_date" onChange={this.handleChange} type="text"/><br/>
          <button type="submit">Create Song</button>
        </form>
      </div>
    );
  }
}
