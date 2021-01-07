const inquirer = require("inquirer");
const fs = require ('fs');

// array of questions for user
inquirer
  .prompt([
    // {
    //     type: "input",
    //     name: "Author",
    //     message: "What is your name?"
    // },
    // {
    //     type: "input",
    //     name: "Github",
    //     message: "What is your Github username?"
    // },
    // {
    //     type: "input",
    //     name: "title",
    //     message: "What is the name of your project?"
    // },
    // {
    //     type: "input",
    //     name: "Description",
    //     message: "Please, provide a description of your project?"
    // },
    {
        type: 'input',
        name: 'usage',
        message: 'Directions for using this project?',
    },
    {
        type: "input",
        message: "What is your email?",
        name: "email",
      },
    {
      type: "input",
      name: "instDep",
      message: "Command to install dependencies?",
      default: "npm install",
    },
    {
      type: "input",
      name: "useage",
      message: "Please enter anything the user needs to know for this repo?",
    },
    {
      type: "input",
      name: "contribute",
      message:
        "Please enter any information the user needs to know about contributing.",
    },
    {
      type: "checkbox",
      message: "What languages have you used?",
      name: "language used",
      choices: [
        {
          name: "Javascript",
        },
        {
          name: "Python",
        },
        {
          name: "HTML",
        },
        {
          name: "Java",
        },
        {
          name: "C#",
        },
        {
          name: "C",
        },
        {
          name: "C++",
        },
        {
          name: "CSS",
        },
      ],
    },
    {
      type: "list",
      name: "license",
      message: "What license does your droject require?",
      choices: ["MIT", "Apache", "GPL", "IBM", "ISC", "Mozilla", "Unlicense"],
    },
  ])
  .then((answer) => {
    console.log("Your project is called " + answer.title);
    console.log("Project description " + answer.description);
    console.log("licesne " + answer.license);
  });
  
// // function to write README file
// function writeToFile(fileName, data) {
// }

// // function to initialize program
// function init() {

// }

// // function call to initialize program
// init();

// Name
// Choose a self-explaining name for your project.

// Description
// Let people know what your project can do specifically.
//  Provide context and add a link to any reference visitors might be unfamiliar with.
//  A list of Features or a Background subsection can also be added here.
// If there are alternatives to your project, this is a good place to list differentiating factors.

// Badges

// Installation
// Listing specific steps helps remove ambiguity and gets people to using your project as quickly as possible.
//  If it only runs in a specific context like a particular programming language version
//  or operating system or has dependencies that have to be installed manually, also add a Requirements subsection.

//  Usage
// Use examples liberally, and show the expected output if you can.
// It's helpful to have inline the smallest example of usage that you can demonstrate,
//  while providing links to more sophisticated examples if they are too long to reasonably include in the README.

// Support
// Tell people where they can go to for help. It can be any combination of an issue tracker, a chat room, an email address, etc.
// //  explain and showcase what your application does,
// //  justify the technologies used
// //   challenges you faced
// //   features you hope to implement in the future

// //  how to install
// authors & acknolegement
// how to use
// how to colloborate
// license
