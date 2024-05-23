import React from 'react'
import { Link, useLocation } from 'react-router-dom'

const Navbar = () => {
  const location = useLocation();

  const isActive = (path) => {
    return location.pathname === path ? 'active' : '';
  };

  return (
    <div>
      <nav className="navbar fixed-top navbar-expand-lg navbar-dark bg-dark">
        <div className="container-fluid">
          <Link className="navbar-brand" to="/">Get-News</Link>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <Link className={`nav-link ${isActive('/')}`} aria-current="page" to="/">Home</Link>
              </li>
              <li className="nav-item">
                <Link className={`nav-link ${isActive('/business')}`} to="/business">Business</Link>
              </li>
              <li className="nav-item">
                <Link className={`nav-link ${isActive('/entertainment')}`} to="/entertainment">Entertainment</Link>
              </li>
              <li className="nav-item">
                <Link className={`nav-link ${isActive('/general')}`} to="/general">General</Link>
              </li>
              <li className="nav-item">
                <Link className={`nav-link ${isActive('/health')}`} to="/health">Health</Link>
              </li>
              <li className="nav-item">
                <Link className={`nav-link ${isActive('/science')}`} to="/science">Science</Link>
              </li>
              <li className="nav-item">
                <Link className={`nav-link ${isActive('/technology')}`} to="/technology">Technology</Link>
              </li>
              <li className="nav-item">
                <Link className={`nav-link ${isActive('/sports')}`} to="/sports">Sports</Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </div>
  )
}

export default Navbar;
