import React, {Component} from "react";

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
      <div>
        <form
          action=""
          method="get"
          // onSubmit={this.handleSubmit}
        >
          <input
            type="text"
            placeholder="Search"
            value={this.props.searchQuery}
            onChange={this.handleSearchQueryOnChanged}

          />
          {/*<button type="submit">Search</button>*/}
        </form>
      </div>
    )
  }
}
