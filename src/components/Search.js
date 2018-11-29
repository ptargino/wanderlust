import React, { Component } from "react";

export default class Search extends Component {
  constructor(props) {
    super(props);
    this.state = { value: "" };
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(event) {
    this.setState({ value: event.target.value });
  }

  handleSubmit(event) {
    event.preventDefault();
    this.setState({ value: event.value });
    this.props.onSearch(this.state.value);
  }

  render() {
    return (
      <form className="search" onSubmit={this.handleSubmit}>
        <input
          type="text"
          placeholder="Search (e.g. Puppy, Ocean, Thailand, etc.) "
          name="search"
          onChange={this.handleChange}
        />
        <button type="submit">
          <i className="fa fa-search" />
        </button>
      </form>
    );
  }
}
