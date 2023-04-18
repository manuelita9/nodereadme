// TODO: Include packages needed for this application
const inquirer = require('inquirer');
const fs = require('fs');
const generateMarkdown = require('./utils/generateMarkdown');
// TODO: Create an array of questions for user input
const questions = [   {
    type: 'input',
    name: 'title',
    message: 'What is the project title?',
  },];

// TODO: Create a function to write README file
function writeToFile(fileName, data) { 
    fs.writeFile(fileName, data, (err) =>
      err ? console.log(err) : console.log('Success!')
     );}
     // TODO: Create a function to initialize app
function init() {
    inquirer.prompt (questions)
    .then (data=>{
        console.log (data) 
        var markdown=generateMarkdown(data)
        console.log (markdown)
        writeToFile('README2.md', markdown)

    })
}
