var inquirer = require("inquirer");
var fs = require("fs");
var util = require("util");
var generate = require("./utils/generateMarkdown");
const fileName = "README.md";

// array of questions for user
const questions = [
    {
        type: "input",
        message: "Project Title:",
        name: "projectTitle"
    },
    {
        type: "input",
        message: "Description:",
        name: "description"
    },
    {
        type: "input",
        message: "Installation Instructions:",
        name: "installation"
    },
    {
        type: "input",
        message: "Usage Information:",
        name: "usage"
    },
    {
        type: "input",
        message: "Contributer Guidelines:",
        name: "contributing"
    },
    {
        type: "input",
        message: "Test Instructions:",
        name: "tests"
    },
    {
        type: "list",
        message: "License:",
        name: "license",
        choices: [
            "GPL",
            "ISC",
            "MIT"
        ]
    },
    {
        type: "input",
        message: "GitHub username:",
        name: "GitHubUserName"
    },
    {
        type: "input",
        message: "Email address:",
        name: "email"
    }
];

// function to write README file
function writeToFile(fileName, data) {
    var userData = generate(data);
    fs.writeFile(fileName, userData, function(err, result) {
        if (err) {
            throw err
        }
        else {
            console.log("Created new README.md");
        }
    });
}

// function to initialize program
function init() {
    inquirer.prompt(questions).then(response => writeToFile(fileName, response));
}

// function call to initialize program
init();

