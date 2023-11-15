

// 1. Create a prompt that asks for the letters used, shape used and color for the shap

const inquirer = require("inquirer");
const fs = require('fs');
const {Triangle, Square, Circle} = require('./lib/shapes');

function writeToFile(fileName, answers) {
    let svgString = '';
    

    fs.writeFile(fileName, answers, (err) => {
        if (err) throw err;
        console.log('The file has been saved!');
    });
}
function promptUser() {
inquirer
    .prompt ([
        {
            type: 'input',
            name: 'name',
            message: 'Type the three letters that you would like to use for your logo'
        },
        {
            type: 'input',
            name: 'textColor',
            message: 'What color do you want to use for your logo? (enter a color keyword or hex code)'
        },
        { 
            type: 'input',
            name: 'shapeColor',
            message: 'What background color do you want to use for the shape in your logo? (enter a color keyword or hex code)'
        },
        {
            type: 'list',
            name: 'shape',
            message: 'What shape would you like to use in the background of the logo?',
            choices: ['Circle', 'Triangle', 'Square']
        },
    ])
    .then((answers) => {
        if (answers.text.length > 3) {
            console.log('Please enter only three letters');
            return;
        } else {
            console.log(answers);
            writeToFile('logo.svg', answers);
        }
    })
}

promptUser();
   