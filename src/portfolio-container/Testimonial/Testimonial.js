import React from "react";
import OwlCarousel from "react-owl-carousel";
import "owl.carousel/dist/assets/owl.carousel.css";
import "owl.carousel/dist/assets/owl.theme.default.css";

import ScreenHeading from "../../utilities/screenheading/ScreenHeading";
import ScrollService from "../../utilities/ScrollService";
import Animations from "../../utilities/Animation";
import "./Testimonial.css";

export default function Testimonial(props) {
  let fadeInScreenHandler = (screen) => {
    if (screen.fadeInScreen !== props.id) return;
    Animations.animations.fadeInScreen(props.id);
  };
  const fadeInSubscription = ScrollService.currentScreenFadeIn.subscribe(
    fadeInScreenHandler
  );

  const options = {
    loop: true,
    margin: 0,
    nav: true,
    animateIn: "bounceInRight",
    animateOut: "bounceOutRight",
    dots: true,
    autoplay: true,
    smartSpeed: 1000,
    responsive: {
      0: {
        items: 1
      },
      768: {
        items: 1
      },
      1000: {
        items: 3
      }
    }
  };

  return (
    <div className="screen-container">
      <ScreenHeading
        title={"Testimonial"}
        SubHeading={"What Does My Clients Say About Me"}
      />
      <section className="testimonial-section" id={props.id || ""}>
        <div className="container">
          <div className="row">
            <OwlCarousel
              className="owl-carousel"
              id="testimonial-carousel"
              {...options}
            >
              <div className="col-lg-12">
                <div className="testi-item">
                  <div className="testi-comment">
                    <p className="descp">
                      I patronized Ashif and when He delivered, I honestly fell
                      in love with the project He is a very honest guy and he
                      delivers ontime.
                    </p>
                  </div>
                  <div className="client-info">
                    <img
                      src="https://image.shutterstock.com/image-vector/passport-size-photo-business-man-260nw-2070414434.jpg"
                      alt=" internet problem"
                    ></img>
                    <h5> Boy</h5>
                    <p className="post"> ceo of company</p>
                  </div>
                </div>
              </div>
              <div className="col-lg-12">
                <div className="testi-item">
                  <div className="testi-comment">
                    <p className="descp">
                      I patronized Ashif and when He delivered, I honestly fell
                      in love with the project He is a very honest guy and he
                      delivers ontime.
                    </p>
                  </div>
                  <div className="client-info">
                    <img
                      src="https://image.shutterstock.com/image-vector/passport-size-photo-business-man-260nw-2070414434.jpg"
                      alt=" internet problem"
                    ></img>
                    <h5> rock</h5>
                    <p className="post"> ceo of company</p>
                  </div>
                </div>
              </div>
              <div className="col-lg-12">
                <div className="testi-item">
                  <div className="testi-comment">
                    <p className="descp">
                      I patronized Ashif and when He delivered, I honestly fell
                      in love with the project He is a very honest guy and he
                      delivers ontime.
                    </p>
                  </div>
                  <div className="client-info">
                    <img
                      src="https://image.shutterstock.com/image-vector/passport-size-photo-business-man-260nw-2070414434.jpg"
                      alt=" internet problem"
                    ></img>
                    <h5> king </h5>
                    <p className="post"> ceo of company</p>
                  </div>
                </div>
              </div>
              <div className="col-lg-12">
                <div className="testi-item">
                  <div className="testi-comment">
                    <p className="descp">
                      I patronized Ashif and when He delivered, I honestly fell
                      in love with the project He is a very honest guy and he
                      delivers ontime.
                    </p>
                  </div>
                  <div className="client-info">
                    <img
                      src="https://image.shutterstock.com/image-vector/passport-size-photo-business-man-260nw-2070414434.jpg"
                      alt=" internet problem"
                    ></img>
                    <h5> leo </h5>
                    <p className="post"> ceo of company</p>
                  </div>
                </div>
              </div>
            </OwlCarousel>
          </div>
        </div>
      </section>
    </div>
  );
}
