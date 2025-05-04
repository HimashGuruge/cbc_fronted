import { Link } from 'react-router-dom';
import './homePage.css';

export default function HomePage() {
  return (
    <div className="homepage">
      <h1>Welcome to Our Site!</h1>
      <p>This is a simple homepage created with React.</p>
      <button>Get Started</button>
      <Link to="/login" className="login-link">Login</Link>
    </div>
  );
}
