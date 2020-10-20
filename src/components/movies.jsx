import React, { Component } from "react";
import { getMovies } from "../services/fakeMovieService";
import Like from "./like";
import Pagination from "./pagination";
import paginate from "../utils/paginate";
import ListGroup from "./listgroup";
import { getGenres } from "../services/fakeGenreService";
import { Link } from "react-router-dom";

class Movies extends Component {
  state = {
    movies: [],
    pageSize: 4,
    currentPage: 1,
    genres: [],
    selectedGenre: [],
  };

  componentDidMount() {
    const genres = [{ name: "All Genres" }, ...getGenres()];
    this.setState({ movies: getMovies(), genres: genres });
  }
  handleDelete = (movie) => {
    const movies = this.state.movies.filter((i) => i._id !== movie._id);
    this.setState({ movies: movies });
  };

  handlePageChange = (page) => {
    this.setState({ currentPage: page });
  };

  handleGenreSelect = (genre) => {
    this.setState({ selectedGenre: genre, currentPage: 1 });
    console.log(this.state.selectedGenre);
  };

  render() {
    // const count = this.state.movies.length;
    const filtered =
      this.state.selectedGenre && this.state.selectedGenre._id
        ? this.state.movies.filter(
            (m) => m.genre.name === this.state.selectedGenre.name
          )
        : this.state.movies;

    const movies = paginate(
      filtered,
      this.state.currentPage,
      this.state.pageSize
    );

    return (
      <div className="row">
        <div className="col-3">
          <br />
          <ListGroup
            items={this.state.genres}
            onItemSelect={this.handleGenreSelect}
            selectedGenre={this.state.selectedGenre}
          />
        </div>
        <div className="col">
          <br />
          <Link to="/movies/new">
            <button className="btn btn-primary">New Movie</button>
          </Link>
          <br />
          <br />
          <p>
            {this.state.movies.length === 0
              ? "There are no movies in the database."
              : "Showing " + filtered.length + " movies in the database."}
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
              {movies.map((i) => (
                <tr key={i._id}>
                  <td>
                    <Link to={`/movies/${i._id}`}>{i.title}</Link>
                  </td>
                  <td>{i.genre.name}</td>
                  <td>{i.numberInStock}</td>
                  <td>{i.dailyRentalRate}</td>
                  <td>
                    <Like />
                  </td>
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
          <Pagination
            items={filtered.length}
            pageSize={this.state.pageSize}
            currentPage={this.state.currentPage}
            onPageChange={this.handlePageChange}
          />
        </div>
      </div>
    );
  }
}

export default Movies;
