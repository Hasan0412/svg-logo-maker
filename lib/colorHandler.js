const { getInput } = require('./utils');

async function getLogoColor() {
  const logoColor = await getInput('Enter logo color (keyword or hex): ');
  return logoColor;
}

module.exports = {
  getLogoColor
};
