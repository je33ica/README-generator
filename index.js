const inquirer = require("inquirer");
const fs = require("fs");
const generateMD = require ('./generateMD.js')

// array of questions for user
const questions = [
    {
        type: "input",
        name: "author",
        message: "What is your name?"
    },
    {
        type: "input",
        name: "github",
        message: "What is your Github username?"
    },
    {
      type: 'input',
      name: 'contact',
      message: 'What is your email address?',
  },
    {
        type: "input",
        name: "title",
        message: "What is your project's title?"
    },
    {
        type: "input",
        name: "description",
        message: "Please write a short description of your project."
    },
    
    {
      type: "input",
      name: "instalDep",
      message: "Command to install dependencies?",
      default: "npm install",
    },
    {
      type: "checkbox",
      message: "What languages have you used?",
      name: "language",
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
  ]


 // function to initialize program
function init() {
  console.log("Inside the init function")
  inquirer.prompt(questions).then((response) => {
      fs.writeFileSync("exampleREADME.md", generateMD(response) , function (err) {

          if (err) {
              console.log(err)
          }
          else {
              console.log("Success")
          }
      })
  })
}

// function call to initialize program
init();