import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Navbar from './Navbar';  // Import Navbar
import Contact from './Contact';  // Import the Contact page component
import Home from './Home';  // Assuming you have a Home page

function Route() {
  return (
    <Router>
      <Navbar />
      <Switch>
        <Route path="/" exact component={Home} /> {/* Home page route */}
        <Route path="/contact" component={Contact} /> {/* Contact page route */}
      </Switch>
    </Router>
  );
}

export default Route;
