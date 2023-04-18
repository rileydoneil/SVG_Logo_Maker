class Shape{
    constructor(text, textColor, shapeColor) {
        this.text = text;
        this.textColor = textColor;
        this.shapeColor = shapeColor;
        this.metaData = '';
    }
    setColor(shapeColor) {
        this.shapeColor = shapeColor;
    }
    setText(text) {
        this.text = text;
    }
    setTextColor(textColor) {
        this.textColor = textColor;
    }
}

Shape.setTextColor(textColor) {
    this.textColor = textColor;
}

Shape.prototype.render = function() {
    return `<${this.type} ${this.metaData} fill=${this.shapeColor} />`;
}

Shape.prototype.renderText = function() {
    return `<text x="150" y="125" font-size="60" text-anchor="middle" fill=${this.textColor}> ${this.text} </text>`;
}

class Square extends Shape{
    constructor(text, textColor, shapeColor){
        super(text, textColor, shapeColor);
        this.metaData = `x="10" y="10" width="30" height="30"`;
        this.type = 'rect';
    }

}

class Circle extends Shape{
    constructor(text, textColor, shapeColor){
        super(text, textColor, shapeColor);
        this.metaData = `cx="25" cy="75" r="20"`;
        this.type = 'circle';
    }

}

class Triangle extends Shape{
    constructor(text, textColor, shapeColor) {
        super(text, textColor, shapeColor);
        this.metaData = `points="150, 18 244, 182 56, 182"`;
        this.type = 'polygon';
    }

    //fixes hanging letters on triangles
    renderText() {
        return `<text x="150" y="140" font-size="60" text-anchor="middle" fill=${this.textColor}> ${this.text} </text>`;

    }

    
    //<polygon points="150, 18 244, 182 56, 182" 
}


//https://community.smartbear.com/t5/TestComplete-Questions/How-to-import-a-javascript-class-and-extend-it-in-another-script/td-p/182306
module.exports  = {
    Triangle,
    Square,
    Circle    
}

//need to create a way to distinguish creating <rect /> vs <circ /> and <polygon />