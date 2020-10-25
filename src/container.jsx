import React, { Component } from 'react';

const Container = (Main) =>
  class Showmore extends Component {
    state = {
      isIconClicked: false,
    };

    switchIcon = () => {
      this.setState({
        isIconClicked: !this.state.isIconClicked,
      });
    };

    render() {
      const handlers = {
        switchIcon: this.switchIcon,
      };
      return <Main {...this.state} {...this.props} {...handlers} />;
    }
  };

export default Container;
