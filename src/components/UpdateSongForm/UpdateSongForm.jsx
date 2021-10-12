import React, {Component} from "react";
import {TextField} from "@mui/material";
import Button from "@mui/material/Button";
import axios from "axios";


export class UpdateSongForm extends Component {
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
      .post('http://127.0.0.1:8000/music/${id}', song)
      .then(res => console.log(res))
      .catch(err => console.log(err));
  };




  render() {
    return(
      <UpdateSongForm>
        <div>
          <form action="">
            <label htmlFor=""> </label>
            <TextField id="filled-basic" label="Artist" variant="filled"
                       name="artist" onChange={this.handleChange} type="text"/><br/>
            <label htmlFor=""> </label>
            <TextField id="filled-basic" label="Title" variant="filled"
                       name="title" onChange={this.handleChange} type="text"/><br/>
            <label htmlFor=""> </label>
            <TextField id="filled-basic" label="Album" variant="filled"
                       name="album" onChange={this.handleChange} type="text"/><br/>
            <label htmlFor=""> </label>
            <TextField id="filled-basic" label="Genre" variant="filled"
                       name="genre" onChange={this.handleChange} type="text"/><br/>
            <label htmlFor=""> </label>
            <TextField id="filled-basic" label="Release Date" variant="filled"
                       name="release_date" onChange={this.handleChange} type="text"/><br/><br/>
            <Button variant="contained" type="submit"
                    >Create New song</Button>
          </form>
        </div>
      </UpdateSongForm>
    )
  }


}
