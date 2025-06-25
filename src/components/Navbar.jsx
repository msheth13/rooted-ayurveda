import { Link } from 'react-router-dom';

function Navbar() {
  return (
    <nav className="navbar">
      <Link to="/" className="logo-link">
        <h1 className="logo">rooted.</h1>
      </Link>
      <ul>
        <li><Link to="/">Home</Link></li>
        <li><Link to="/recipes">Recipes</Link></li>
        <li><Link to="/selfcare">Self-Care</Link></li>
        <li><Link to="/doshas">Doshas</Link></li>
        <li><Link to="/dashboard">Dashboard</Link></li>
        <li><Link to="/whyrooted">Why Rooted?</Link></li>

      </ul>
    </nav>
  );
}

export default Navbar;

//I made a Navbar component to manage all the page links in one place. This keeps my navigation consistent across the site and makes updating links easier.

