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
import NavItems from './NavItems';  
import Subscribe from "./Subscribe"
import Footer from './Footer';


function Gallery() {
    return (
        <div>
            <div className="container-fluid">
      <NavItems/>

      <div className="row tm-welcome-row">
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

     
      
      
      <Footer/>
    </div>

    
        </div>
    )
}

export default Gallery
