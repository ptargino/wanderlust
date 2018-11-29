import React, { Component } from "react";
import ImgList from "./components/ImgList";
import Search from "./components/Search";
import Unsplash, { toJson } from "unsplash-js";

class App extends Component {
  unsplash = new Unsplash({
    applicationId:
      "2b65e1adcda9315e0d0c6a49a9ab14d6b4b77f27c2a789d1fbcccf7647afd54c",
    secret: "43b806d9ecbc8139339ae984e1a81249d34b6b51ef40311c7efc0af9d09d67c9",
    callbackUrl: "{CALLBACK_URL}"
  });

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
