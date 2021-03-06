// function to generate markdown for README
function generateMD(data) {
  return `# ${data.title}
    # This README has been licensed using :
    [![License Badge](https://img.shields.io/static/v1?label=License&message=${data.license}&color=blue)]
    
# Author: ${data.author}
        
 ## Table of Contents
    *[Description](#description)

    * [Installation](#instalation)
      
    * [Usage](#usage)

    * [License](#license)  

    * [Contributing](#contributing)
      
    * [Tests](#tests)

    * [Language](#language)

    * [Questions](#questions)
          

    ## Description:
    ${data.description}

    ## Installation:
    ${data.instalDep}

    ## Usage:
    ${data.usage}

    ## The following license has been used:
    ${data.license}

    ## Contribute:
    ${data.contribute}


    ## Github:
    ${data.github} 
    [GitHub](https://github.com/${data.github})

    ## language used:
    ${data.language}

    ## Questions:
    Contact ${data.author} with any questions at ${data.contact}

    # [![ForTheBadge built-with-love](https://ForTheBadge.com/images/badges/built-with-love.svg)]

   
        `;
    
}

module.exports = generateMD;
