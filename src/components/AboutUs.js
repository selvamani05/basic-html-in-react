import React from 'react'
import {Link} from "react-router-dom";  
import poke from "../assets/img/pink.jpg"
import bitcoingirl from "../assets/img/bitcoingirl.jpg"
import deskgirl from "../assets/img/deskgirl.jpg"
import arguy from "../assets/img/arguy.jpg"
import Subscribe from "./Subscribe"
import NavItems from './NavItems';
import Board from "./Board"
import Footer from "./Footer"

function AboutUs() {

     return (
        <div>
                <div className="container-fluid">
      <NavItems/>

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
               <Board/>
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
                <Board/>
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
                <Board/>

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

export default AboutUs
