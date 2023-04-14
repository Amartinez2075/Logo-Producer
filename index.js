//Packages that are needed for the code
const inquirer = require('inquirer');
const filesystem = require('graceful-fs');
const { Triangle, Square, Circle } = require("./shapes.js");
const { default: Choices } = require('inquirer/lib/objects/choices');

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
    this.textElement = `<text x="150" y="125" font-size="60" text-anchor="middle" fill="${color}">${text}</text>`;
  }
  setShapeElement(shape) {
    this.shapeElement = shape.render();
  }
}

//Array of questions for the user's input
const questions = [
    {
//first display message in node.js
        type:"input",
        name:"text",
        message:"Text: Enter up to (3) Characters:",
    },
    {
//second display message in node.js
        type:"input",
        name:"text-color",
        message:"Text Color: Enter a color (Or a hexadecimal number):",
    },
    {
//third display message in node.js
        type:"input",
        name:"shape",
        message:"Shape Color: Enter a color (Or a hexadecimal number):",
    },
    {
//fourth display message in node.js
        type:"list",
        name:"pixel-image",
        message:"Choose which pixel Image you would like?:",
        choices:("Triangle, Square, Triangle"),
    },
];

  