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
  let {title,description,name,email,username, confirmTableOfContents, confirmAPIs, confirmFeatures} = data;
  let toc = tableOfContents(confirmTableOfContents);
  let technologies = data.technologies.split(",");
  let APIs = [];
  if(confirmAPIs){
    APIs = data.APIs.split(",");
  }
  let usage = data.usage.split(",");
  let features = [];
  if(confirmFeatures){
    features = data.features.split(",");
  }
  let credits = data.credits.split(",");
  let contributors = data.credits.split(",");
  let tests = data.tests.split(",");
  
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
`;
}

module.exports = generateMarkdown;
