import React, { PureComponent } from 'react'
import bitcoingirl from "../assets/img/bitcoingirl.jpg"
import deskgirl from "../assets/img/deskgirl.jpg"
import arguy from "../assets/img/arguy.jpg"

function Board() {

    const people= [
        {
            name: 'Pinky',
            designation:'Project Manager',
            img: bitcoingirl            
        },
        {
            name: 'New Hudson',
            designation:'Digital Marketing',
            img:deskgirl
        },
        {
            name: 'Jennifer Wall',
            designation:'Team Leader',
            img:arguy
        }
        ]

        const website = [
            {
                weblink:"https://facebook.com",
                imageclass:"fab fa-facebook-f tm-about-social-icon"
            },
            {
                weblink:"https://twitter.com",
                imageclass:"fab fa-twitter tm-about-social-icon"
            },
            {
                weblink:"https://linkedin.com",
                imageclass:"fab fa-linkedin-in tm-about-social-icon"
            }
        ]

    return (
         <div className="row tm-pt-5" >
     {people.map(data =>        
        <div className="col-md-4 text-center">
                    <div className="tm-about-person mx-auto">
                      <img
                        src={data.img}
                        alt="jp"
                        className="img-fluid tm-mb-1"
                      />
                      <h4 className="tm-text-secondary tm-mb-1">
                        {data.name}
                      </h4>
                      <p className="tm-mb-2">{data.designation}</p>
                      <div className="tm-mb-3">
                        {website.map(click =>
                        <a
                          href={click.weblink}
                          className="tm-about-social-link">
                          <i className={click.imageclass}></i>
                        </a>
                        )}
                      </div>
                      <p>
                        Mauris efficitur risus mi, et varius dolor sodales
                        facilisis. Fusce sed mi tristique.
                      </p>
                    </div>
                  </div>
                  )}
</div>  
    )
}

export default Board
