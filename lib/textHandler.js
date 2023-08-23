const { getInput } = require('./utils');

async function getLogoText() {
  const text = await getInput('Enter up to three characters for the text: ');
  return text;
}

module.exports = {
  getLogoText
};
