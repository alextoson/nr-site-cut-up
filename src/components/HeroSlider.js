import React from "react";
import Slider from "react-slick";
import Slide from "./Slide";

export default class HeroSlider extends React.Component {
  state = {
    lock: false
  };
  slide = y => {
    y > 0 ? this.slider.slickNext() : this.slider.slickPrev();
  };
  lockScroll = () => {
    console.log("yo");
    this.setState(() => {
      lock: true;
    });
  };
  componentWillMount() {
    // window.addEventListener("wheel", this.handleScroll);
    // const newSlideCount = document.querySelectorAll(".slide").length;
    // this.setState(() => ({
    //   slideCount: newSlideCount
    // }));
    window.addEventListener("wheel", e => {
      this.slide(e.deltaY);
    });
  }
  componentWillUnmount() {
    window.removeEventListener("wheel", e => {
      this.slide(e.deltaY);
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
      beforeChange: function(currentSlide, nextSlide) {
        console.log("before change", currentSlide, nextSlide);
        if (nextSlide !== currentSlide) {
          this.lockScroll();
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
