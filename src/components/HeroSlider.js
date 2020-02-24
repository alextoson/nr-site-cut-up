import React from "react";
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
    const slides = {
      slide1: {
        title: "Our Services",
        content:
          "The imaginative crafting of psychology, art, technology and business to create beautiful ideas, products and services.",
        slideIcons: true
      },
      slide2: {
        title: "Brand Strategy",
        content:
          "Curabitur lobotis id lorem id bibendum. Ut id consectetur magna. Quisque volutpat augue enim, pulvinar lobortis nibh lacinia at. Vestibulum nec erat ut mi sollicitudin porttitor id sit amet risus. nam tempus vel odio vitae aliquam. in imperdiet eros.",
        slideButton: true
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
          <Slide index={1} data={slides.slide1} />
          <Slide index={2} data={slides.slide2} />
        </Slider>
      </section>
    );
  }
}
