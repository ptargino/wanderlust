import React, { Component } from "react";
import ImgList from "./components/ImgList";
import Search from "./components/Search";
import Unsplash, { toJson } from "unsplash-js";
import { auth } from "./components/auth";

class App extends Component {
  unsplash = new Unsplash({ ...auth });

  constructor() {
    super();
    this.state = {
      imgs: []
    };
  }

  componentDidMount() {
    this.performSearch();
  }

  performSearch = (query = "puppy") => {
    this.unsplash.search
      .photos(query, 1)
      .then(toJson)
      .then(json => {
        this.setState({ imgs: json.results });
        console.log("Search: " + query);
        console.log(json);
      })
      .catch(err => {
        console.log("Error happened during fetching!", err);
      });
  };

  render() {
    return (
      <div className="main container">
        <Search onSearch={this.performSearch} />
        <ImgList data={this.state.imgs} />
      </div>
    );
  }
}

export default App;
