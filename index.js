const inquirer = require('inquirer');
const generatorMD = require('./src/generatorMD');
const fs = require('fs');



//list of prompts to fill out major portions of the sheet from user
const getUserInfo = () => {

    return inquirer
        .prompt([
    {
        type: 'input',
        name: 'name',
        message: 'What is your name?',
        validate: nameInput => {
            if(nameInput){
                return true;
            } else {
                console.log('Please enter your name!');
                return false;
            }
        }
    },
    {
        type: 'input',
        name: 'userTitle',
        message: 'Please enter your job title!',
        validate: userTitle => {
            if(userTitle){
                return true;
            } else {
                console.log('Although optional it is valuable for users of your program to know your functional title');
                return false;
            }
        }
    },
    {
        type: 'input',
        name: 'portfolio',
        message: 'Please enter your GitHub portfolio link',
        validate: portfolio => {
            if(portfolio){
                return true;
            } else {
                console.log('Please input your portfolio link to expand on users viewing your work!');
                return false;
            }
        }
    },
    {
        type: 'input',
        name: 'email',
        message: 'Input your e-mail address',
        validate: email => {
            if(email) {
                return true;
            } else {
                console.log('Contact information is essential for questions and concerns about your program!')
                return false;
            }
        }
    }
  ]);
};



const getProjectInfo = data => {
    return inquirer
        .prompt([
    {
        type: 'input',
        name: 'title',
        message: 'What is your project called?',
        validate: titleInput => {
            if(titleInput){
                return true;
            } else {
                console.log('Please input a title for your project!');
                return false;
            }
        }
    },
    {
        type: 'input',
        name: 'github',
        message: 'Enter the GitHub link to your project. (Required)',
        validate: linkInput => {
          if (linkInput) {
            return true;
          } else {
            console.log('You need to enter a project GitHub link!');
            return false;
          }
        }
    },  
    {
        type: 'input',
        name: 'description',
        message: "Please describe the your project and it's purpose",
        validate: descriptionInput => {
            if(descriptionInput){
                return true;
            } else {
                console.log('Without a description how will a user know what the project does?');
                return false;
            }
        }
    },
    {
        type: 'checkbox',
        name: 'languages',
        message: 'Which languages did you use on this project?', 
        choices: ['JavaScript', 'NodeJS', 'ExpressJS', 'HTML', 'CSS', 'SQL', 'Python', 'Ruby', 'Java', 'C++', 'C#', 'FORTRAN']
    },
    {
        type: 'input',
        name: 'installation',
        message: 'How can a user install  your program/application?',
        validate: installation => {
            if(installation) {
                return true;
            } else {
                console.log('Please include instructions as to how to install your program');
                return false;
            }
        }
    },
    {
        type: 'input',
        name: 'usageInfo',
        message: 'How do users use or employ your program?',
        validate: usageInfo => {
            if(usageInfo) {
                return true;
            } else {
                console.log('Please explain how to use your application');
                return false;
            }
        }
    },
    {
        type: 'input',
        name: 'contributors',
        message: 'Please list any other contributors to the project',
        validate: contributors => {
            if(contributors) {
                return true;
            } else {
                console.log('Listing a complete list of contributors is important for crediting work!');
                return false;
            }
        }
    },
    {
        type: 'input',
        name: 'test',
        message: 'testInstructions',
        validate: testInstructions => {
            if(testInstructions) {
                return true;
            } else {
                console.log('It is important to inform the user as to how to test this program for future usage!');
                return false;
            }
        }
    },
    {
        type: 'list',
        name: 'license',
        message: 'Please select the license you have or wish to use for this software',
        choices : ['Apache-2.0', 'BSD-2-Clause', 'BSD-3-Clause', 'CDDL-1.0','EPL-2.0', 'GPL-2.0', 'LGPL-3.0', 'MIT', 'MPL-2.0', 'None']
    }  
  ])
  .then((transferableData) => {
    const bigData = Object.assign(data, transferableData);
    console.log(bigData);
    return bigData;
});
};

getUserInfo().then(getProjectInfo).then(data => {
        const sendUserData = generatorMD(data);
        fs.writeFile('./dist/README.md', sendUserData, (err) => {
            if (err) throw new Error(err);
        });
    });