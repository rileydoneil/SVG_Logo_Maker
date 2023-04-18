
// TODO: Include packages needed for this application
const inquirer = require("inquirer");
const fs = require("fs");
const generateSVG = require("./lib/generateSVG");

// TODO: Create an array of questions for user input
const questions = [
  {
    name: 'letters',
    type: 'input',
    message: 'Please enter 3 letters:',
  },
  {
    name: 'textColor',
    type: 'input',
    message: 'Please enter the text color:',
  },
  {
    name: 'shape',
    type: 'list',
    message: 'Please select a shape:',
    choices: ['triangle', 'square', 'circle'],
  },
  {
    name: 'shapeColor',
    type: 'input',
    message: 'Please enter the shape color:',
  },
];

// TODO: Create a function to write README file
function writeToFile(fileName, data) {
  fs.writeFile(fileName, generateSVG(data), err => {
    err ? console.log(err) : console.log("Generated logo.svg");
  
  })
}

// TODO: Create a function to initialize app
function init() {
    inquirer
        .prompt(questions).then((answers) => writeToFile('./examples/logo.svg', answers))
}

// Function call to initialize app
init();
