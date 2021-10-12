import React, {Component} from 'react';
import axios from "axios";
import {SongView} from "./components/SongView/SongView";
import {CreateSongForm} from "./components/CreateSongView/CreateSongForm";
import {SearchBar} from "./components/SearchBar/SearchBar";
import {UpdateSongForm} from "./components/UpdateSongForm/UpdateSongForm";


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
      const response = await axios.get("http://127.0.0.1:8000/music/");
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
      await this.fetchSongs()

    } catch (ex) {
      console.log('Error in DELeTE Call', ex);
    }
  }

  // createSong = async () => {
  //   console.log("attempting to create song")
  //   try {
  //     const newSongResponse = await axios.post('http://127.0.0.1:8000/music/');
  //     const newSong = newSongResponse.data;
  //     alert(JSON.stringify(newSong));
  //     console.log("new song: " + newSong);
  //     const newSongs = this.state.songs.concat([newSong]);
  //     //console.log(newSongs);
  //     this.setState({
  //       songs: newSongs,
  //       filteredSongs: newSongs
  //     });
  //     //await this.fetchSongs();
  //
  //   } catch (ex) {
  //     console.log("error in create call", ex);
  //   }
  // }

  createSongCallback = (newSong) => {
    console.log("new song: ", newSong);
    const newSongs = this.state.songs.concat([newSong]);
    //console.log(newSongs);
    this.setState({
      songs: newSongs,
      filteredSongs: newSongs
    });
  }

  updateSong = async () => {
    console.log("trying to update song")
    try{
      await axios.put("http://127.0.0.1:8000/music/");
      await this.fetchSongs()
    }catch (ex) {
      console.log("error in update call", ex)
    }
  }

  isSongMatch = (song, query) => {
    console.log("song: " + song + " query: " + query);
    if (!query) {
      return true;
    }



    return this.isFieldMatch(song.artist, query)
      || this.isFieldMatch(song.title, query)
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
        <h1>Song Search</h1>
        <p>Search by Release Date & Release Date Input needs to match datetime i.e. 2013-11-06T20:01:15Z </p>
        <SearchBar searchSong={this.searchSong}/>
        <br/>
        <SongView songList={this.state.filteredSongs} deleteSongFromDB={this.songDelete}/>
        <br/>
        <CreateSongForm createSongCallback={this.createSongCallback}/>
        {/*<UpdateSongForm updateCurrentSong={this.updateSong}/>*/}
      </div>
    );
  }
}
