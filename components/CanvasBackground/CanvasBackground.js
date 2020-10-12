import { Dot } from "./Dot";
import React from "react";

export default class CanvasBackground extends React.Component {
  constructor(props) {
    super(props);
    this.canvasRef = React.createRef();
    this.lastX = null;
    this.lastY = null;
    this.dots = [];

    this.state = {
      cw: null,
      ch: null,
    };
  }

  // Run it once, when the component mounts
  componentDidMount() {
    this.addListeners();
    this.addShims();

    this.setState({
      cw: window.innerWidth - 18,
      ch: 350,
    });
  }

  // Run it every time the props change
  componentDidUpdate() {
    this.renderCanvas();
  }

  render() {
    const { cw, ch } = this.state;

    return <canvas ref={this.canvasRef} width={cw} height={ch} />;
  }

  // Add a new dot
  addDot = (radius, x, y) => {
    radius = radius || DOT_SMALL / 2;
    x = x;
    y = y;

    // Create the new dot
    let dot = new Dot(radius, x, y);

    // Add the dot to the array
    this.dots.push(dot);
  };

  // Clear the canvas and draw the new frame
  draw = () => {
    const { dotSmall, hoverRadius, animationDuration } = this.props;

    const { cw, ch } = this.state;

    const c = this.canvasRef.current;
    const ctx = c.getContext("2d");

    ctx.clearRect(0, 0, cw, ch);

    // Update the dots
    for (let i = 0; i < this.dots.length; i++) {
      this.dots[i].update(
        ctx,
        dotSmall,
        this.lastX,
        this.lastY,
        hoverRadius,
        animationDuration
      );
    }

    window.requestAnimFrame(this.draw);
  };

  renderCanvas = () => {
    const { dotLarge, dotSmall } = this.props;

    const { cw, ch } = this.state;

    this.dots = [];

    // Add
    for (let row = dotLarge; row <= ch; row += dotLarge * 2) {
      for (let col = dotLarge; col <= cw; col += dotLarge * 2) {
        this.addDot(dotSmall, col, row);
      }
    }

    this.draw();
  };

  addListeners = () => {
    const c = this.canvasRef.current;
    // Get all the info for mouse position we need (x & y)
    c.addEventListener(
      "mousemove",
      (e) => {
        [this.lastX, this.lastY] = [e.offsetX, e.offsetY];
      },
      false
    );

    c.addEventListener(
      "mouseout",
      (e) => {
        [this.lastX, this.lastY] = [null, null];
      },
      false
    );

    window.addEventListener("resize", () => {
      this.setState({
        cw: window.innerWidth,
        ch: window.innerHeight,
      });
    });
  };

  addShims = () => {
    // RequestAnimationFrame fallback
    window.requestAnimFrame = (function () {
      return (
        window.requestAnimationFrame ||
        window.webkitRequestAnimationFrame ||
        window.mozRequestAnimationFrame ||
        window.msRequestAnimationFrame ||
        function (callback) {
          window.setTimeout(callback, 1000 / 60);
        }
      );
    })();
  };
}
