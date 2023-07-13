
const Shape = require('./shapes');
const index = require('../index');

// test suite for Shapes is created
describe('Shape', () => {
    // tests for circle having all necessary properties
    describe('color', () => {
        it('Should return false if color value is empty', () => {
            const svgFile = index.result;
            expect(shapeFunction.circle('abc', 'pink', 'yellow')).toEqual(true);
        })
    })
})