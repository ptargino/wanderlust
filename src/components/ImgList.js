import React, { Component } from "react";

class Img extends Component {
  render() {
    return (
      <div className="foto img-wrap">
        <img src={this.props.url} alt="" />
      </div>
    );
  }
}

export default class ImgList extends Component {
  render() {
    const results = this.props.data;
    return (
      <div>
        <ul className="foto">
          {results.map(img => (
            <Img url={img.urls.small} key={img.id} />
          ))}
        </ul>
      </div>
    );
  }
}
