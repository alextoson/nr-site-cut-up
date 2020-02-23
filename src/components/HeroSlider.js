import React from "react";
import Slider from "react-slick";
import Slide from "./Slide";

export default class HeroSlider extends React.Component {
  state = {
    lock: false
  };
  slide = event => {
    if (!this.state.lock) {
      event.preventDefault();
    }
    const delta = event.deltaY;
    delta > 0 ? this.slider.slickNext() : this.slider.slickPrev();
  };
  componentWillMount() {
    window.addEventListener("wheel", e => {
      this.slide(e);
    });
  }
  componentWillUnmount() {
    window.removeEventListener("wheel", e => {
      this.slide(e);
    });
  }
  render() {
    const settings = {
      arrows: false,
      dots: true,
      infinite: false,
      slidesToShow: 1,
      slidesToScroll: 1,
      vertical: true,
      verticalSwiping: true,
      beforeChange: (currentSlide, nextSlide) => {
        console.log("before change", currentSlide, nextSlide);
        if (nextSlide !== currentSlide) {
          console.log("hello alex");
          this.setState(() => ({
            lock: true
          }));
        } else {
          this.setState(() => ({
            lock: false
          }));
        }
      }
    };
    return (
      <section className="hero-slider">
        <Slider {...settings} ref={slider => (this.slider = slider)}>
          <Slide index={1} title="Our Services" />
          <Slide index={2} title="Brand Strategy" />
        </Slider>
      </section>
    );
  }
}
