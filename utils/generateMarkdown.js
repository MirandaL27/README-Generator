// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
  if(license){

  }
  else{
    return "";
  }
}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {
  if(license){

  }
  else{
    return "";
  }
}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {
  if(license){

  }
  else{
    //return an empty string
    return "";
  }
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
  let {title,description,name,email,username, confirmTableOfContents, confirmAPIs, confirmFeatures, technologies} = data;
  let toc = tableOfContents(confirmTableOfContents);
  let APIs = [];
  if(confirmAPIs){
    APIs = data.APIs.split(",").map(data => '* ' + data);
  }
  technologies = technologies.map(data => '* ' + data);
  let usage = data.usage.split(",").map(data => '* ' + data);
  let features = [];
  if(confirmFeatures){
    features = data.features.split(",").map(data => '* ' + data);
  }
  let credits = data.credits.split(",").map(data => '* ' + data);

  let contributors = data.credits.split(",").map(data => '* ' + data);
  let tests = data.tests.split(",").map(data => '* ' + data);
  
  return `## ${title}
  ## Description
  ${description}
  
  ## Built With
  ${technologies}

  ## Questions
  please direct all questions to:
  * github profile: ${username}
  * email: ${email}

  ## Credits
  * ${name}
  ${credits}
`;
}

module.exports = generateMarkdown;
