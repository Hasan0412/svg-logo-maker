import { getInput } from './utils.js';

async function getLogoText() {
  const text = await getInput('Enter up to three characters for the text: ');
  return text;
}

export {
  getLogoText
};
