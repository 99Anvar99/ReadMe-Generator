// license
const licenseArr = [
    "Academic Free License v3.0", "Apache license 2.0", "Artistic license 2.0",
  ];

  const licenseLinks = [
    "https://opensource.org/licenses/AFL-3.0",
    "https://opensource.org/licenses/Apache-2.0",
  ];

  // renderLicenseBadge
  function renderLicenseBadge(license) {
    const index = licenseArr.indexOf(license);
    return index !== -1
      ? `[![License](https://img.shields.io/badge/License-${encodeURIComponent(license)}-brightgreen.svg)](${licenseLinks[index]})`
      : "";
  }

  // renderLicenseLink
  function renderLicenseLink(license) {
    const index = licenseArr.indexOf(license);
    return index !== -1
      ? `[${license}](${licenseLinks[index]})`
      : "";
  }

  // renderLicenseSection
  function renderLicenseSection(license) {
    const index = licenseArr.indexOf(license);
    return index !== -1
      ? `Read more about ${license} here:`
      : "";
  }

  // generate function
  function generate(data) {
    return `# ${data.title}
  ## Badges
  ${renderLicenseBadge(data.license)}

  ## Table of Contents
  * [License](#license)
  * [Description](#description)
  * [Installation](#installation)
  * [Usage](#usage)
  * [How to Contribute](#how-to-contribute)
  * [Tests](#tests)
  * [Questions?](#questions)

  ## License
  ${renderLicenseSection(data.license)}
  ${renderLicenseLink(data.license)}

  ## Description
  ${data.description}

  ## Installation
  ${data.install}

  ## Usage
  ${data.usage}

  ## How to Contribute
  [Contributor Covenant](https://www.contributor-covenant.org/)
  ${data.contributing}

  ## Tests
  ${data.testing}

  ## Any Questions?
  ### Contact me here:
  [${data.username}](https://github.com/${data.username})
  ${data.email}`;
  }

  // module.exports = generate;
  module.exports = generate;
