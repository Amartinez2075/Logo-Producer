// Import necessary modules and classes
const inquirer = require('inquirer');
const fs = require('fs');
const { Triangle, Square, Circle } = require("./Lib/shapes");

// Define the Svg class
class Svg {
  constructor() {
    this.textElement = '';
    this.shapeElement = '';
  }

  // Return the SVG string
  render() {
    return `<svg version="1.1" width="300" height="200" viewBox="0 0 300 200" xmlns="http://www.w3.org/2000/svg">
      ${this.shapeElement}
      ${this.textElement}
    </svg>`;
  }

  // Set the text element of the SVG
  setTextElement(text, color) {
    this.textElement = `<text x="150" y="160" font-size="30" text-anchor="middle" fill="${color}">${text}</text>`;
  }

  // Set the shape element of the SVG
  setShapeElement(shape) {
    this.shapeElement = shape.render();
  }
}

// Define an array of questions for the user's input
const questions = [
  {
    type: "input",
    name: "text",
    message: "Text: Enter up to (3) Characters:",
    validate: function (input) {
      if (input.length > 3) {
        return "Please enter up to 3 characters.";
      }
      return true;
    },
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
  // Create a new instance of the Svg class
  const svg = new Svg();

  // Set the text element of the SVG using the user's input
  svg.setTextElement(answers.text, answers["text-color"]);

  // Set the shape element of the SVG based on the user's choice
  switch (answers["pixel-image"]) {
    case "Triangle":
      svg.setShapeElement(new Triangle(0, 0, 0, answers["shape-color"]));
      break;
    case "Square":
      svg.setShapeElement(new Square(0, 0, 0, answers["shape-color"]));
      break;
    case "Circle":
      svg.setShapeElement(new Circle(100,100,100, answers["shape-color"]));
      break;
  }

  // Write the SVG string to a file and log a success message
  fs.writeFile("logo.svg", svg.render(), (err) => {
    if (err) throw err;
    console.log("SVG file created successfully!");
  });
});
