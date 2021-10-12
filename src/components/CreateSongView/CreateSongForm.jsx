import React, {Component} from "react";
import axios from "axios";
import styled from "styled-components";
import Button from '@mui/material/Button';
import {Grid, TextField } from "@mui/material";


const CreateSongFormDiv = styled.div`

  width: 49%;

  Grid {
    width: 22%;
    justify-content: center;

  }

  label {
    display: table-cell;
    justify-content: flex-end;
    margin-left: 40px;

  }

  input {
    display: table-cell;

  }

  div.row {
    display: table-row;

  }


`;

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
      release_date: this.state.release_date
    };
    axios
      .post('http://127.0.0.1:8000/music/', song)
      .then(response => {
        console.log(response);
        this.clearState();
        this.props.createSongCallback(response.data);
        return response;
      })
      .catch(error => console.log(error));
  };

  clearState = () => {
    this.setState({
      title: '',
      artist: '',
      album: '',
      genre: '',
      release_date: '',
    });
  }


  render() {
    return (
      <CreateSongFormDiv>
        <Grid
              display="flex"
              spacing={2}
              direction="row"
              alignItems="center"
              justifyContent="center"
        >
          <form action="" onSubmit={this.handleSubmit}>
            <label htmlFor=""> </label>
            <TextField id="filled-basic" label="Artist" variant="filled"
                       name="artist" onChange={this.handleChange} value={this.state.artist} type="text"/><br/>
            <label htmlFor=""> </label>
            <TextField id="filled-basic" label="Title" variant="filled"
                       name="title" onChange={this.handleChange} value={this.state.title} type="text"/><br/>
            <label htmlFor=""> </label>
            <TextField id="filled-basic" label="Album" variant="filled"
                       name="album" onChange={this.handleChange} value={this.state.album} type="text"/><br/>
            <label htmlFor=""> </label>
            <TextField id="filled-basic" label="Genre" variant="filled"
                       name="genre" onChange={this.handleChange} value={this.state.genre} type="text"/><br/>
            <label htmlFor=""> </label>
            <TextField id="filled-basic" variant="filled"
                       name="release_date" onChange={this.handleChange} value={this.state.release_date}
                       type="date"/><br/><br/>
            <Button variant="contained"
                    type="submit"
              // onClick={() => this.props.createNewSong}
            >
              Create New song
            </Button>
          </form>
        </Grid>
      </CreateSongFormDiv>

    );
  }
}
