import React, { Component } from 'react';

const Container = Main =>
  class Showmore extends Component {
    state = {
      isIconClicked: false,
    };

    switchIcon = () => {
      this.reverse('O, a kak Uwakov lil vo kawu kakao!');
      this.setState({
        isIconClicked: !this.state.isIconClicked,
      });
    };

    reverse = str => {
      str = str.toLowerCase().replace(/\W/g, '').split(' ').join('');
      let str1 = '';
      console.log('str', str);
      for (let i = str.length - 1; i >= 0; i--) {
        str1 += str[i];
      }
      console.log('str');
      console.log('str1', str1);

      if (str === str1) {
        console.log('Y');
      } else {
        console.log('N');
      }
    };

    render() {
      const handlers = {
        switchIcon: this.switchIcon,
      };
      return <Main {...this.state} {...this.props} {...handlers} />;
    }
  };

export default Container;
