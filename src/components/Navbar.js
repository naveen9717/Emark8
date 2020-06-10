import React, { Component } from "react";
import {Link} from 'react-router-dom'; 

class Navbar extends Component{
 
  render() {
    return (
  <div>
  <div id="page-loader">
      <div className="loader-icon fa fa-spin colored-border" />
  </div>
  <header className="header">
    <nav className="navbar">
      <div className="container">
        <div className="main-header">
          <div className="navbar-header">
            <button type="button" className="navbar-toggle" data-toggle="collapse" data-target="#Main-nav">
              <span className="sr-only">Toggle navigation</span>
              <span className="icon-bar" />
              <span className="icon-bar" />
              <span className="icon-bar" />
            </button>
            <div className="search-btn-mobile visible-xs">
              <a href="#" className="btn-search nav-link"><i className="fa fa-search" /></a>
              <form className="search_form">
                <input type="text" name="search" placeholder="Search anything.." />
                <button className="btn btn-primary btn-small" type="submit">Search</button>
              </form>
            </div>
            <link to="/" className="site-logo" /><img src="assets/images/logo.png" alt="Smartweb" className="img-responsive" />
          </div>
         
          <div className="collapse navbar-collapse main-nav" id="Main-nav">
            
            <ul className="nav pull-right">
              <li className="dropdown active">
                <Link className='active' exact to='/'>Home <span className="arrow"><i className="fa fa-angle-down" aria-hidden="true" /></span></Link>
              </li>
              <li className><Link exact to="/about">About Us</Link></li>
              <li className><Link exact to="/team">Team</Link></li>
              <li className><Link exact to="/services">Services</Link></li>
              <li className><Link exact to="/portfolio">Portfolio</Link></li>
              <li className><Link exact to="/contact">Contact</Link></li>
            
              <li className="nav-item">
                <a href="#" className="btn-search nav-link"><i className="fa fa-search" /></a>
                <form className="search_form">
                  <input type="text" name="search" placeholder="Search anything.." />
                  <button className="btn btn-primary btn-small" type="submit">Search</button>
                </form>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </nav>
  </header>
</div>

    );
  }
}

export default Navbar
