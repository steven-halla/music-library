import React, {Component} from "react";
import {TextField} from "@mui/material";
import styled from "styled-components";


const SearchBarDiv = styled.div`
  width: 14%;
`

export class SearchBar extends Component {
  constructor(props) {
    super(props);
    this.state = {
      searchQuery: ""
    }
  }

  handleSearchQueryOnChanged = (event) => {
    const newSearchQuery = event.target.value;
    this.setState({
      searchQuery: newSearchQuery
    });
    this.props.searchSong(newSearchQuery);
  }

  // handleChange = (event) => {
  //   this.setState({
  //     [event.target.name]: event.target.value
  //   });
  // }

  handleSubmit = (event) => {
    event.preventDefault();
    this.props.searchSong(this.state.searchQuery);
  }

  render() {
    // this.filter.props(song => {
    //   return Object.keys(song).some(key => song[key].toLowerCase().includes(filter.toLowerCase()))
    // });
    return (
      <SearchBarDiv>

        <div>
          <h1>Song Search</h1>

          <form
            action=""
            method="get"
            // onSubmit={this.handleSubmit}
          >
            <TextField
              label="Search" color="secondary" focused
              type="text"
              value={this.props.searchQuery}
              onChange={this.handleSearchQueryOnChanged}

            />

            {/*<button type="submit">Search</button>*/}
          </form>
        </div>
      </SearchBarDiv>

    )
  }
}
