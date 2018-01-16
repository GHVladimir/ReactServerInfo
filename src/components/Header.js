import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-primary">
      <Link to='/' className="navbar-brand">Home</Link>
    </nav>
  )
}

export default Header;