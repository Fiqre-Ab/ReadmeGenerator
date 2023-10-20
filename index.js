// TODO: Include packages needed for this application
const fs=require("fs");
const inquirer=require("inquirer");
const  generateMarkdown=require("./utils/generateMarkdown")
// TODO: Create an array of questions for user input
//add questions:added readme sections (descriptions,usage,license,etc)
const questions = [
 {
    type: "input",
    message: "What is your project title?",
    name: "title",
  },
  {
    type: "input",
    message: "Please provide a description of your project:",
    name: "description",
  },
  {
    type: "input",
    message: "How can someone install your project?",
    name: "installation",
  },
  {
    type: "input",
    message: "How can someone use your project?",
    name: "usage",
  },
  {
    type: "list",
    message: "Choose a license for your project:",
    name: "license",
    choices: ["MIT", "GNU GPLv3", "Apache 2.0", "Other", "None"],
  },
  {
    type: "input",
    message: "What are your contribution guidelines?",
    name: "contributing",
  },
  {
    type: "input",
    message: "How should someone run tests on your project?",
    name: "tests",
  },
  {
    type: "input",
    message: "What is your GitHub username?",
    name: "github",
  },
  {
    type: "input",
    message: "What is your email address?",
    name: "email",
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

    inquirer.prompt(questions).then((response)=>{const markdown= generateMarkdown(response)
    
    writeToFile("README.md", markdown);
    })
}

// Function call to initialize app
init();
//use inquiter to dipsplay questions to user
//call generateMarkdown function on the data collected
//take what is returned to us,then pass it to the writeFile function 