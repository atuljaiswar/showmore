import React, { Component } from 'react';
import { SLIDER_IMAGES } from 'utils/constants';

const Container = Main =>
  class SectionsContainer extends Component {
    state = {
      sliderImg: [],
      currentSlide: 1,
    };

    handleSlideChange = currentSlide => {
      //const { currentSlide } = { ...this.state };
      console.log('currentSlide', currentSlide);
      let sliderImg = SLIDER_IMAGES.filter(
        item => item.sliderNumber === currentSlide
      );

      console.log('sliderImg', sliderImg);
      this.setState({
        sliderImg,
        currentSlide,
      });
    };

    render() {
      const handlers = {
        handleSlideChange: this.handleSlideChange,
      };
      return <Main {...this.state} {...this.props} {...handlers}></Main>;
    }
  };

export default Container;
