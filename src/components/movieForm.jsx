import React, { Component } from "react";
import Input from "./input";
import SelectInput from "./selectinput";
import { getGenres } from "../services/fakeGenreService";
import { getMovie, saveMovie } from "../services/fakeMovieService";

class MovieForm extends Component {
  state = {
    data: { title: "", genreId: "", numberInStock: "", dailyRentalRate: "" },
    errors: {},
    genres: [],
  };

  componentDidMount = () => {
    const genres = getGenres();
    this.setState({ genres });
    const movieId = this.props.match.params.id;
    if (movieId === "new") return;

    var movie = getMovie(movieId);
    if (!movie) return this.props.history.replace("/not-found");

    movie = {
      _id: movie._id,
      title: movie.title,
      genreId: movie.genre._id,
      numberInStock: movie.numberInStock,
      dailyRentalRate: movie.dailyRentalRate,
    };
    this.setState({ data: movie });
  };

  validate = () => {
    const errors = { ...this.state.errors };
    if (this.state.data.title === "") errors.title = "Title is required.";
    if (this.state.data.numberInStock === "")
      errors.numberInStock = "Number in Stock is required.";
    if (this.state.data.dailyRentalRate === "")
      errors.dailyRentalRate = "Rate is required.";
    return Object.keys(errors).length === 0 ? null : errors;
  };

  validateProperty = (target) => {
    switch (target.name) {
      case "title":
        if (target.value === "") return "Title name is required.";
        break;
      case "numberInStock":
        if (target.value > 100 || target.value < 0)
          return "Number in Stock must be within 0-100";
        if (target.value === "") return "Number in Stock must be a number.";
        break;
      case "dailyRentalRate":
        if (target.value > 10 || target.value < 0)
          return "Rate must be within 0-10.";
        if (target.value === "") return "Rate must be a number.";
        break;
      default:
    }
  };

  handleChange = (e) => {
    const data = { ...this.state.data };
    const errors = { ...this.state.errors };
    const errorMessage = this.validateProperty(e.target);
    if (errorMessage) errors[e.target.name] = errorMessage;
    else delete errors[e.target.name];
    data[e.target.name] = e.target.value;
    this.setState({ data, errors });
  };

  handleSubmit = (e) => {
    e.preventDefault();
    const errors = this.validate();
    this.setState({ errors: errors || {} });
    if (errors) return;
    this.doSubmit();
  };

  doSubmit = () => {
    saveMovie(this.state.data);
    this.props.history.push("/movies");
  };
  render() {
    return (
      <div>
        <h1>Movie Form</h1>
        <form onSubmit={this.handleSubmit}>
          <Input
            name="title"
            value={this.state.data.title}
            label="Title"
            onChange={this.handleChange}
            error={this.state.errors.title}
            type="text"
          />
          <SelectInput
            name="genreId"
            label="Genre"
            genre={this.state.genres}
            onChange={this.handleChange}
            error={this.state.errors.genreId}
          />
          <Input
            name="numberInStock"
            value={this.state.data.numberInStock}
            label="Number in Stock"
            onChange={this.handleChange}
            error={this.state.errors.numberInStock}
            type="number"
          />
          <Input
            name="dailyRentalRate"
            value={this.state.data.dailyRentalRate}
            label="Rate"
            onChange={this.handleChange}
            error={this.state.errors.dailyRentalRate}
            type="number"
          />

          <button disabled={this.validate()} className="btn btn-primary">
            Save
          </button>
        </form>
      </div>
    );
  }
}

export default MovieForm;
