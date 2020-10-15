function paginate(items, pageNumber, pageSize) {
  var movie = [...items];
  const start = (pageNumber - 1) * pageSize + 1;
  const end = pageNumber * pageSize;
  movie = movie.slice(start - 1, end);
  return movie;
}

export default paginate;
