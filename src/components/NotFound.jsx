import { Link } from 'react-router-dom';
// Component to display a 404 Not Found page
// Provides a link back to the home page
const NotFound = () => {
  return (
    <div style={{ padding: '2rem', textAlign: 'center' }}>
      <h1>404 - Page Not Found</h1>
      <p>The page you're looking for doesn’t exist.</p>
      <Link to="/" style={{ color: '#61dafb' }}>← Go back to Home</Link>
    </div>
  );
};

export default NotFound;
