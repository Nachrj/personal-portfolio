import React from 'react';
import WarpSpeed from '../vendors/warpspeed.js';

class WarpBackground extends React.Component {
  constructor() {
    super();

    this.state = {
      warpSpeed: null,
    };
  }

  render() {
      return (
          <canvas style={{position: 'absolute', top: '0', left: '0', width: '100%', height: '100%', zIndex: '-100'}} id="maincanvas"></canvas>
      );
  }

  componentDidMount() {
    const warpSpeed = new WarpSpeed('maincanvas');
    this.setState({ warpSpeed });
  }
}

export default WarpBackground