import React from 'react'
import {Link} from "react-router-dom";  

function NavItems() {
  return (
    <div>
      <div className="row tm-brand-row">
        <div className="col-lg-4 col-10">
          <div className="tm-brand-container">
            <div className="tm-brand-texts">
              <h1 className="text-uppercase tm-brand-name">Next Level</h1>
            </div>
          </div>
        </div>
        <div className="col-lg-8 col-2 tm-nav-col">
            <div className="tm-nav">
              <nav className="navbar navbar-expand-lg navbar-light tm-navbar">
                <button
                  className="navbar-toggler"
                  type="button"
                  data-toggle="collapse"
                  data-target="#navbarNav"
                  aria-controls="navbarNav"
                  aria-expanded="false"
                  aria-label="Toggle navigation">
                  <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarNav">
                  <ul className="navbar-nav ml-auto mr-0">
                    <li className="nav-item">
                      <div className="tm-nav-link-highlight"></div>
                    {/*   <a className="nav-link" href="index.html">Home</a> */}
                    <Link className="nav-link" to="/home">Home</Link>
                    </li>
                    <li className="nav-item">
                      <div className="tm-nav-link-highlight"></div>
                      {/* <a className="nav-link" href="about.html">
                      
                        About <span className="sr-only">(current)</span></a
                      > */}
                      <Link className="nav-link" to="/about">About</Link>
                    </li>
                    <li className="nav-item">
                      <div className="tm-nav-link-highlight"></div>
                      {/* <a className="nav-link" href="gallery.html">Gallery</a> */}
                      <Link className="nav-link" to="/gallery">Gallery</Link>
                    </li>
                    <li className="nav-item">
                      <div className="tm-nav-link-highlight"></div>
                      {/* <a className="nav-link" href="contact.html">Contact</a> */}
                      <Link className="nav-link" to="/contact">Contact</Link>
                    </li>
                  </ul>
                </div>
              </nav>
          </div>
        </div>
      </div>

    </div>
  )
}

export default NavItems
