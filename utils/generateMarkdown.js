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
  if(license){
    var lic = license.toLowerCase();
    lic = lic.replaceAll("gnu","");
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

var tableOfContents = (confirmTableOfContents) =>{
  if(!confirmTableOfContents){
    return '';
  }
  else{
    return `## Table Of Contents
    * Usage
    * Credits
    * License
    `
  }
}

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  let {title,description,name,email,username, confirmTableOfContents, confirmAPIs, confirmFeatures, technologies, license} = data;
  let toc = tableOfContents(confirmTableOfContents);
  let APIs = [];
  if(confirmAPIs){
    APIs = data.APIs.split(",").map(data => '* ' + data);
  }
  console.log(technologies);
  technologies = technologies.split(',').map(data => '* ' + data);
  let usage = data.usage.split(",").map(data => '* ' + data);
  let features = [];
  if(confirmFeatures){
    features = data.features.split(",").map(data => '* ' + data);
  }
  let credits = data.credits.split(",").filter(data => data).map(data => '* ' + data);

  let contributors = data.credits.split(",").filter(data => data).map(data => '* ' + data);
  let tests = data.tests.split(",").filter(data => data).map(data => '* ' + data);
  
  return `## ${title}
  ## Description
  ${description}

  ## Built With
  ${technologies.join("\r\n")}

  ## Usage
  ${usage.join("\r\n")}

  ## Questions
  please direct all questions to:
  * github profile: https://github.com/${username}
  * email: ${email}

  ${renderLicenseSection(license)}

  ## Contribution Guidelines
  ${contributors.join("\r\n")}

  ## Tests
  ${tests.join("\r\n")}

  ## Credits
  * ${name}
  ${credits.join("\r\n")}
`;
}

module.exports = generateMarkdown;
