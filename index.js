// TODO: Include packages needed for this application
const fs=require("fs");
const inquirer=require("inquirer");
const  generateMarkdown=require("./utils/generateMarkdown")
// TODO: Create an array of questions for user input
//add questions:added readme sections (descriptions,usage,license,etc)
const questions = [
  {
    type: 'input',
    name: 'title',
    message: 'What is the title of your project?',
    validate: (input) => input.trim() !== '' || 'Please provide a title for your project.',
  },
  {
    type: 'input',
    name: 'description',
    message: 'Please describe your project:',
    validate: (input) => input.trim() !== '' || 'Please provide a project description.',
  },
  {
    type: 'input',
    name: 'installation',
    message: 'How can someone install your project?',
    validate: (input) => input.trim() !== '' || 'Please provide installation instructions.',
  },
  {
    type: 'input',
    name: 'usage',
    message: 'How can someone use your project?',
    validate: (input) => input.trim() !== '' || 'Please provide usage information.',
  },
  {
    type: 'list',
    name: 'license',
    message: 'Choose a license for your project:',
    choices: ['MIT', 'GNU GPLv3', 'Apache 2.0', 'Other', 'None'],
  },
  {
    type: 'input',
    name: 'contributing',
    message: 'Explain your contribution guidelines (if any):',
  },
  {
    type: 'input',
    name: 'tests',
    message: 'How should someone run tests on your project (if applicable):',
  },
  {
    type: 'input',
    name: 'github',
    message: 'What is your GitHub username?',
    validate: (input) => input.trim() !== '' || 'Please provide your GitHub username.',
  },
  {
    type: 'input',
    name: 'email',
    message: 'What is your email address:',
    validate: (input) =>
      /\S+@\S+\.\S+/.test(input) || 'Please provide a valid email address.',
  },
];



// TODO: Create a function to write README file

function writeToFile(fileName, data) {
    fs.writeFile(fileName,data,(err)=>{
        err?console.error("error writing to file",err):console.log("README generated successfully!")
    })
}

// TODO: Create a function to initialize app
function init() {

//call generateMarkdown function on the data collected
    inquirer.prompt(questions).then((response)=>{const markdown= generateMarkdown(response)
    
    writeToFile("./doc/README.md", markdown);
    })
}

// Function call to initialize app
init();
