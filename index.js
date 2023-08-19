const inquirer = require('inquirer'); // includes inquirer
const fs = require('fs'); // includes fs
const generateMarkdown = require('./generate'); // includes generate

async function getUserInput() { // get user input function
    try {
        const answers = await inquirer.prompt([ // prompts
            {
                name: 'license',
                message: 'Choose a license for this application:',
                type: 'list',
                choices: [
                    "Academic Free License v3.0",
                    "Apache License 2.0",
                    "Artistic License 2.0",
                ],
            },
            {
                name: 'title',
                message: 'Enter the title of this application:',
                type: 'input',
            },
            {
                name: 'description',
                message: 'Describe what this application does:',
                type: 'input',
            },
        ]);

        return answers;
    } catch (error) {
        console.error('An error occurred:', error);
    }
}

function writeToMarkdownFile(fileName, data) { // write to a file function
    fs.appendFile(`${fileName}.md`, data, (err) => {
        if (err) {
            console.error('Error writing to file:', err);
        } else {
            console.log(`${fileName}.md has been generated.`);
        }
    });
}

async function initializeApp() { // async function
    try {
        const answers = await getUserInput();
        writeToMarkdownFile(answers.fileName, generateMarkdown(answers));
    } catch (error) {
        console.error('An error occurred during initialization:', error);
    }
}

initializeApp();
