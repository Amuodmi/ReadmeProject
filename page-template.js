
class MarkDown {

  static licenseImage(license) {
    const images = {
      mit: '[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)',
      isc: '[![License: ISC](https://img.shields.io/badge/License-ISC-blue.svg)](https://opensource.org/licenses/ISC)',
     gnugpl3: '[![License: GPL v3](https://img.shields.io/badge/License-GPLv3-blue.svg)](https://www.gnu.org/licenses/gpl-3.0)',
  }
  return images[license];
}

static licenseImageLink(license){
  const licenseLink = {
      mit: '[MIT](https://chooselicense.com/licenses/mit/)',
      isc: '[ISC](https://chooselicense.com/licenses/isc/)',
      gnugpl3: '[GNUGPLv3](https://chooselicense.com/licenses/gpl-3.0/'
  }
  return licenseLink(license);
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

- [Project Description](#project-description)
- [Motivation](#motivation)
- [Installation](#installation)
- [About the Project](#about-the-project)
- [License](#license)
- [Questions and Contact](#questions-and-contact)

### Description
${answers.description}
${answers.languages}

### Motivation
${answers.motivation}

### Installation
${answers.build}

### About
${answers.problem}
${answers.learn}
${answers.out}

### License

${this.licenseImageSection(answers.license)}

### Questions
[View my Github profile](${answers.link})  

Please feel free to reach me with any questions:${answers.email}


    `;
  
  }};

  module.exports = MarkDown 



  //goes under the License section:   ${this.licenseImageSection(answers.license)}
  //goes under the title section:  ${this.licenseImage(answers.license)}
