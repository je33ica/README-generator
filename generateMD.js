// function to generate markdown for README
function generateMD(data) {
    return `# ${data.title}
    ![License Badge](https://img.shields.io/static/v1?label=License&message=${data.license}&color=blue);
    
        # Name: ${data.author}
        ![License Badge](https://img.shields.io/github/github/:${data.github}?label=Fork);
          
        ## Table of contents: 
        * [title](#title)
        * [description](#description)
        * [Usage](#usage)
        * [Installation](#instalDep)
        * [Contribute] (#contribute)
        * [language used] (#language)
        * [License](#license)
       
        
        ## Description:
        ${data.description}
        ## Installation:
        ${data.instalDep}
        ## Usage:
        ${data.usage}
        ## license:
        ${data.license}
        
        ## Contributing:
        ${data.contribute}
        ## language:
        ${data.language}
        ## Questions:
        Contact ${data.author} with any questions at ${data.contact}
      `;
  }
  
  module.exports = generateMD;