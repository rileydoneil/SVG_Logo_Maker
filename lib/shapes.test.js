const { describe } = require('node:test');
const Shapes = require('./shapes.js');

describe('Shapes', () => {
    describe('shape', () => {
        it('should take a color and shape and return the shape/color', () => {
            const expected = "";
            const shape = new Shapes();
            expect(shape.shapeColor()).toequal(expected);
        })
    })
})