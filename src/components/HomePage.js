import React from 'react'
import {Link} from "react-router-dom";  
import Footer from './Footer';
import Subscribe from "./Subscribe"




function HomePage() {
    return (
      
        <div>
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
                  <li className="nav-item active">
                    <div className="tm-nav-link-highlight"></div>
                  
                    <Link className="nav-link" to="/">Home</Link>
                  </li>
                  <li className="nav-item">
                    <div className="tm-nav-link-highlight"></div>
                
                  <Link className="nav-link" to="/about">About</Link>
                  </li>
                  <li className="nav-item">
                    <div className="tm-nav-link-highlight"></div>
                   
                    <Link className="nav-link" to="/gallery">Gallery</Link>
                  
                  </li>
                  <li className="nav-item">
                    <div className="tm-nav-link-highlight"></div>
                    
                    <Link className="nav-link" to="/contact">Contact</Link>
                  </li>
                </ul>
              </div>
            </nav>
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

          </div>
        </div>
      </div>

      <div className="row tm-welcome-row">
        <div className="col-12 tm-page-cols-container">
          <div className="tm-page-col-left tm-welcome-box tm-bg-primary">
            <p className="tm-welcome-text">
              <em>"Hello, this is a clean layout. left side is the text and right
                side is a parallax image."</em>
            </p>
          </div>
          <div className="tm-page-col-right">
            <div
              className="tm-welcome-parallax"
              data-parallax="scroll"
              data-image-src="..src/assets/img/gallery /gallery-item-01.jpg"
            
              
              
            ></div>
          </div>
        </div>
      </div>

            <section className="row tm-pt-4 tm-pb-6">
        <div className="col-12 tm-page-cols-container">
          <div className="tm-page-col-right">
            <h2 className="tm-text-secondary tm-mb-5">
              Nunc tristique velit ut semper
            </h2>
            <p className="tm-mb-6">
              Homepage main photo is provided by <strong>Moose Photos</strong> from <strong>Pexels</strong>. Next Level CSS Template is brought to you by Template Mo website. You can feel free to adapt it for your websites. No need to put a footer credit link. Please kindly spread a word about us. Thank you. If you have any question, feel free to contact us on Facebook page.
              
            </p>
            <p className="mb-0">
           	  Nullam nec dictum dolor. Sed ultricies purus nec suscipit vulputate. Fusce a massa eu orci
              vulputate varius. Praesent id felis ac erat elementum condimentum. Pellentesque a
              libero vitae nisi vestibulum tempor vitae vitae nulla. Praesent ut
              eleifend ligula, nec pretium erat.
            </p>
          </div>
        </div>
      </section>

      <div className="tm-page-col-right">
        <div className="row tm-pt-7 tm-pb-6">
          <div className="col-md-6 tm-home-section-2-left">
            <div
              className="img-fluid tm-mb-4 tm-small-parallax"
              data-parallax="scroll"
              data-image-src="img/image-1.jpg"></div>
            <div>
              <h3 className="tm-text-secondary tm-mb-4">
                Quisque at rutrum felis
              </h3>
              <p className="tm-mb-5">
                Photo by CoWomen from Pexels. Morbi sollicitudin nibh eu
                dignissim mollis. Etiam turpis tortor, ultricies sit amet
                placerat suscipit, auctor eu diam.
              </p>
              <ul className="tm-list-plus">
                <li>Vestibulum finibus consectetur nulla</li>
                <li>Eget imperdiet eros interdum sit amet</li>
                <li>Sed a lacinia lorem, sed luctus enim</li>
                <li>2 small images has a parallax effect</li>
              </ul>
            </div>
          </div>
          <div className="col-md-6 tm-home-section-2-right">
            <div
              className="img-fluid tm-mb-4 tm-small-parallax"
              data-parallax="scroll"
              data-image-src="img/image-2.jpg"></div>
            <div>
              <h3 className="tm-text-secondary tm-mb-4">
                Sed ultricies tortor vitae
              </h3>
              <p className="tm-section-2-text">
                Photo by <strong>CoWomen</strong> from <strong>Pexels</strong>. Quisque tortor justo, pharetra in
                eros sed, accumsan dapibus dolor. In luctus sed ante a
                tristique.
              </p>
              <p>
                You cannot re-distribute our template on your website for download. Ut ornare pulvinar lorem a elementum. Cras sollicitudin ante velit, eget facilisis sem viverra nex. Etiam quis mattis urna.
              </p>
            </div>
          </div>
        </div>
      </div>
<Subscribe/>
     
      <Footer/>
    </div>

        </div>
    )
}

export default HomePage
