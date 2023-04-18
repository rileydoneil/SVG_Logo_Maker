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

    //tests which shape was chosen then create it
    switch(shape) {
      case "triangle": 
        var polygon = new Triangle(letters, textColor, shapeColor);
        break;
      case "circle":
        var polygon = new Circle(letters, textColor, shapeColor);
        break;
      case "square":
        var polygon = new Square(letters, textColor, shapeColor);
        break;
    }

    
  return `
  <svg width="300" height="200">
    ${polygon.render()}
    ${polygon.renderText()}
  </svg>`;
}

module.exports = generateSVG;


