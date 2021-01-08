// function to generate markdown for README
function generateMD(data) {
    return `# ${data.title}
    
     # Author: ${data.author}
        
     ## Table of Contents
     * [Installation](#instalation)
        
     * [Usage](#usage)
        
     * [Contributing](#contributing)
        
     * [License](#license)
        
     * [Tests](#tests)
        
     * [Questions](#questions)
       
        
        ## Description:
        ${data.description}
        ## Installation:
        ${data.instalDep}
        ## license:
        [License Badge!](https://img.shields.io/static/v1?label=License&message=${data.license}&color=blue)
        ## GitHub:
        ${data.github}
        ## language used:
        ${data.language}
        ## Questions:
        Contact ${data.author} with any questions at ${data.contact}
      `;
  }
  
  module.exports = generateMD;