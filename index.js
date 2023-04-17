const inquirer = require('inquirer');
const fs = require('fs');
const { Triangle, Square, Circle } = require("./Lib/shapes");

class Svg {
  constructor() {
    this.textElement = '';
    this.shapeElement = '';
  }
  render() {
    return `<svg version="1.1" width="300" height="200" viewBox="0 0 300 200" xmlns="http://www.w3.org/2000/svg">
      ${this.shapeElement}
      ${this.textElement}
    </svg>`;
  }
  setTextElement(text, color) {
    this.textElement = `<text x="150" y="125" font-size="30" text-anchor="middle" fill="${color}">${text}</text>`;
  }
  setShapeElement(shape) {
    this.shapeElement = shape.render();
  }
}

//Array of questions for the user's input
const questions = [
  {
    type: "input",
    name: "text",
    message: "Text: Enter up to (3) Characters:",
  },
  {
    type: "input",
    name: "text-color",
    message: "Text Color: Enter a color (Or a hexadecimal number):",
  },
  {
    type: "input",
    name: "shape-color",
    message: "Shape Color: Enter a color (Or a hexadecimal number):",
  },
  {
    type: "list",
    name: "pixel-image",
    message: "Choose which pixel Image you would like?:",
    choices: ["Triangle", "Square", "Circle"],
  },
];

// Prompt the user with the questions and process their answers
inquirer.prompt(questions).then((answers) => {
  const svg = new Svg();
  svg.setTextElement(answers.text, answers["text-color"]);
  switch (answers["pixel-image"]) {
    case "Triangle":
      svg.setShapeElement(new Triangle(0, 0, 0,answers["shape-color"]));
      break;
    case "Square":
      svg.setShapeElement(new Square(0, 0, 0, 0, answers["shape-color"]));
      break;
    case "Circle":
      svg.setShapeElement(new Circle(0,0,0, answers["shape-color"]));
      break;
  }
  fs.writeFile("output.svg", svg.render(), (err) => {
    if (err) throw err;
    console.log("SVG file created successfully!");
  });
});
