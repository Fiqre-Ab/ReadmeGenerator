// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
//must have a couple license options
function renderLicenseBadge(license) {
    if (license === "MIT") {
        return "![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)";
    } else if (license === "Apache 2.0") {
        return "![License: Apache 2.0](https://img.shields.io/badge/License-Apache%202.0-blue.svg)";
    }
    // Add more conditions for other licenses if needed.
    // If there is no license, return an empty string.
    return "";
}


// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {
    if (license === "MIT") {
        return "[MIT License](https://opensource.org/licenses/MIT)";
    } else if (license === "Apache 2.0") {
        return "[Apache License 2.0](https://www.apache.org/licenses/LICENSE-2.0)";
    }
    // Add more conditions for other licenses if needed.
    // If there is no license, return an empty string.
    return "";
}
// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {
    if (license) {
        const badge = renderLicenseBadge(license);
        const link = renderLicenseLink(license);
        return `## License\n${badge}\nThis project is licensed under the ${link}.\n`;
    } else {
        return "";
    }
}

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
    const licenseSection = renderLicenseSection(data.license);

    return `# ${data.title}

## Description
${data.description}

## Table of Contents
- [Installation](#installation)
- [Usage](#usage)
- [Contributing](#contributing)
- [Tests](#tests)
- [License](#license)
- [Questions](#questions)

## Installation
${data.installation}

## Usage
${data.usage}

${licenseSection}  // Include the license section generated using renderLicenseSection

## Contributing
${data.contributing}

## Tests
${data.tests}

## Questions
If you have any questions or need further assistance, please feel free to reach out to me:

GitHub: [${data.github}](https://github.com/${data.github})
Email: ${data.email}
`;
}

module.exports = generateMarkdown;