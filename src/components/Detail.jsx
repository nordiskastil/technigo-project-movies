import { useParams, Link } from 'react-router-dom';
import { useEffect, useState } from 'react';

// API key and base URL for fetching movie details
const API_KEY = '4edc49af7db98a8713ed472b95849e61';
const IMAGE_BASE_URL = 'https://image.tmdb.org/t/p/w780';

const Detail = () => {
  const { id } = useParams(); // React Router gives us movie ID
  const [movie, setMovie] = useState(null); // State to hold movie details
  const [loading, setLoading] = useState(true); // Loading state
  const [error, setError] = useState(false);  // Error state

  useEffect(() => {
    const fetchMovie = async () => { // Function to fetch movie details
      setLoading(true);
      setError(false);
      try {
        const res = await fetch( // Fetch movie details from API
          `https://api.themoviedb.org/3/movie/${id}?api_key=${API_KEY}&language=en-US`
        );
        if (!res.ok) throw new Error('Movie not found');
        const data = await res.json();
        setMovie(data);
      } catch (err) {
        console.error(err);
        setError(true);
      } finally {
        setLoading(false);
      }
    };

    fetchMovie(); // Call the fetch function when component mounts
  }, [id]);

  if (loading) return <div style={{ padding: '1rem' }}>Loading movie details...</div>;
  if (error) return <div style={{ padding: '1rem' }}>Movie not found. Try another.</div>;

  // Render movie details
  return (
    <div style={{ padding: '1rem' }}>
      <Link to="/" className="back-button">
        ← Back to movies
      </Link>

      <div className="detail-container">
        <img
          src={`${IMAGE_BASE_URL}${movie.backdrop_path}`}
          alt={movie.title}
          className="detail-image"
        />
        <h2>{movie.title}</h2>
        <p><strong>Release Date:</strong> {movie.release_date}</p>
        <p><strong>Rating:</strong> ⭐ {movie.vote_average}</p>
        <p className="overview"><strong>Overview:</strong> {movie.overview}</p>
        <p><strong>Genres:</strong> {movie.genres?.map(g => g.name).join(', ')}</p>
      </div>
    </div>
  );
};

export default Detail;
