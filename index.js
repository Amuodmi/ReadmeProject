//@ts-check
// TODO: Include packages needed for this application:

const inquirer = require('inquirer');
const fs = require('fs');
const MarkDown = require('./page-template.js');

// TODO: Create an array of questions for user input
const questions = [

      {
        type: 'input',
        name: 'name',
        message: 'What is the name of your project?',
     },
     
      {
        type: 'input',
        name: 'motivation',
        message: 'What was your motivation behind this project?',
      },
      {
        type: 'input',
        name: 'build',
        message: 'Why did you build this project?',
      },
      {
        type: 'input',
        name: 'problem',
        message: 'What problem does it solve?',
      },
      {
        type: 'input',
        name: 'learn',
        message: 'What did you learn?',
      },
      {
        type: 'input',
        name: 'out',
        message: 'What makes your project stand out?',
      }, 
      {
        type: 'input',
        name: 'description',
        message: 'Provide a description of the project',
      },
      {
        type: 'checkbox',
        name: 'languages',
        message: 'What did you build this project with? (Check all that apply)',
        choices: ['JavaScript', 'HTML', 'CSS', 'ES6', 'jQuery', 'Bootstrap', 'Node']
      },
      {
        type: 'list',
        name: 'license',
        message: 'Which type of license?',
        choices:['MIT', 'ISC', 'GNUGPLv3'],
        filter (val){
          return val.toUpperCase();
        }
      },
      {
        type: 'input',
        name: 'link',
        message: 'Enter the GitHub link to your project.',
      },
    {
      type: 'input',
      name: 'email',
      message: 'Enter your e-mail address.',
    }, 
]; 
  
async function runQuestions(){
  return inquirer.prompt(questions)
  .then((answers) => {
    
    const generate = MarkDown.generateReadMe(answers);

    fs.writeFile('README.md', generate, (err) => {
      if (err) {
         console.log('Could not save file', err)
      } else {
         console.log('Success! New README.md file has been created')
      }
    });

  },

)}
  // hey there, 👋 ! you got this!! I believe in you! 🤠

runQuestions(); 
