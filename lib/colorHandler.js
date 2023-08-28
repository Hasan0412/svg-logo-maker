import { getInput } from './utils.js';

async function getLogoColor() {
  const logoColor = await getInput('Enter logo color (keyword or hex): ');
  return logoColor;
}

export { getLogoColor };
