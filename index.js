// install necessary packages
const inquirer = require('inquirer');
const fs = require('fs');
const { error } = require('console');

// prepare questions for inquier
const questions = [{    
    type: "input",
    name: "letters",
    message: "Add up to 3 letters of text for the logo:",
    validate: function(letters) {
        // only 3 characters max
        if (letters.length > 3) {
            return 'Max 3 characters allowed'
        }
        return true
    }
}, {
    type: "input",
    name: "textColor",
    message: "What color would you like your TEXT? Accepts keyword or Hex Code:",
}, {
    type: "list",
    name: "shape",
    message: "Pick the shape of your logo:",
    choices: ["circle", "square", "triangle"]
}, {
    type: "input",
    name: "shapeColor",
    message: "What color would you like your SHAPE? Accepts keyword or Hex Code:",
}
];

// create contents for the SVG files created in later fs function
let svgFile;
class SVGcreate{
    constructor(text, textColor, shape, shapeColor){
        this.text = text,
        this.textColor = textColor,
        this.shape = shape,
        this.shapeColor = shapeColor
        if (shape == "circle") {
            svgFile = `<svg width="200" height="250" version="1.1" xmlns="http://www.w3.org/2000/svg"><g><circle cx="25" cy="75" r="20" stroke="${this.shapeColor}" fill="${this.shapeColor}" stroke-width="5"/><text x="0" y="50" font-family="Verdana" font-size="35" fill="${this.textColor}">${this.text}</text></g></svg>`;
        } else if (shape == "square") {
            svgFile = `<svg width="200" height="250" version="1.1" xmlns="http://www.w3.org/2000/svg"><g><rect x="10" y="10" width="30" height="30" stroke="${this.shapeColor}" fill="${this.shapeColor}" stroke-width="5"/><text x="0" y="50" font-family="Verdana" font-size="35" fill="${this.textColor}">${this.text}</text></g></svg>`;
        } else if (shape == "triangle") {
            svgFile = `<svg width="200" height="250" version="1.1" xmlns="http://www.w3.org/2000/svg">
            <g><polygon points="50 15, 100 100, 0 100" stroke="${this.shapeColor}" fill="${this.shapeColor}" stroke-width="5"/>
            <text x="0" y="50" font-family="Verdana" font-size="35" fill="${this.textColor}">${this.text}</text>
            </g></svg>`;
        } else {
            throw new Error ('problem with shape selection')
        }
        }
    }



// write file function
function writeFiles(answers) {
    // this needs to run to define svgFile variable
    new SVGcreate(answers.letters, answers.textColor, answers.shape, answers.shapeColor);
    // passes filepath, contents, error
    fs.writeFile('logo.svg', svgFile, (err) => {
        err ? console.error(err) : console.log("Success")
    } )
}

function init() {
    inquirer.prompt(questions).then((answers) => {
        writeFiles(answers)
    })
}

// call function 
init();