import React from 'react'
import {Link} from "react-router-dom";  
  import map from '../assets/img/map.png'
  import Subscribe from "./Subscribe"
  import NavItems from './NavItems'
  import Footer from './Footer'

function Contact() {
    return (
        <div>
            <div className="container-fluid">
            <NavItems/>

      <div className="row tm-welcome-row">
        <div className="col-12 tm-page-cols-container">
          <div className="tm-page-col-left tm-welcome-box tm-bg-gradient">
            <p className="tm-welcome-text">
              <em
                >"Gradient CSS BG #A0C0C0 to #669999 and right side is a
                parallax image of our group."</em
              >
            </p>
          </div>
          <div className="tm-page-col-right">
            <div
              className="tm-welcome-parallax"
              data-parallax="scroll"
              data-image-src="img/contact-us.jpg"
            ></div>
          </div>
        </div>
      </div>

      <section className="row tm-pt-4 tm-mb-3">
        <div className="col-12 tm-page-cols-container">
          <div className="tm-page-col-left">
            <div className="tm-contact-container tm-mb-6">
              <div className="tm-address-container">
                <h2 className="tm-text-secondary tm-mb-6">Address</h2>
                <address>
                  <p>
                    110-330 Sed ultricies purus nec<br />
                    Suscipit vulputate<br />
                    Fusce a massa 10550
                  </p>
                </address>
              </div>

              <div className="tm-location-container">
                <h2 className="tm-text-secondary tm-mb-4">Location</h2>
                <a href="Goo"><img src={map} alt="Map" className="img-fluid" /></a>
              </div>
            </div>
          </div>
          <div className="tm-page-col-right tm-form-container">
            <h2 className="tm-text-secondary mb-4">Contact Us</h2>
            <form
              action="contact.html"
              method="POST"
              id="tm_contact_form"
              encType="multipart/form-data">
              <div className="form-group">
                <input
                  type="text"
                  id="contact_name"
                  name="contact_name"
                  className="form-control rounded-0 border-top-0 border-right-0 border-left-0"
                  placeholder="Your Name"
                  required="" />
              </div>
              <div className="form-group-2">
                <input
                  type="email"
                  id="contact_email"
                  name="contact_email"
                  className="form-control rounded-0 border-top-0 border-right-0 border-left-0"
                  placeholder="Your Email"
                  required="" />
              </div>
              <div className="form-group-2 input-field">
                <select className="tm-select" name="occupation" id="occupation">
                  <option value="select">Your Occupation</option>
                  <option value="CE">Chief Executive</option>
                  <option value="SA">Software Architect</option>
                  <option value="PM">Project Manager</option>
                  <option value="WD">Web Developer</option>
                </select>
              </div>
              <div className="form-group tm-choices-container tm-text-secondary">
                <label className="tm-w-50">
                  <input
                    type="radio"
                    className="with-gap"
                    name="gender"
                    value="male" />
                  <span>Male</span>
                </label>

                <label className="tm-w-50">
                  <input
                    type="radio"
                    className="with-gap"
                    name="gender"
                    value="female" />
                  <span>Female</span>
                </label>
              </div>

              <div className="tm-mb-5">
                <textarea
                  rows="10"
                  id="contact_message"
                  name="contact_message"
                  className="form-control rounded-0"
                  placeholder="Your Message"
                  required=""></textarea>
              </div>

              <div className="tm-mb-4 tm-choices-container tm-text-secondary">
                <label className="tm-w-50">
                  <input
                    type="checkbox"
                    name="ckb[]"
                    className="filled-in"
                    value="1" />
                  <span>Check Box 1</span>
                </label>
                <label className="tm-w-50">
                  <input
                    type="checkbox"
                    name="ckb[]"
                    className="filled-in"
                    value="2" />
                  <span>Check Box 2</span>
                </label>
              </div>
              <div className="tm-mb-6 file-upload-container">
                <input
                  id="file_name_label"
                  type="text"
                  className="border-top-0 border-right-0 border-left-0"
                  placeholder="Your file to upload"
                  disabled />
                <label className="btn btn-outline btn-file">
                  Browse...
                  <input
                    type="file"
                    name="file_to_upload"
                    />
                </label>
              </div>

              <div className="">
                <button
                  type="submit"
                  className="btn btn-secondary tm-btn-submit rounded-0">
                  Submit
                </button>
              </div>
            </form>
          </div>
        </div>
      </section>

      <Subscribe/>

      
     {/*  <section className="row" id="tmCallToAction">
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
                    required />
                  <button type="submit" className="btn btn-primary">
                    Subscribe
                  </button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </section> */}
      
      <Footer/>
    </div>

    
        </div>
    )
}

export default Contact
