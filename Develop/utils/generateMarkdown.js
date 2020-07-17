// function to generate markdown for README
function generateMarkdown(data) {
  return `# ${data.projectTitle}

## Description
${data.description}  

![License badge](https://img.shields.io/badge/license-${data.license}-green)

&nbsp;

## Table of Contents
1. [Installation](#Installation)
2. [Usage](#Usage)
3. [License](#License)
4. [Contribution](#Contribution)
5. [Questions](#Questions)

&nbsp;

## Installation
${data.installation}

&nbsp;

## Usage
${data.usage}

&nbsp;

## License
${data.license}
![License badge](https://img.shields.io/badge/license-${data.license}-green) 

&nbsp;

## Contribution
${data.contributing}

&nbsp;

## Tests
${data.tests}

&nbsp;

## Questions
You can view my GitHub profile here: ${data.GitHubUserName}.
If you have any questions, feel free to send me an email: ${data.email}`;
}

module.exports = generateMarkdown;
