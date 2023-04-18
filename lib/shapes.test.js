const {Triangle, Square, Circle} = require('./shapes');

describe('Shapes', () => {
    describe('shapeRender', () => {
        it('should take a color and shape and return the shape/color', () => {
            const expected = '<polygon points="150, 18 244, 182 56, 182" fill="blue" />';
            const shape = new Triangle();
            shape.setColor("blue");
            expect(shape.render()).toEqual(expected);
        })
        it('should take a color and shape and return the shape/color', () => {
            const expected = '<circle cx="150" cy="100" r="100" fill="blue" />';
            const shape = new Circle();
            shape.setColor("blue");
            expect(shape.render()).toEqual(expected);
        })
        it('should take a color and shape and return the shape/color', () => {
            const expected = '<rect x="10" y="10" width="30" height="30" fill="blue" />';
            const shape = new Square();
            shape.setColor("blue");
            expect(shape.render()).toEqual(expected);
        })
    })
})