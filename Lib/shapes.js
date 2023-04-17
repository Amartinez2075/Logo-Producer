// Define the Triangle class with a constructor that takes in x, y, size, and color
class Triangle {
  constructor(x, y, size, color) {
  this.x = x;
  this.y = y;
  this.size = size;
  this.color = color;
  }
  
  // Define the render method for the Triangle class, which returns a SVG polygon with the given color
  render() {
  return <polygon points="150, 18 244, 182 56, 182" fill="${this.color}" />;
  }
  }
  
  // Define the Square class with a constructor that takes in x, y, size, and color
  class Square {
  constructor(x, y, size, color) {
  this.x = x;
  this.y = y;
  this.size = size;
  this.color = color;
  }
  
  // Define the render method for the Square class, which returns a SVG rectangle with the given color
  render() {
  return <rect x="50" y="50" width="200" height="200" fill="${this.color}" />;
  }
  }
  
  // Define the Circle class with a constructor that takes in x, y, size, and color
  class Circle {
  constructor(x, y, size, color) {
  this.x = x;
  this.y = y;
  this.size = size;
  this.color = color;
  }
  
  // Define the render method for the Circle class, which returns a SVG circle with the given color and radius
  render() {
  return <circle cx="${this.x + (this.size / 2)}" cy="${this.y + (this.size / 2)}" r="${this.size / 2}" fill="${this.color}" />;
  }
  }
  
  // Export the Triangle, Square, and Circle classes as a module
  module.exports = { Triangle, Square, Circle };