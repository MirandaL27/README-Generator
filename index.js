// TODO: Include packages needed for this application
const inquirer = require('inquirer');
const fs = require('fs');
const generatePage = require('./utils/generateMarkdown');


// TODO: Create an array of questions for user input
const questions = ["What is the title of your project?"];

// TODO: Create a function to write README file
function writeToFile(fileName, data) {
    fs.writeFile(fileName,data, err =>{
        if (err) throw new Error(err);
        console.log('Page created!');
    });
}

// TODO: Create a function to initialize app
function init() {

}

// Function call to initialize app
init();
