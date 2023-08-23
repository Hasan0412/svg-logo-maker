const inquirer = require('inquirer');

async function getLogoTextQuery() {
  const answer = await inquirer.prompt([
    {
      type: 'input',
      name: 'logoText',
      message: 'Enter up to three characters for the text: '
    }
  ]);
  return answer.logoText;
}

async function getShapeChoiceQuery(shapeOptions) {
  const answer = await inquirer.prompt([
    {
      type: 'list',
      name: 'selectedShape',
      message: 'Choose a shape from the list:',
      choices: shapeOptions
    }
  ]);
  return answer.selectedShape;
}

async function getShapeColorQuery() {
  const answer = await inquirer.prompt([
    {
      type: 'input',
      name: 'shapeColor',
      message: 'Enter shape color (keyword or hexadecimal number): '
    }
  ]);
  return answer.shapeColor;
}

async function getTextColorQuery() {
  const answer = await inquirer.prompt([
    {
      type: 'input',
      name: 'textColor',
      message: 'Enter text color (keyword or hexadecimal number): '
    }
  ]);
  return answer.textColor;
}

module.exports = {
  getLogoTextQuery,
  getShapeChoiceQuery,
  getShapeColorQuery,
  getTextColorQuery
};
