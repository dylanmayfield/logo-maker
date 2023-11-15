

// 1. Create a prompt that asks for the letters used, shape used and color for the shap

const inquirer = require("inquirer");
const fs = require('fs');
const {Triangle, Square, Circle} = require('./lib/shapes');

function writeToFile(fileName, svgContent) {
        fs.writeFile(fileName, svgContent, (err) => {
        if (err) throw err;
        console.log('The file has been saved!');
    });
}

function renderLogo(answers) {
    let shape = '';
    if (answers.shape === 'Circle') {
        shape = new Circle(answers.shapeColor);
    } else if (answers.shape === 'Triangle') {
        shape = new Triangle(answers.shapeColor);
    } else {
        shape = new Square(answers.shapeColor);
    }


const svgContent = `
<svg width="300" height="200">
    <rect width="100%" height="100%" fill="${answers.shapeColor}" />
    ${shape.draw()}
    <text fill="${answers.textColor}" font-size="45" font-family="Verdana" x="50%" y="50%" dominant-baseline="middle" text-anchor="middle">${answers.text}</text>
</svg>
`;

writeToFile('logo.svg', svgContent);
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
            message: 'What color do you want to use for your text color in your logo? (enter a color keyword or hex code)'
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
        if (answers.name.length > 3) {
            console.log('Please enter only three letters');
            return;
        } else {
            console.log(answers);
            renderLogo(answers);
        }
    })
    .catch((error) => {
            console.log(error);
            console.log('Something went wrong');
        
    });

}
promptUser();
  