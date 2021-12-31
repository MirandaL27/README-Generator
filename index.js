// TODO: Include packages needed for this application
const inquirer = require('inquirer');
const fs = require('fs');
const generatePage = require('./utils/generateMarkdown');
//used if file with answers is provided
const fileNameArgs = process.argv.slice(2);

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
          name: 'email',
          message: 'What is your email address?'
      },
      {
        type: 'input',
        name: 'username',
        message: 'What is your github username?'
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
        type: 'input',
        name: 'description',
        message: "Write a description for your project (Required)",
        validate: nameInput => {
            if (nameInput) {
            return true;
        } else {
            console.log('The project description is required.');
            return false;
            }
        }
      },
      {
        type: 'confirm',
        name: 'confirmTableOfContents',
        message: 'Would you like to include a table of contents in your README?',
        default: true
      },
      {
        type: 'input',
        name: 'technologies',
        message: 'List the technologies you used during this project separated by comma',
      },
      {
        type: 'confirm',
        name: 'confirmAPIs',
        message: 'Did you use any 3rd party or server-side APIs that you would like to include?',
        default: true
      },
      {
        type: 'input',
        name: 'APIs',
        message: 'List the APIs you used, separated by comma:',
        when: ({ confirmAPIs }) => confirmAPIs
      },
      {
        type: 'input',
        name: 'usage',
        message: 'Provide usage instructions for your project. Separate each instruction with a comma.',
      },
      {
        type: 'list',
        name: 'license',
        message: 'Provide a license for your project.',
        choices: ["MIT", "GNU AGPLv3", "GNU GPLv3", "GNU LGPLv3", "MPL-2.0", "Apache-2.0", "BSL-1.0"],
        default: 'MIT'
      },
      {
        type: 'confirm',
        name: 'confirmFeatures',
        message: 'Would you like to include a features section?',
        default: true
      },
      {
        type: 'input',
        name: 'features',
        message: 'List the features you would like to include, separated by comma:',
        when: ({ confirmFeatures }) => confirmFeatures
      },
      {
        type: 'input',
        name: 'credits',
        message: 'List the other contributors to your project separated by comma:'
      },
      {
        type: 'input',
        name: 'contributors',
        message: 'List guidelines for other developers to contribute to your project, separate each guideline with a comma:'
      },
      {
          type: 'input',
          name: 'tests',
          message: 'List the test cases you would like to include separated by comma'
      }
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
    if(!fileNameArgs){
        //use inquirer to display questions to the user and use the user input as data
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
    else{
        //open the file provided by the user and get data from there.
        fs.readFile(fileNameArgs[0], 'utf8' , (err, data) => {
            if (err) {
                console.error(err)
                return
            }
            else{
                const fileName = "./dist/README.md";
                return writeToFile(fileName, generatePage(JSON.parse(data)));
            }
        })
        
        
    }

}

// Function call to initialize app
init();
