import React, {Component} from "react";
import axios from "axios";
import styled from "styled-components";
import Button from '@mui/material/Button';
import {Grid, TextField} from "@mui/material";


const CreatesongFormDiv = styled.div`

    
 Grid {
   padding-left: 10px;
 }
  
  
  label{
    display: table-cell;
    justify-content: flex-end;
  }
  input {
    display: table-cell;

  }
  div.row{
    display:table-row;

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
      release_date: this.state.release_date,


    };
    axios
      .post('http://127.0.0.1:8000/music/', song)
      .then(res => console.log(res))
      .catch(err => console.log(err));
  };




  render(){
    return(
      <CreatesongFormDiv>
        <Grid container justifyContent="flex-end">
          <form action="" onSubmit={this.handleSubmit}>
            <label htmlFor=""> </label>
            <TextField id="filled-basic" label="Artist" variant="filled" name="artist" onChange={this.handleChange} type="text"/><br/>
            <label htmlFor=""> </label>
            <TextField id="filled-basic" label="Title" variant="filled" name="title" onChange={this.handleChange} type="text"/><br/>
            <label htmlFor=""> </label>
            <TextField id="filled-basic" label="Album" variant="filled" name="album" onChange={this.handleChange} type="text"/><br/>
            <label htmlFor=""> </label>
            <TextField id="filled-basic" label="Genre" variant="filled" name="genre" onChange={this.handleChange} type="text"/><br/>
            <label htmlFor=""> </label>
            <TextField id="filled-basic" label="Release Date" variant="filled" name="release_date" onChange={this.handleChange} type="text"/><br/><br/>
            <Button variant="contained" type="submit">Create Song</Button>
          </form>
        </Grid>
      </CreatesongFormDiv>

    );
  }
}
