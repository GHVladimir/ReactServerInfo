import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => (
  <nav className="navbar navbar-expand-lg navbar-dark bg-primary">
    <Link to="/" className="navbar-brand" href="/">Home</Link>
  </nav>
);

export default Header;
