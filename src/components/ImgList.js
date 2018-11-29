import React, { Component } from "react";

class Img extends Component {
  render() {
    return <img src={this.props.url} className={this.props.className} alt="" />;
  }
}

export default class ImgList extends Component {
  render() {
    return (
      <div className="photo-list">
        {this.props.data.map(img => (
          <Img url={img.urls.small} key={img.id} className="photo" />
        ))}
      </div>
    );
  }
}
