// Import required modules
import fs from 'fs';
import { getLogoColor } from './lib/colorHandler.js';
import { circle, triangle, square } from './lib/shape.js';
import {
    getLogoTextQuery,
    getShapeChoiceQuery,
    getShapeColorQuery,
    getTextColorQuery
} from './lib/query.js';

// Define the SVG template with a placeholder for shapes and text
const svgTemplate =
  '<svg xmlns="http://www.w3.org/2000/svg" width="300" height="200">\n' +
  '  <!-- Add shapes and text here -->\n' +
  '</svg>';

  // Function to create the logo
async function createLogo() {
    // Get logo text and color from user input
  const logoText = await getLogoTextQuery();
  const textColor = await getLogoColor();

  const shapeOptions = ['circle', 'triangle', 'square'];
  const selectedShape = await getShapeChoiceQuery(shapeOptions);
  const shapeColor = await getShapeColorQuery();

   // Generate SVG code for the selected shape
  let shapeSvg = '';
  switch (selectedShape) {
    case 'circle':
      shapeSvg = circle(shapeColor);
      break;
    case 'triangle':
      shapeSvg = triangle(shapeColor);
      break;
    case 'square':
      shapeSvg = square(shapeColor);
      break;
    default:
      break;
  }

 // Replace the placeholder in the SVG template with the logo text and shape SVG
  const logoContent =
    svgTemplate.replace('<!-- Add shapes and text here -->', '\n' +
      `    <text x="150" y="30" fill="${textColor}" font-size="16" text-anchor="middle">${logoText}</text>\n` +
      `    ${shapeSvg}\n`);

   // Write the logo content to a file named 'logo.svg'
      fs.writeFileSync('logo.svg', logoContent);
  console.log('Generated logo.svg');
}

// Call the function to create the logo
createLogo();