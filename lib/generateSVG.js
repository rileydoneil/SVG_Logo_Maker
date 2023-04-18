const {Triangle, Square, Circle} = require('./shapes');

//  Create a function to generate the SVG data
function generateSVG(responses) {
  //generates the main text of SVG 
  const {
    letters,
    textColor,
    shape,
    shapeColor,
  } = responses;

  //changes user input to the first 3 characters
  let chars = letters.substring(0,3);

    //tests which shape was chosen then create it
    switch(shape) {
      case "triangle": 
        var polygon = new Triangle(chars, textColor, shapeColor);
        break;
      case "circle":
        var polygon = new Circle(chars, textColor, shapeColor);
        break;
      case "square":
        var polygon = new Square(chars, textColor, shapeColor);
        break;
    }

    
  return `
  <svg width="300" height="200">
    ${polygon.render()}
    ${polygon.renderText()}
  </svg>`;
}

module.exports = generateSVG;


