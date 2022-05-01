// function generate md-data
function generatorMD(data) {

const {title, description, github, installation, usageInfo, contributors} = data;


  return `
    # ${title}
    
    ## Description
    ${description}

    ##GitHub
    You can visit this application at ${github} to try yourself
        
    ## Table of Contents
    - [${title}](#${title})
    - [Description](#description)
    - [GitHub-Info](#github)
    - [Table of Contents](#table-of-contents)
    - [Installation](#installation)
    - [Usage](#usage)
    - [Contributing](#contributing)
 
    
    
    ## Installation
    ${installation}
    
    
    ## Usage
    ${usageInfo}
    
    
    ## Contributors
    ${contributors}
  `;
}

module.exports = generatorMD;