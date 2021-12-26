// TODO: Include packages needed for this application
const inquirer = require('inquirer');
const fs = require('fs');
const generatePage = require('./utils/generateMarkdown');
// TODO: Create an array of questions for user input
const questions = [
    {
        type: 'input',
        name: 'name',
        message: 'What is your name? (Required)',
        validate: nameInput => {
            if (nameInput) {
            return true;
        } else {
            console.log('Your name is required.');
            return false;
            }
        }
      },
      {
        type: 'input',
        name: 'title',
        message: "What is the title of your project? (Required)",
        validate: nameInput => {
            if (nameInput) {
            return true;
        } else {
            console.log('The project title is required.');
            return false;
            }
        }
      },
      {
        type: 'checkbox',
        name: 'technologies',
        message: 'What technologies did you use when building this project? (Check all that apply)',
        choices: ['JavaScript', 'HTML', 'CSS', 'ES6', 'jQuery', 'Bootstrap', 'Node']
      },
];

// TODO: Create a function to write README file
function writeToFile(fileName, data) {
    fs.writeFile(fileName,data, err =>{
        if (err) throw new Error(err);
        console.log('Page created!');
    });
}

const promptUser = () => {
    return inquirer.prompt(questions)
}

// TODO: Create a function to initialize app
function init() {
    promptUser()
        .then((data) => {
            const fileName = "./dist/README.md";
            console.log(fileName,data);
            return writeToFile(fileName, generatePage(data));
        })
        .catch(error =>{
            console.log(error)
        });
}

// Function call to initialize app
init();
