import React from 'react'
import {Link} from "react-router-dom";  

import galleryitem01 from '../assets/img/gallery/gallery-item-01.jpg'
import galleryitem02 from '../assets/img/gallery/gallery-item-02.jpg'
import galleryitem03 from '../assets/img/gallery/gallery-item-03.jpg'
import galleryitem04 from '../assets/img/gallery/gallery-item-04.jpg'
import galleryitem05 from '../assets/img/gallery/gallery-item-05.jpg'
import galleryitem06 from '../assets/img/gallery/gallery-item-06.jpg'
import galleryitem07 from '../assets/img/gallery/gallery-item-07.jpg'
import galleryitem08 from '../assets/img/gallery/gallery-item-08.jpg'
import galleryitem09 from '../assets/img/gallery/gallery-item-09.jpg'
import galleryitem10 from '../assets/img/gallery/gallery-item-10.jpg'
import galleryitem11 from '../assets/img/gallery/gallery-item-11.jpg'
import galleryitem12 from '../assets/img/gallery/gallery-item-12.jpg'
import Subscribe from "./Subscribe"


function Gallery() {
    return (
        <div>
            <div className="container-fluid">
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
                   {/*  <a className="nav-link" href="index.html">Home</a> */}
                    <Link className="nav-link" to="/">Home</Link>
                  </li>
                  <li className="nav-item">
                    <div className="tm-nav-link-highlight"></div>
                    {/* <a className="nav-link" href="about.html"> About</a> */}
                     <Link className="nav-link" to="/about">About</Link>
                  </li>
                  <li class="nav-item active">
                    <div className="tm-nav-link-highlight"></div>
                    {/* <a className="nav-link" href="gallery.html">
                      Gallery <span className="sr-only">(current)</span>
                    </a> */}
                    <Link className="nav-link" to="/gallery">Gallery</Link>
                  </li>
                  <li class="nav-item">
                    <div className="tm-nav-link-highlight"></div>
                   {/*  <a className="nav-link" href="contact.html">Contact</a> */}
                   <Link className="nav-link" to="/contact">Contact</Link>
                  </li>
                </ul>
              </div>
            </nav>
          </div>
        </div>
      </div>

      <div class="row tm-welcome-row">
        <div className="col-12">
          <div
            className="tm-welcome-parallax tm-center-child"
            data-parallax="scroll"
            data-image-src="img/blooming-bg.jpg"
          >
            <div className="tm-bg-black-transparent tm-parallax-overlay">
              <h2>Our Gallery</h2>
              <p>this is a parallax background image</p>
            </div>
          </div>
        </div>
      </div>

      <section className="row tm-pt-4">
        <div className="col-12 tm-page-cols-container">
          <div className="tm-page-col-left">
            <ul className="tabs clearfix filters-button-group">
              <li>
                <a href="Goo" className="active" data-filter="*">
                  <div className="tm-tab-icon"></div>
                  All Types
                </a>
              </li>
              <li>
                <a href="Goo" className="" data-filter=".category-1">
                  <div className="tm-tab-icon"></div>
                  First Category
                </a>
              </li>
              <li>
                <a href="Goo" className="" data-filter=".category-2">
                  <div className="tm-tab-icon"></div>
                  Second Type
                </a>
              </li>
              <li>
                <a href="Goo" className="" data-filter=".category-3">
                  <div className="tm-tab-icon"></div>
                  Third Category
                </a>
              </li>
            </ul>
          </div>
          <div className="tm-page-col-right">
            <div className="tm-gallery" id="tmGallery">
              <div className="tm-gallery-item category-1">
                <figure className="effect-bubba">
                  <img
                    src={galleryitem01}
                    alt="Gallery item"
                    className="img-fluid"
                  />
                  <figcaption>
                    <h2>Fresh <span>Bubba</span></h2>
                    <p>Bubba likes to appear out of thin air.</p>
                    <a href="#">View more</a>
                  </figcaption>
                </figure>
              </div>
              <div className="tm-gallery-item category-2">
                <figure className="effect-bubba">
                  <img
                    src={galleryitem02}
                    alt="Gallery item"
                    className="img-fluid"
                  />
                  <figcaption>
                    <h2>Fresh <span>Bubba</span></h2>
                    <p>Bubba likes to appear out of thin air.</p>
                    <a href="Goo">View more</a>
                  </figcaption>
                </figure>
              </div>
              <div className="tm-gallery-item category-1">
                <figure className="effect-bubba">
                  <img
                    src={galleryitem03}
                    alt="Gallery item"
                    className="img-fluid"
                  />
                  <figcaption>
                    <h2>Fresh <span>Bubba</span></h2>
                    <p>Bubba likes to appear out of thin air.</p>
                    <a href="Goo">View more</a>
                  </figcaption>
                </figure>
              </div>
              <div className="tm-gallery-item category-3">
                <figure className="effect-bubba">
                  <img
                    src={galleryitem04}
                    alt="Gallery item"
                    className="img-fluid"
                  />
                  <figcaption>
                    <h2>Fresh <span>Bubba</span></h2>
                    <p>Bubba likes to appear out of thin air.</p>
                    <a href="Goo">View more</a>
                  </figcaption>
                </figure>
              </div>
              <div className="tm-gallery-item category-2">
                <figure className="effect-bubba">
                  <img
                    src={galleryitem05}
                    alt="Gallery item"
                    className="img-fluid"
                  />
                  <figcaption>
                    <h2>Fresh <span>Bubba</span></h2>
                    <p>Bubba likes to appear out of thin air.</p>
                    <a href="Goo">View more</a>
                  </figcaption>
                </figure>
              </div>
              <div className="tm-gallery-item category-3">
                <figure className="effect-bubba">
                  <img
                    src={galleryitem06}
                    alt="Gallery item"
                    className="img-fluid"
                  />
                  <figcaption>
                    <h2>Fresh <span>Bubba</span></h2>
                    <p>Bubba likes to appear out of thin air.</p>
                    <a href="Goo">View more</a>
                  </figcaption>
                </figure>
              </div>
              <div className="tm-gallery-item category-3">
                <figure className="effect-bubba">
                  <img
                    src={galleryitem07}
                    alt="Gallery item"
                    className="img-fluid"
                  />
                  <figcaption>
                    <h2>Fresh <span>Bubba</span></h2>
                    <p>Bubba likes to appear out of thin air.</p>
                    <a href="Goo">View more</a>
                  </figcaption>
                </figure>
              </div>
              <div className="tm-gallery-item category-1">
                <figure className="effect-bubba">
                  <img
                    src={galleryitem08}
                    alt="Gallery item"
                    className="img-fluid"
                  />
                  <figcaption>
                    <h2>Fresh <span>Bubba</span></h2>
                    <p>Bubba likes to appear out of thin air.</p>
                    <a href="Goo">View more</a>
                  </figcaption>
                </figure>
              </div>
              <div className="tm-gallery-item category-2">
                <figure className="effect-bubba">
                  <img
                    src={galleryitem09}
                    alt="Gallery item"
                    className="img-fluid"
                  />
                  <figcaption>
                    <h2>Fresh <span>Bubba</span></h2>
                    <p>Bubba likes to appear out of thin air.</p>
                    <a href="Goo">View more</a>
                  </figcaption>
                </figure>
              </div>
              <div className="tm-gallery-item category-3">
                <figure className="effect-bubba">
                  <img
                    src={galleryitem10}
                    alt="Gallery item"
                    className="img-fluid"
                  />
                  <figcaption>
                    <h2>Fresh <span>Bubba</span></h2>
                    <p>Bubba likes to appear out of thin air.</p>
                    <a href="Goo">View more</a>
                  </figcaption>
                </figure>
              </div>
              <div className="tm-gallery-item category-2">
                <figure className="effect-bubba">
                  <img
                    src={galleryitem11}
                    alt="Gallery item"
                    className="img-fluid"
                  />
                  <figcaption>
                    <h2>Fresh <span>Bubba</span></h2>
                    <p>Bubba likes to appear out of thin air.</p>
                    <a href="Goo">View more</a>
                  </figcaption>
                </figure>
              </div>
              <div className="tm-gallery-item category-1">
                <figure className="effect-bubba">
                  <img
                    src={galleryitem12}
                    alt="Gallery item"
                    className="img-fluid"
                  />
                  <figcaption>
                    <h2>Fresh <span>Bubba</span></h2>
                    <p>Bubba likes to appear out of thin air.</p>
                    <a href="Goo">View more</a>
                  </figcaption>
                </figure>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Subscribe/>

     
      {/* <section className="row" id="tmCallToAction">
        <div className="col-12 tm-page-cols-container tm-call-to-action-col">
          <div className="tm-page-col-right">
            <div className="tm-call-to-action-box">
              <i className="fas fa-3x fa-rss-square tm-call-to-action-icon"></i>
              <div className="tm-call-to-action-text">
                <h3 className="tm-call-to-action-title">
                  Vivamus sollicitudin tellus
                </h3>
                <p className="tm-call-to-action-description">
                  Maecenas maximus tellus in dolor auctor tristique. Nam
                  hendrerit posuere laoreet. Aliquam erat volutpat. Nulla eros
                  est, imperdiet vel feugiat non, ullamcorper mattis nulla.
                </p>
                <form action="#" method="GET" classNameName="tm-call-to-action-form">
                  <input
                    type="email"
                    name="email"
                    placeholder="Email"
                    className="tm-email-input"
                    required
                  />
                  <button type="submit" className="btn btn-primary">
                    Subscribe
                  </button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </section> */}
      
      <footer className="row tm-page-footer">
        <p className="col-12 tm-copyright-text mb-0">
          Copyright &copy; 2019 Next Level Company... 
          
          Designed by Template Mo
        </p>
      </footer>
    </div>

    
        </div>
    )
}

export default Gallery
