import React from "react";
import debounce from "lodash";
import Slider from "react-slick";
import Slide from "./Slide";

export default class HeroSlider extends React.Component {
  state = {
    lock: false
  };
  slide = event => {
    const scrollPosition = document.querySelector("html").scrollTop;
    console.log("state:", this.state.lock);
    if (scrollPosition === 0) {
      if (!this.state.lock) {
        event.preventDefault();
        event.stopPropagation();
      }
      const delta = event.deltaY;
      console.log(delta);
      delta > 0 ? this.slider.slickNext() : this.slider.slickPrev();
    }
  };
  // componentWillMount() {
  //   // window.addEventListener("wheel", e => {
  //   //   this.slide(e);
  //   // });
  // }
  // componentWillUnmount() {
  //   // window.removeEventListener("wheel", e => {
  //   //   this.slide(e);
  //   // });
  // }
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
        if (nextSlide > currentSlide || nextSlide < currentSlide) {
          this.setState(() => ({
            lock: false
          }));
        } else {
          this.setState(() => ({
            lock: true
          }));
        }
      }
    };
    return (
      <section
        className="hero-slider"
        onMouseOver={window.addEventListener("wheel", e => {
          this.slide(e);
        })}
        onMouseLeave={window.removeEventListener("wheel", e => {
          this.slide(e);
        })}
      >
        <Slider {...settings} ref={slider => (this.slider = slider)}>
          <Slide index={1} title="Our Services" />
          <Slide index={2} title="Brand Strategy" />
        </Slider>
      </section>
    );
  }
}
