import React, { Component } from "react";
import { Link } from "react-router-dom";

class MovieForm extends Component {
  //   handleClick = () => {
  //     return <Link to="/movies"></Link>;
  //   };
  render() {
    return (
      <div>
        <h1>Movie Form {this.props.match.params.id}</h1>
        <Link to="/movies">
          <button className="btn btn-primary">Save</button>
        </Link>
      </div>
    );
  }
}

export default MovieForm;
