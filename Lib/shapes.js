class Triangle {
  constructor(x, y, size, color) {
    this.x = x;
    this.y = y;
    this.size = size;
    this.color = color;
  }

  render() {
    return `<polygon points="${this.x},${this.y} ${this.x + this.size},${this.y} ${this.x + (this.size / 2)},${this.y + this.size}" fill="${this.color}" />`;
  }
}

class Square {
  constructor(x, y, size, color) {
    this.x = x;
    this.y = y;
    this.size = size;
    this.color = color;
  }

  render() {
    return `<rect x="${this.x}" y="${this.y}" width="${this.size}" height="${this.size}" fill="${this.color}" />`;
  }
}

class Circle {
  constructor(x, y, size, color) {
    this.x = x;
    this.y = y;
    this.size = size;
    this.color = color;
  }

  render() {
    return `<circle cx="${this.x + (this.size / 2)}" cy="${this.y + (this.size / 2)}" r="${this.size / 2}" fill="${this.color}" />`;
  }
}

module.exports = { Triangle, Square, Circle };
