
const Shape = require('./shapes');

console.log(Shape)

// test suite for Shapes is created
describe('Shape', () => {
    // tests for circle having all necessary properties
    describe('circle', () => {
        it('Should return false if shape does not have letters given', () => {
            const shapeFunction = new Shape();
            expect(shapeFunction.circle('abc', 'pink', 'yellow')).toEqual(true);
        })
    })
})