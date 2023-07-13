
const Shape = require('./shapes');

 

// test suite for Shapes is created
describe('Shape', () => {
    // tests for circle having all necessary properties
    describe('color', () => {
        it('Should return false if shape function is not successful', () => {
            const svgFile = `<svg width="200" height="250" version="1.1" xmlns="http://www.w3.org/2000/svg"><g><circle cx="100" cy="100" r="98" stroke="green" fill="green" stroke-width="5"/><text x="0" y="50" font-family="Verdana" font-size="35" fill="pink">hi</text></g></svg>`;
            const shape = new Shape();
            const circle = shape.circle('hi', 'pink', 'green');
            expect(svgFile).toEqual(circle);
        })
    })
})

