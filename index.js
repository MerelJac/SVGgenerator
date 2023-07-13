// install necessary packages
const inquirer = require('inquirer');
const fs = require('fs');
const { error } = require('console');
const shapeFile = require('./lib/shapes');
const Shape = require('./lib/shapes');

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

// write file function
function writeFiles(result) {
    // passes filepath, contents, error
    fs.writeFile('./lib/logo.svg', result, (err) => {
        err ? console.error(err) : console.log("Success")
    } )
}

function init() {
    inquirer.prompt(questions)
    .then(answers => {
        let shape;
        if (answers.shape == "circle") {
            shape = Shape.prototype.circle(answers.letters, answers.textColor, answers.shape, answers.shapeColor);
        } if (answers.shape == "square") {
            shape = Shape.prototype.square(answers.letters, answers.textColor, answers.shape, answers.shapeColor)
        } if (answers.shape == "triangle") {
            shape = Shape.prototype.triangle(answers.letters, answers.textColor, answers.shape, answers.shapeColor)
        }
        return shape
    })
    .then(result => {
        writeFiles(result)
    }).catch(error => {
        console.error(error)
    })
}
// call function 
init();