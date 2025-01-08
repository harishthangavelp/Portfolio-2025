import React from 'react';
import { Link } from 'react-router-dom';  // Import Link for routing

function Navbar() {
  return (
    <div className="navbar">
      <nav>
        <ul>
          <li>
            <Link to="/">Home</Link> {/* Link to Home page */}
          </li>
          <li>
            <Link to="/contact">Contact</Link> {/* Link to Contact page */}
          </li>
        </ul>
      </nav>
    </div>
  );
}

export default Navbar;
