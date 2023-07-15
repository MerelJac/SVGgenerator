
const Shape = require('./shapes');
// removed whitespace from strings | npm install pretty
const pretty = require('pretty')
 

// test suite for Shapes is created
describe('Shape', () => {
    // tests for circle having all necessary properties
    describe('circle', () => {
        it('Should return false if circle function is not successful', () => {
            const svgFile = `<svg width="200" height="250" version="1.1" xmlns="http://www.w3.org/2000/svg"><g><circle cx="100" cy="100" r="98" stroke="green" fill="green" stroke-width="5"/><text x="0" y="50" font-family="Verdana" font-size="35" fill="pink">hi</text></g></svg>`;
            const shape = new Shape();
            const circle = shape.circle('hi', 'pink', 'green');
            expect(svgFile).toEqual(circle);
        })
    })
    describe('triangle', () => {
        it('Should return false if triangle function is not successful', () => {
            const svgFile = `<svg width="200" height="250" version="1.1" xmlns="http://www.w3.org/2000/svg"><g><polygon points="75 30, 150 150, 0 150" stroke="blue" fill="blue" stroke-width="5"/><text x="0" y="50" font-family="Verdana" font-size="35" fill="yellow">abc</text></g></svg>`;
            const shape = new Shape();
            const triangle = shape.triangle("abc", "yellow", "blue");
            expect(pretty(svgFile)).toEqual(pretty(triangle));
        })
    })
    describe('square', () => {
        it('Should return false if square function is not successful', () => {
            const svgFile = `<svg width="200" height="250" version="1.1" xmlns="http://www.w3.org/2000/svg"><g><rect width="200" height="200" stroke="blue" fill="blue" stroke-width="5"/><text x="25" y="120" font-family="Verdana" font-size="70" fill="yellow">abc</text></g></svg>`;
            const shape = new Shape();
            const square = shape.square("abc", "yellow", "blue");
            expect(pretty(svgFile)).toEqual(pretty(square));
        })
    })
})

