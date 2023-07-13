// install necessary packages
const inquirer = require('inquirer');
const fs = require('fs');
const { error } = require('console');
const Shape = require('./lib/shapes');
// const validateAnswers = require('./lib/shapes.test')

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
    message: "What color would you like your TEXT? Accepts word or Hex Code beginning with #:",
}, {
    type: "list",
    name: "shape",
    message: "Pick the shape of your logo:",
    choices: ["circle", "square", "triangle"]
},
    {
    type: "input",
    name: "shapeColor",
    message: "What color would you like your SHAPE? Accepts word or Hex Code beginning with #:",
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
        validateAnswers(answers);
        let shape;
        if (answers.shape == "circle") {
            shape = Shape.prototype.circle(answers.letters, answers.textColor, answers.shapeColor);
        } if (answers.shape == "square") {
            shape = Shape.prototype.square(answers.letters, answers.textColor, answers.shapeColor)
        } if (answers.shape == "triangle") {
            shape = Shape.prototype.triangle(answers.letters, answers.textColor, answers.shapeColor)
        };
        return shape;
        
    })
    .then(result => {
        writeFiles(result)
    }).catch(error => {
        console.error(error)
    })
}
// call function 
init();