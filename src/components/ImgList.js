import React, { Component } from "react";

class Img extends Component {
  render() {
    return (
      <div className={this.props.className}>
        <img src={this.props.url} className="img-fluid photo" alt="" />
      </div>
    );
  }
}

export default class ImgList extends Component {
  render() {
    return (
      <div className="photo-list row">
        {this.props.data.map(img => (
          <Img
            url={img.urls.small}
            key={img.id}
            className="col-sm-6 col-md-4 col-lg-3"
          />
        ))}
      </div>
    );
  }
}
