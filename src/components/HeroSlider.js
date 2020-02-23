import React from "react";
import Slider from "react-slick";
import Slide from "./Slide";

export default class HeroSlider extends React.Component {
  // state = {
  //   slideCount: 0,
  //   slideIndex: 1
  // };
  handleScroll = event => {
    console.log("triggered:", event);
    const delta = event.deltaY;
    if (delta > 0) {
      if (this.state.slideIndex !== this.state.slideCount) {
        this.setState(prevState => ({
          slideIndex: prevState.slideIndex + 1
        }));
      }
    } else {
      if (this.state.slideIndex > 1) {
        this.setState(prevState => ({
          slideIndex: prevState.slideIndex - 1
        }));
      }
    }
    // if (delta > 0) {
    //   if (this.state.slideIndex !== this.state.slideCount) {
    //     event.preventDefault();
    //     this.setState(prevState => ({
    //       slideIndex: prevState.slideIndex + 1
    //     }));
    //   }
    // } else {
    //   if (this.state.slideIndex > 1) {
    //     event.preventDefault();
    //     this.setState(prevState => ({
    //       slideIndex: prevState.slideIndex - 1
    //     }));
    //   }
    // }
  };
  componentDidMount() {
    // window.addEventListener("wheel", this.handleScroll);
    // const newSlideCount = document.querySelectorAll(".slide").length;
    // this.setState(() => ({
    //   slideCount: newSlideCount
    // }));
  }
  componentWillUnmount() {
    // window.removeEventListener("wheel", this.handleScroll);
  }
  render() {
    const settings = {
      arrows: false,
      dots: true,
      infinite: false,
      slidesToShow: 1,
      slidesToScroll: 1,
      vertical: true,
      verticalSwiping: true
    };
    return (
      <section className="hero-slider">
        <Slider {...settings}>
          <Slide index={1} title="Our Services" />
          <Slide index={2} title="Brand Strategy" />
        </Slider>
      </section>
    );
  }
}
