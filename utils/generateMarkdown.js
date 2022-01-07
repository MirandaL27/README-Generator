// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
  if(license){
    return `![alt text](https://img.shields.io/static/v1?label=license&message=${license}&color=brightgreen)`
  }
    return "";
}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {

// This code is here for testing purposes only!
//   let licenseChoices = ["MIT", "GNU AGPLv3", "GNU GPLv3", "GNU LGPLv3", "MPL-2.0", "Apache-2.0", "BSL-1.0"];
//   licenseChoices.forEach( data => {
//     var test = data.toLowerCase();
//     test = test.replaceAll("gnu ","");
//     test = test.replaceAll("v3", "-3.0")
//     console.log(`https://choosealicense.com/licenses/${test}/`);
// })
//End Test Code

  if(license){
    let lic = license.toLowerCase();
    lic = lic.replaceAll("gnu ","");
    lic = lic.replaceAll("v3","-3.0");
    return `https://choosealicense.com/licenses/${lic}/`
  }
    return "";
}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {
  if(license){
    return `
  ## License
  ${license} 
  * Link: ${renderLicenseLink(license)}
  * ${renderLicenseBadge(license)}
  `
  }
    //return an empty string
    return "";
}

var tableOfContents = (confirmTableOfContents, sections) =>{
  if(!confirmTableOfContents){
    return '';
  }
    return `## Table Of Contents
  ${sections.tech ? '* [Technologies](#Built-With)' : ''}
  ${sections.API ? '* [APIs](#APIs-Used)': ''}
  ${sections.use ? '* [Usage](#Usage)' : ''}
  ${sections.feat ? '* [Features](#Features)' : ''}
  * [Questions](#Questions)
  ${sections.lic ? '* [License](#License)' : ''}
  ${sections.contrib ? '* [Contributions](#Contribution-Guidelines)' : ''}
  ${sections.test ? '* [Tests](#Tests)' : ''}
  * [Credits](#Credits)
  `
}

var buildWithSection = (technologies) => {
  return (technologies.length !=0 ? `## Built With
  ${technologies.join("\r\n  ")}` : '');

}

var usageSection = (usage) =>{
  return (usage.length !=0 ? `## Usage 
  ${usage.join("\r\n  ")}` : '');
}

var contributionGuidelinesSection = (contributions) =>{
  return (contributions.length != 0 ? `## Contribution Guidelines
  ${contributions.join("\r\n  ")}` : '');
}

var testsSection = (tests) =>{
  return ( tests.length != 0 ? `## Tests
    ${tests.join("\r\n  ")}` : '');
}

var APIsSection = (APIs) =>{
  return (APIs.length != 0 ? `## APIs Used
  ${APIs.join("\r\n  ")}` : '');
}

var featuresSection = (features) =>{
  return (features.length != 0 ? `## Features
  ${features.join("\r\n  ")}` : '');
}

var emailString = (email) =>{
  return (email === '' ? '': `* email: ${email}`);
}

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  let {title,description,name,email,username, confirmTableOfContents, confirmAPIs, confirmFeatures, technologies, license} = data;
  
  let APIs = [];
  if(confirmAPIs){
    APIs = data.APIs.split(",").filter(data => data).map(data => '* ' + data);
  }

  technologies = technologies.split(',').filter(data => data).map(data => '* ' + data);

  let usage = data.usage.split(",").filter(data => data).map(data => '* ' + data);

  let features = [];
  if(confirmFeatures){
    features = data.features.split(",").filter(data => data).map(data => '* ' + data);
  }

  let credits = data.credits.split(",").filter(data => data).map(data => '* ' + data);

  let contributors = data.credits.split(",").filter(data => data).map(data => '* ' + data);

  let tests = data.tests.split(",").filter(data => data).map(data => '* ' + data);

  let tocSection = {
    tech : (technologies != 0),
    API : (APIs.length != 0),
    use : (usage.length != 0),
    lic : (license != ''),
    feat : (features.length != 0),
    contrib : (contributors.length != 0),
    test : (tests.length != 0)
  }
  let toc = tableOfContents(confirmTableOfContents, tocSection);
  
  return `## ${title}
  ## Description
  ${description}

  ${toc}

  ${buildWithSection(technologies)}

  ${APIsSection(APIs)}

  ${usageSection(usage)}

  ${featuresSection(features)}

  ## Questions
  please direct all questions to:
  * github profile: https://github.com/${username}
  ${emailString(email)}

  ${renderLicenseSection(license)}

  ${contributionGuidelinesSection(contributors)}

  ${testsSection(tests)}

  ## Credits
  * ${name}
  ${credits.join("\r\n  ")}
`;
}

module.exports = generateMarkdown;
