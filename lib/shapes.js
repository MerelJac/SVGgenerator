// Constructor function is created
function Shape() {};

Shape.prototype.circle = (text, textColor, shapeColor) => {
    return `<svg width="200" height="250" version="1.1" xmlns="http://www.w3.org/2000/svg"><g><circle cx="100" cy="100" r="98" stroke="${shapeColor}" fill="${shapeColor}" stroke-width="5"/><text x="0" y="50" font-family="Verdana" font-size="35" fill="${textColor}">${text}</text></g></svg>`;
}

Shape.prototype.square = (text, textColor, shapeColor) => {
    return `<svg width="200" height="250" version="1.1" xmlns="http://www.w3.org/2000/svg"><g><rect width="200" height="200" stroke="${shapeColor}" fill="${shapeColor}" stroke-width="5"/><text x="25" y="120" font-family="Verdana" font-size="70" fill="${textColor}">${text}</text></g></svg>`;
}

Shape.prototype.triangle = (text, textColor, shapeColor) => {
    return `<svg width="200" height="250" version="1.1" xmlns="http://www.w3.org/2000/svg"><g><polygon points="75 30, 150 150, 0 150" stroke="${shapeColor}" fill="${shapeColor}" stroke-width="5"/><text x="0" y="50" font-family="Verdana" font-size="35" fill="${textColor}">${text}</text>
    </g></svg>`;
}
// export Constructor file
module.exports = Shape;
