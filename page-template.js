
class MarkDown {

  static licenseImage(license) {
    const images = {
      MIT: '[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)',
      ISC: '[![License: ISC](https://img.shields.io/badge/License-ISC-blue.svg)](https://opensource.org/licenses/ISC)',
     GNUGPLV3: '[![License: GNUGPLV3](https://img.shields.io/badge/License-GPLv3-blue.svg)](https://www.gnu.org/licenses/gpl-3.0)',
  }
  return images[license];
}

static licenseImageLink(license){
  const licenseLink = {
      MIT: '[![$license}](https://img.shields.io/badge/License-MIT-yellow)]',
      ISC: '[![$license}](https://img.shields.io/badge/License-ISC-blue.svg)]',
      GNUGPLV3: '[![$license}](https://img.shields.io/badge/License-GPLv3-blue.svg)]'
  }
  return licenseLink;
}

static licenseImageSection(license){
  if (license) {
    return `Licensed under the ${this.licenseImageLink(license)} license`
  }
  else {
    return `Image is not available`
  }
  }



static generateReadMe(answers) {

    // TODO: this is going to generate a README string
    return `
  
# ${answers.name}

${this.licenseImage(answers.license)}
     
## Table of Contents

- [Project Description](#id-description)
- [Motivation](#id-motivation)
- [Installation](#id-installation)
- [About the Project](#id-about)
- [License](#id-license)
- [Questions and Contact](#id-questions)

<div id='id-description'/>  

### Description
${answers.description}  

${answers.languages}

<div id='id-motivation'/>   

### Motivation
${answers.motivation}

<div id='id-installation'/>   

### Installation
${answers.build}

<div id='id-about'/>   

### About
${answers.problem}  

${answers.learn}  

${answers.out}

<div id='id-license'/>   

### License

 ${answers.license}

 <div id='id-questions'/>   

### Questions and Contact
[View my Github profile](${answers.link})  

Please feel free to reach me with any questions:  
${answers.email}


    `;
  
  }};

  module.exports = MarkDown 

