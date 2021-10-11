import React, {Component} from 'react';
import axios from "axios";
import {SongView} from "./components/SongView/SongView";
import {CreateSongForm} from "./components/CreateSongView/CreateSongForm";
import {SearchBar} from "./components/SearchBar/SearchBar";


export class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      songs: [],
      filteredSongs: []
    };
  }

  componentDidMount() {
    this.fetchSongs();
  }

  async fetchSongs() {
    try {
      let response = await axios.get("http://127.0.0.1:8000/music/");
      console.log(response.data)
      this.setState({
        songs: response.data,
        filteredSongs: response.data
      });
    } catch (ex) {
      console.log("Error in AP call", ex);
    }
  }

  // might need a set state
  songDelete = async (songId) => {
    console.log("song is trying to delete");
    try {
      await axios.delete('http://127.0.0.1:8000/music/' + songId + '/');
    } catch (ex) {
      console.log('Error in DELeTE Call', ex);
    }
  }

  createSong = async () => {
    console.log("attempting to create song")
    try {
      await axios.post('http://127.0.0.1:8000/music/')
    } catch (ex) {
      console.log("error in create call", ex);
    }
  }

  isSongMatch = (song, query) => {
    console.log("song: " + song + " query: " + query);
    if (!query) {
      return true;
    }



    return this.isFieldMatch(song.title, query)
      || this.isFieldMatch(song.artist, query)
      || this.isFieldMatch(song.album, query)
      || this.isFieldMatch(song.genre, query)
      || song.release_date === query;
  }

  isFieldMatch = (field, query) => {
    return field?.toLowerCase().startsWith(query?.toLowerCase());
  }
  // isFieldMatch = (field, query) => {
  //   return field?.toLowerCase().includes(query?.toLowerCase());
  // }

  searchSong = (searchQuery) => {
    const filteredSongs = this.state.songs.filter(song =>
      this.isSongMatch(song, searchQuery)
    );

    console.log(filteredSongs);

    this.setState({
      filteredSongs: filteredSongs
    });
  }

  // setSearchQuery = (query) => {
  //   this.setState({
  //     query: query
  //   });
  // }

  render() {
    return (
      <div>
        <h1>Hello moto</h1>
        <SearchBar searchSong={this.searchSong}/>
        <br/>
        <SongView songList={this.state.filteredSongs} deleteSongFromDB={this.songDelete}/>
        <br/>
        <CreateSongForm createNewSong={this.createSong}/>
      </div>
    );
  }
}
