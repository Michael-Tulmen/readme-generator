// function generate md-data
    function renderLicenseBadge(license) {
        const licenses = [
          {
            license: 'Apache-2.0',
            badge: `(https://img.shields.io/badge/License-Apache%202.0-blue.svg)`,
            link: `(https://opensource.org/licenses/Apache-2.0)`
          },
          {
            license: 'BSD-2-Clause',
            badge: `(https://img.shields.io/badge/License-BSD%203--Clause-blue.svg)`,
            link: `(https://opensource.org/licenses/BSD-2-Clause)`
          },
          {
            license: 'BSD-3-Clause',
            badge: `(https://img.shields.io/badge/License-BSD%202--Clause-blue.svg)`,
            link: `(https://opensource.org/licenses/BSD-3-Clause)`
          },
          {
            license: 'CDDL-1.0',
            badge: `(https://img.shields.io/badge/License-CDDL%201.0-blue.svg)`,
            link: `(https://opensource.org/licenses/CDDL-1.0)`
          },
          {
            license: 'EPL-2.0',
            badge: `(https://img.shields.io/badge/License-EPL%202.0-blue.svg)`,
            link: `(https://opensource.org/licenses/EPL-2.0)`
          },
          {
            license: 'GPL-2.0',
            badge: `(https://img.shields.io/badge/License-GPL%202.0-blue.svg)`,
            link: `(https://opensource.org/licenses/GPL-2.0)`
          },
          {
            license: 'LGPL-3.0',
            badge: `(https://img.shields.io/badge/License-LGPL%203.0-blue.svg)`,
            link: `(https://opensource.org/licenses/LGPL-3.0)`
          },
          {
            license: 'MIT',
            badge: `(https://img.shields.io/badge/License-MIT-blue.svg)`,
            link: `(https://opensource.org/licenses/MIT)`
          },
          {
            license: 'MPL-2.0',
            badge: `(https://img.shields.io/badge/License-MPL%202.0-blue.svg)`,
            link: `(https://opensource.org/licenses/MPL-2.0)`
          }
        ]
        switch (license) {
          case 'Apache-2.0':
            response = `[![${licenses[0].license}]${licenses[0].badge}]${licenses[0].link}`;
            break;
          case 'BSD-2-Clause':
            response = `[![${licenses[1].license}]${licenses[1].badge}]${licenses[1].link}`;
            break;
          case 'BSD-3-Clause':
            response = `[![${licenses[2].license}]${licenses[2].badge}]${licenses[2].link}`;
            break;
          case 'CDDL-1.0':
            response = `[![${licenses[3].license}]${licenses[3].badge}]${licenses[3].link}`;
            break;
          case 'EPL-2.0':
            response = `[![${licenses[4].license}]${licenses[4].badge}]${licenses[4].link}`;
            break;
          case 'GPL-2.0':
            response = `[![${licenses[5].license}]${licenses[5].badge}]${licenses[5].link}`;
            break;
          case 'LGPL-3.0':
            response = `[![${licenses[6].license}]${licenses[6].badge}]${licenses[6].link}`;
            break;
          case 'MIT':
            response = `[![${licenses[7].license}]${licenses[7].badge}]${licenses[7].link}`;
            break;
          case 'MPL-2.0':
            response = `[![${licenses[8].license}]${licenses[8].badge}]${licenses[8].link}`;
            break;
          case 'N/A':
            response = "";
            break;
        }
        return response;
      };
      
function generatorMD(data) {
const {title, description, github, installation, usageInfo, contributors, languages, licensure, test, ...user} = data;
    
return `
# ${title}
        
## Description
${description}

##GitHub
You can visit this application at ${github} to try yourself
            
## Table of Contents
- ${title}
- [Description](#description)
- ${languages}
- [GitHub-Info](#github)
- [Table of Contents](#table-of-contents)
- [Installation](#installation)
- [Usage](#usage)
- [Contributors](#contributing)
- [Testing](#Testing)
- [Questions](#Questions)
        
        
## Installation
${installation}
        
        
## Usage
${usageInfo}
        
        
## Contributing
${contributors}

## Testing
${test}

## Licensure
${licensure}
        
## Questions
If you have any questions, you may direct them to ${user.github} using the following links:
| Contact | Description |
| --- | --- |
| Name | ${user.name} |
| Title | ${user.occupation} |
| Email | <${user.email}> |

`;
    }
    
module.exports = generatorMD;