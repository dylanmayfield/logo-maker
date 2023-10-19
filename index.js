// GIVEN a command-line application that accepts user input
// WHEN I am prompted for text
// THEN I can enter up to three characters
// WHEN I am prompted for the text color
// THEN I can enter a color keyword (OR a hexadecimal number)
// WHEN I am prompted for a shape
// THEN I am presented with a list of shapes to choose from: circle, triangle, and square
// WHEN I am prompted for the shape's color
// THEN I can enter a color keyword (OR a hexadecimal number)
// WHEN I have entered input for all the prompts
// THEN an SVG file is created named `logo.svg`
// AND the output text "Generated logo.svg" is printed in the command line
// WHEN I open the `logo.svg` file in a browser
// THEN I am shown a 300x200 pixel image that matches the criteria I entered

// 1. Create a prompt that asks for the letters used, shape used and color for the shape



// 2. Create a function to generate logo




// const inquirer = require('inquirer');
// const fetch = require('node-fetch');

// inquirer
//     .prompt({
//         type: 'input',
//         name: 'username',
//         message: 'Enter a Github Username:',
//     })
//     // promises are chained to directly pass inquirer data into fetch request
//     .then((res) => fetch(`https://api.github.com/users/${res.username}`))
//     // promises are chained to parse the request for the json data
//     .then((res) => res.json())
//     // json data is accepted as user and logged to the console
//     .then((user) => console.log(user));

const inquirer = require("inquirer");
const fs = require('fs');

inquirer
    .prompt ([
        {
            type: 'input',
            name: 'name',
            message: 'Type the three letters that you would like to use for your logo'
        },
        {
            type: 'input',
            name: 'description',
            message: 'What color do you want to use for your logo?'
        },
        {
            type: 'list',
            name: 'shape',
            message: 'What shape would you like to use in the background of the logo?',
            choices: ['Circle', 'Triangle', 'Square']
        },
    ])
         // promises are chained to directly pass inquirer data into fetch request
    .then((res) => console.log(res))
    // promises are chained to parse the request for the json data
    // .then((res) => res.json())
    // // json data is accepted as user and logged to the console
    // .then((user) => console.log(user));