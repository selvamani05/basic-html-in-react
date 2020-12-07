import React from 'react'
import {Link} from "react-router-dom";  
import poke from "../assets/img/pink.jpg"
import bitcoingirl from "../assets/img/bitcoingirl.jpg"
import deskgirl from "../assets/img/deskgirl.jpg"
import arguy from "../assets/img/arguy.jpg"
import Subscribe from "./Subscribe"

function AboutUs() {

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
                  {/*   <a className="nav-link" href="index.html">Home</a> */}
                  <Link className="nav-link" to="/home">Home</Link>
                  </li>
                  <li className="nav-item active">
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

      <div className="row tm-welcome-row">
        <div className="col-12 tm-page-cols-container">
          <div className="tm-page-col-left tm-welcome-box tm-bg-gradient">
            <p className="tm-welcome-text">
              <em
                >"This is a gradient CSS background #A0c0c0 to #669999 and right
                side is a pink lady parallx image."</em
              >
            </p>
          </div>

          <img className="tm-welcome-parallax" alt="jp" src={poke}/>
          <div className="tm-page-col-right">
            <div
              className="tm-welcome-parallax"
              data-parallax="scroll"
              data-image-src={poke}
              
              
            ><img className="tm-welcome-parallax" alt="jp"   src={poke}/></div>
          </div>
        </div>
      </div>

      

      <section className="row tm-pt-4 tm-pb-6">
        <div className="col-12 tm-tabs-container tm-page-cols-container">
          <div className="tm-page-col-left tm-tab-links">
            <ul className="tabs clearfix" data-tabgroup="first-tab-group">
              <li>
                <a href="#tab1" className="active">
                  <div className="tm-tab-icon"></div>
                  About Us
                </a>
              </li>
              <li>
                <a href="#tab2" className="">
                  <div className="tm-tab-icon"></div>
                  Vision and Mission
                </a>
              </li>
              <li>
                <a href="#tab3" className="">
                  <div className="tm-tab-icon"></div>
                  Our History
                </a>
              </li>
            </ul>
          </div>
          <div className="tm-page-col-right tm-tab-contents">
            <div id="first-tab-group" className="tabgroup">
              <div id="tab1">
                <div className="text-content">
                  <h3 className="tm-text-secondary tm-mb-5">
                    About Us
                  </h3>
                  <p className="tm-mb-5">
                    Above pink girl photo is provided by Moose Photos from
                    Pexels. This is a tab content area. There are 3 tabs at the
                    left side. Curabitur porttitor metus nisl. Nullam nec dictum
                    dolor. Sed ultricies purus nec suscipit vulputate. Fusce a
                    massa eu orci vulputate varius. Quisque quis ullamcorper
                    sapien. Integer eu luctus nulla, vel viverra odio.
                  </p>
                  <p className="tm-mb-5">
                    Praesent id felis ac erat elementum condimentum.
                    Pellentesque a libero vitae nisi vestibulum tempor vitae
                    vitae nulla. Praesent ut eleifend ligula, nec pretium erat.
                    Suspendisse nec magna id massa sollicitudin aliquam eget ut
                    turpis.
                  </p>
                </div>
                <div className="row tm-pt-5">
                  <div className="col-md-4 text-center">
                    <div className="tm-about-person mx-auto">
                      <img
                        src={bitcoingirl}
                        alt="jp"
                        className="img-fluid tm-mb-1"
                      />
                      <h4 className="tm-text-secondary tm-mb-1">
                        Catherine Theta
                      </h4>
                      <p className="tm-mb-2">Project Manager</p>
                      <div className="tm-mb-3">
                        <a
                          href="https://facebook.com"
                          className="tm-about-social-link"
                        >
                          <i className="fab fa-facebook-f tm-about-social-icon"></i>
                        </a>
                        <a
                          href="https://twitter.com"
                          className="tm-about-social-link"
                        >
                          <i className="fab fa-twitter tm-about-social-icon"></i>
                        </a>
                        <a
                          href="https://linkedin.com"
                          className="tm-about-social-link"
                        >
                          <i
                            className="fab fa-linkedin-in tm-about-social-icon"
                          ></i>
                        </a>
                      </div>

                      <p>
                        Mauris efficitur risus mi, et varius dolor sodales
                        facilisis. Fusce sed mi tristique.
                      </p>
                    </div>
                  </div>

                  <div className="col-md-4 text-center">
                    <div className="tm-about-person mx-auto">
                      <img
                        src={arguy}
                        alt="jp"
                        className="img-fluid tm-mb-1"
                      />
                      <h4 className="tm-text-secondary tm-mb-1">New Hudson</h4>
                      <p className="tm-mb-2">Digital Marketing</p>
                      <div className="tm-mb-3">
                        <a
                          href="https://facebook.com"
                          className="tm-about-social-link"
                        >
                          <i className="fab fa-facebook-f tm-about-social-icon"></i>
                        </a>
                        <a
                          href="https://twitter.com"
                          className="tm-about-social-link"
                        >
                          <i className="fab fa-twitter tm-about-social-icon"></i>
                        </a>
                        <a
                          href="https://linkedin.com"
                          className="tm-about-social-link"
                        >
                          <i
                            className="fab fa-linkedin-in tm-about-social-icon"
                          ></i>
                        </a>
                      </div>
                      <p>
                        Pellentesque habitant morbi tristique senectus et netus
                        et malesuada fames.
                      </p>
                    </div>
                  </div>

                  <div className="col-md-4 text-center">
                    <div className="tm-about-person mx-auto">
                      <img
                        src={deskgirl}
                        alt="jp"
                        className="img-fluid tm-mb-1"
                      />
                      <h4 className="tm-text-secondary tm-mb-1">Jennifer Wall</h4>
                      <p className="tm-mb-2">Team Leader</p>
                      <div className="tm-mb-3">
                        <a
                          href="https://facebook.com"
                          className="tm-about-social-link"
                        >
                          <i className="fab fa-facebook-f tm-about-social-icon"></i>
                        </a>
                        <a
                          href="https://twitter.com"
                          className="tm-about-social-link"
                        >
                          <i className="fab fa-twitter tm-about-social-icon"></i>
                        </a>
                        <a
                          href="https://linkedin.com"
                          className="tm-about-social-link"
                        >
                          <i
                            className="fab fa-linkedin-in tm-about-social-icon"
                          ></i>
                        </a>
                      </div>
                      <p>
                        Three social icons are placed in above circles. Sed
                        turpis nisl, congue a arcu in.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
              <div id="tab2">
                <div className="text-content">
                  <h3 className="tm-text-secondary tm-mb-5">Vision and Mission</h3>
                  <p className="tm-mb-5">
                    Nam consequat, leo vitae aliquet dignissim, leo est laoreet
                    nibh, nec dictum libero justo vitae dolor. Donec tristique
                    eros at nisi elementum efficitur. Proin ornare feugiat ex
                    placerat pellenteqsue. Nulla convallis est volutpat ex
                    ultrices facilisis.
                  </p>
                  <p className="tm-mb-5">
                    Etiam egestas metus vitae est interdum, in eleifend nunc
                    volutpat. Aliquam molestie ipsum quis suscipit lacinia.
                    Mauris turpis libero, iaculis non dictum ac, ornare a massa.
                    Duis id lorem purus. Fusce viverra ullamcorper metus.
                    Curabitur puvinar suscipit sapien ac blandit. Aliquam vel
                    pulvinar purus, sit amet luctus urna.
                  </p>
                </div>
                <div className="row tm-pt-5">
                  <div className="col-md-4 text-center">
                    <div className="tm-about-person mx-auto">
                      <img
                        src={bitcoingirl}
                        alt="jp"
                        className="img-fluid tm-mb-1"
                      />
                      <h4 className="tm-text-secondary tm-mb-1">
                        Catherine Theta
                      </h4>
                      <p className="tm-mb-2">Project Manager</p>
                      <div className="tm-mb-3">
                        <a
                          href="https://facebook.com"
                          className="tm-about-social-link"
                        >
                          <i className="fab fa-facebook-f tm-about-social-icon"></i>
                        </a>
                        <a
                          href="https://twitter.com"
                          className="tm-about-social-link"
                        >
                          <i className="fab fa-twitter tm-about-social-icon"></i>
                        </a>
                        <a
                          href="https://linkedin.com"
                          className="tm-about-social-link"
                        >
                          <i
                            className="fab fa-linkedin-in tm-about-social-icon"
                          ></i>
                        </a>
                      </div>

                      <p>
                        Mauris efficitur risus mi, et varius dolor sodales
                        facilisis. Fusce sed mi tristique.
                      </p>
                    </div>
                  </div>

                  <div className="col-md-4 text-center">
                    <div className="tm-about-person mx-auto">
                      <img
                        src={arguy}
                        alt="jp"
                        className="img-fluid tm-mb-1"
                      />
                      <h4 className="tm-text-secondary tm-mb-1">New Hudson</h4>
                      <p className="tm-mb-2">Digital Marketing</p>
                      <div className="tm-mb-3">
                        <a
                          href="https://facebook.com"
                          className="tm-about-social-link"
                        >
                          <i className="fab fa-facebook-f tm-about-social-icon"></i>
                        </a>
                        <a
                          href="https://twitter.com"
                          className="tm-about-social-link"
                        >
                          <i className="fab fa-twitter tm-about-social-icon"></i>
                        </a>
                        <a
                          href="https://linkedin.com"
                          className="tm-about-social-link"
                        >
                          <i
                            className="fab fa-linkedin-in tm-about-social-icon"
                          ></i>
                        </a>
                      </div>
                      <p>
                        Pellentesque habitant morbi tristique senectus et netus
                        et malesuada fames.
                      </p>
                    </div>
                  </div>

                  <div className="col-md-4 text-center">
                    <div className="tm-about-person mx-auto">
                      <img
                        src={deskgirl}
                        alt="jp"
                        className="img-fluid tm-mb-1"
                      />
                      <h4 className="tm-text-secondary tm-mb-1">Jennifer Wall</h4>
                      <p className="tm-mb-2">Team Leader</p>
                      <div className="tm-mb-3">
                        <a
                          href="https://facebook.com"
                          className="tm-about-social-link"
                        >
                          <i className="fab fa-facebook-f tm-about-social-icon"></i>
                        </a>
                        <a
                          href="https://twitter.com"
                          className="tm-about-social-link"
                        >
                          <i className="fab fa-twitter tm-about-social-icon"></i>
                        </a>
                        <a
                          href="https://linkedin.com"
                          className="tm-about-social-link"
                        >
                          <i
                            className="fab fa-linkedin-in tm-about-social-icon"
                          ></i>
                        </a>
                      </div>
                      <p>
                        Three social icons are placed in above circles. Sed
                        turpis nisl, congue a arcu in.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
              <div id="tab3">
                <div className="text-content">
                  <h3 className="tm-text-secondary tm-mb-5">Our History</h3>
                  <p className="tm-mb-5">
                    Mauris turpis libero, iaculis non dictum ac, ornare a massa.
                    Duis id lorem purus. Fusce viverra ullamcorper metus.
                    Curabitur puvinar suscipit sapien ac blandit. Aliquam vel
                    pulvinar purus, sit amet luctus urna. Nulla convallis est
                    volutpat ex ultrices facilisis.
                  </p>
                  <p className="tm-mb-5">
                    Etiam egestas metus vitae est interdum, in eleifend nunc
                    volutpat. Aliquam molestie ipsum quis suscipit lacinia. Nam
                    consequat, leo vitae aliquet dignissim, leo est laoreet
                    nibh, nec dictum libero justo vitae dolor. Donec tristique
                    eros at nisi elementum efficitur. Proin ornare feugiat ex
                    placerat pellenteqsue.
                  </p>
                </div>
                <div className="row tm-pt-5">
                  <div className="col-md-4 text-center">
                    <div className="tm-about-person mx-auto">
                      <img
                        src={bitcoingirl}
                        alt="jp"
                        className="img-fluid tm-mb-1"
                      />
                      <h4 className="tm-text-secondary tm-mb-1">
                        Catherine Theta
                      </h4>
                      <p className="tm-mb-2">Project Manager</p>
                      <div className="tm-mb-3">
                        <a
                          href="https://facebook.com"
                          className="tm-about-social-link"
                        >
                          <i className="fab fa-facebook-f tm-about-social-icon"></i>
                        </a>
                        <a
                          href="https://twitter.com"
                          className="tm-about-social-link"
                        >
                          <i className="fab fa-twitter tm-about-social-icon"></i>
                        </a>
                        <a
                          href="https://linkedin.com"
                          className="tm-about-social-link"
                        >
                          <i
                            className="fab fa-linkedin-in tm-about-social-icon"
                          ></i>
                        </a>
                      </div>

                      <p>
                        Mauris efficitur risus mi, et varius dolor sodales
                        facilisis. Fusce sed mi tristique.
                      </p>
                    </div>
                  </div>

                  <div className="col-md-4 text-center">
                    <div className="tm-about-person mx-auto">
                      <img
                        src={arguy}
                        alt="jp"
                        className="img-fluid tm-mb-1"
                      />
                      <h4 className="tm-text-secondary tm-mb-1">New Hudson</h4>
                      <p className="tm-mb-2">Digital Marketing</p>
                      <div className="tm-mb-3">
                        <a
                          href="https://facebook.com"
                          className="tm-about-social-link"
                        >
                          <i className="fab fa-facebook-f tm-about-social-icon"></i>
                        </a>
                        <a
                          href="https://twitter.com"
                          className="tm-about-social-link"
                        >
                          <i className="fab fa-twitter tm-about-social-icon"></i>
                        </a>
                        <a
                          href="https://linkedin.com"
                          className="tm-about-social-link"
                        >
                          <i
                            className="fab fa-linkedin-in tm-about-social-icon"
                          ></i>
                        </a>
                      </div>
                      <p>
                        Pellentesque habitant morbi tristique senectus et netus
                        et malesuada fames.
                      </p>
                    </div>
                  </div>

                  <div className="col-md-4 text-center">
                    <div className="tm-about-person mx-auto">
                      <img
                        src={deskgirl}
                        alt="jp"
                        className="img-fluid tm-mb-1"
                      />
                      <h4 className="tm-text-secondary tm-mb-1">Jennifer Wall</h4>
                      <p className="tm-mb-2">Team Leader</p>
                      <div className="tm-mb-3">
                        <a
                          href="https://facebook.com"
                          className="tm-about-social-link"
                        >
                          <i className="fab fa-facebook-f tm-about-social-icon"></i>
                        </a>
                        <a
                          href="https://twitter.com"
                          className="tm-about-social-link"
                        >
                          <i className="fab fa-twitter tm-about-social-icon"></i>
                        </a>
                        <a
                          href="https://linkedin.com"
                          className="tm-about-social-link"
                        >
                          <i
                            className="fab fa-linkedin-in tm-about-social-icon"
                          ></i>
                        </a>
                      </div>
                      <p>
                        Three social icons are placed in above circles. Sed
                        turpis nisl, congue a arcu in.
                      </p>
                    </div>
                  </div>
                </div>
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
                <form action="#" method="GET" className="tm-call-to-action-form">
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
          Copyright &copy; 2019 Next Level Company... Designed by Template Mo
        </p>
      </footer>
    </div>
        </div>
    )
}

export default AboutUs
