// function to generate markdown for README
function generateMarkdown(data) {
  return `# ${data.projectTitle}

## Description
${data.description}  

![License badge](https://img.shields.io/badge/license-${data.license}-green)


## Table of Contents
1. [Installation](#Installation)
2. [Usage](#Usage)
3. [License](#License)
4. [Contribution](#Contribution)
5. [Questions](#Questions)


## Installation
${data.installation}


## Usage
${data.usage}


## License
${data.license}</br> 
![License badge](https://img.shields.io/badge/license-${data.license}-green) 


## Contribution
${data.contributing}


## Tests
${data.tests}


## Questions
You can view my GitHub profile here: https://github.com/${data.GitHubUserName}</br>
If you have any questions, feel free to send me an email: ${data.email}`;
}

module.exports = generateMarkdown;
