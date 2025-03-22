import React, { useState } from "react";

const moviesData = [
  {
    id: 1,
    title: "The Shawshank Redemption",
    year: 1994,
    director: "Frank Darabont",
    genre: "Drama",
    rating: 9.8,
  },
  {
    id: 2,
    title: "Pulp Fiction",
    year: 1994,
    director: "Quentin Tarantino",
    genre: "Crime",
    rating: 9.9,
  },
  {
    id: 3,
    title: "The Godfather",
    year: 1972,
    director: "Francis Ford Coppola",
    genre: "Crime",
    rating: 9.2,
  },
  {
    id: 4,
    title: "The Dark Knight",
    year: 2008,
    director: "Christopher Nolan",
    genre: "Action",
    rating: 9.0,
  },
  {
    id: 5,
    title: "12 Angry Men",
    year: 1957,
    director: "Frank Capra",
    genre: "Western",
    rating: 8.5,
  },
  {
    id: 6,
    title: "Schindler's List",
    year: 1993,
    director: "Frank Herbert",
    genre: "Drama",
    rating: 8.9,
  },
  {
    id: 7,
    title: "The Lord of the Rings: The Return of the King",
    year: 2003,
    director: "George R. R. Martin",
    genre: "Fantasy",
    rating: 8.9,
  },
  {
    id: 8,
    title: "Forrest Gump",
    year: 1994,
    director: "Christopher Nolan",
    genre: "Comedy",
    rating: 8.8,
  },
  {
    id: 9,
    title: "Star Wars: The Force Awakens",
    year: 2015,
    director: "George Lucas",
    genre: "Adventure",
    rating: 8.7,
  },
  {
    id: 10,
    title: "Inception",
    year: 2010,
    director: "Christopher Nolan",
    genre: "Sci-Fi",
    rating: 8.2,
  },
];

const MoviesFiltering = () => {
  const [filter, setFilter] = useState({ search: "", genre: "", rating: "" });
  const [movies, setMovies] = useState(moviesData);

  const handleData = (e) => {
    const { name, value } = e.target;
    setFilter({ ...filter, [name]: value });
  };

  const deleteMovie = (id) => {
    setMovies(movies.filter((movie) => movie.id !== id));
  };

  const resetFilter = () => {
    setFilter({ search: "", genre: "", rating: "" });
    setMovies(moviesData);
  };

  let filteredMovies = movies.filter((movie) =>
    movie.title.toLowerCase().includes(filter.search.toLowerCase())
  );

  if (filter.genre) {
    filteredMovies = filteredMovies.filter((movie) =>
      movie.genre.toLowerCase().includes(filter.genre.toLowerCase())
    );
  }

  if (filter.rating) {
    filteredMovies = filteredMovies.filter(
      (movie) => movie.rating >= parseFloat(filter.rating)
    );
  }

  return (
    <div style={{ height: "100vh", width: "60em" }}>
      <h2>Movies Filtering</h2>
      <input
        name="search"
        value={filter.search}
        placeholder="Search by name"
        onChange={handleData}
        type="text"
      />
      <select value={filter.genre} name="genre" onChange={handleData}>
        <option value="">Select Genre</option>
        <option value="Drama">Drama</option>
        <option value="Crime">Crime</option>
        <option value="Sci-Fi">Sci-Fi</option>
        <option value="Western">Western</option>
        <option value="Comedy">Comedy</option>
        <option value="Fantasy">Fantasy</option>
        <option value="Adventure">Adventure</option>
      </select>
      <select value={filter.rating} name="rating" onChange={handleData}>
        <option value="">Select Rating</option>
        <option value="8.5">Above 8.5</option>
        <option value="8.0">Above 8.0</option>
        <option value="9.0">Above 9.0</option>
        <option value="9.5">Above 9.5</option>
      </select>
      <button onClick={resetFilter}>Reset Filter</button>

      <table
        border="1"
        cellPadding={5}
        style={{ height: "100vh", width: "60em" }}
      >
        <thead>
          <tr>
            <th>ID</th>
            <th>Title</th>
            <th>Year</th>
            <th>Director</th>
            <th>Genre</th>
            <th>Rating</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {filteredMovies.map((movie) => (
            <tr key={movie.id}>
              <td>{movie.id}</td>
              <td>{movie.title}</td>
              <td>{movie.year}</td>
              <td>{movie.director}</td>
              <td>{movie.genre}</td>
              <td>{movie.rating}</td>
              <td>
                <button
                  style={{ height: "30px" }}
                  onClick={() => deleteMovie(movie.id)}
                >
                  Delete
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
      <p>Total Movies: {filteredMovies.length}</p>
    </div>
  );
};

export default MoviesFiltering;
