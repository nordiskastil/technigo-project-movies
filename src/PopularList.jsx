import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

// API key and base URL for fetching popular movies
const API_KEY = '4edc49af7db98a8713ed472b95849e61';
const BASE_URL = 'https://api.themoviedb.org/3/movie';
const IMAGE_BASE_URL = 'https://image.tmdb.org/t/p/w780';

// Component to display a list of popular movies
// Allows users to switch between popular, upcoming, and top-rated movies 
const PopularList = () => {
  const [movies, setMovies] = useState([]);
  const [category, setCategory] = useState('popular');
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);

  const fetchMovies = async () => {
    setLoading(true);
    setError(false);
    try {
      const res = await fetch(`${BASE_URL}/${category}?api_key=${API_KEY}&language=en-US&page=1`);
      if (!res.ok) throw new Error('Failed to fetch movies');
      const data = await res.json();
      setMovies(data.results);
    } catch (err) {
      console.error(err);
      setError(true);
    } finally {
      setLoading(false);
    }
  };

  // Fetch movies when the component mounts or when the category changes
  // This allows the user to switch between different movie categories
  // and see the corresponding movies without reloading the page
  useEffect(() => {
    fetchMovies();
  }, [category]);

  if (loading) return <div className="movie-grid">Loading movies...</div>;
  if (error) return <div className="movie-grid">Something went wrong. Please try again later.</div>;
  // If there's an error, display a message to the user
  return (
    <div>
      <h1 style={{ textAlign: 'center', margin: '2rem 0' }}>Movie Library</h1>
      <div style={{ textAlign: 'center' }}>
        <select value={category} onChange={(e) => setCategory(e.target.value)}>
          <option value="popular">Popular</option>
          <option value="upcoming">Upcoming</option>
          <option value="top_rated">Top Rated</option>
        </select>
      </div>
      <div className="movie-grid">

        {/* Map through the movies and display each one as a card */}
        {/* Each card links to the movie detail page using React Router */}
        {movies.slice(0, 20).map((movie, index) => (
          <Link key={movie.id} to={`/movies/${movie.id}`} className="movie-card">
            <img
              className="movie-image"
              src={`${IMAGE_BASE_URL}${movie.backdrop_path}`}
              alt={movie.title}
            />
            <div className="movie-info">
              <h3>{movie.title}</h3>
              <p>⭐ {movie.vote_average} | 📅 {movie.release_date.slice(0, 4)}</p>
              <p># {index + 1}</p>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default PopularList;
