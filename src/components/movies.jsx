import React, { Component } from "react";
import { getMovies } from "../services/fakeMovieService";

class Movies extends Component {
  state = {
    movies: getMovies(),
  };

  handleDelete = (movie) => {
    const movies = this.state.movies.filter((i) => i._id !== movie._id);
    this.setState({ movies: movies });
  };

  render() {
    return (
      <div>
        <br />
        <p>
          {this.state.movies.length === 0
            ? "There are no movies in the database."
            : "Showing " +
              this.state.movies.length +
              " movies in the database."}
        </p>
        <table className="table">
          <thead>
            <tr>
              <th>Title</th>
              <th>Genre</th>
              <th>Stock</th>
              <th>Rate</th>
              <th></th>
            </tr>
          </thead>
          <tbody>
            {this.state.movies.map((i) => (
              <tr key={i._id}>
                <td>{i.title}</td>
                <td>{i.genre.name}</td>
                <td>{i.numberInStock}</td>
                <td>{i.dailyRentalRate}</td>
                <td>
                  <button
                    onClick={() => this.handleDelete(i)}
                    type="button"
                    className="btn btn-danger"
                  >
                    Delete
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    );
  }
}

export default Movies;
