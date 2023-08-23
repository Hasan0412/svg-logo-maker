// Import required modules
const fs = require('fs');
const { getLogoColor } = require('./lib/colorHandler');
const { getLogoText } = require('./lib/textHandler');
const { circle, triangle, square } = require('./lib/shape');

// Define the SVG template with a placeholder for shapes and text
const svgTemplate =
  '<svg xmlns="http://www.w3.org/2000/svg" width="300" height="200">\n' +
  '  <!-- Add shapes and text here -->\n' +
  '</svg>';

// Function to create the logo
async function createLogo() {
  // Get logo text and color from user input
  const logoText = await getLogoText();
  const textColor = await getLogoColor();

 // Display available shape options
 const shapeOptions = ['circle', 'triangle', 'square'];
 console.log('Available shapes:', shapeOptions.join(', '));

 // Get user-selected shape and shape color
 const selectedShape = await getInput('Choose a shape from the list: ');
 const shapeColor = await getLogoColor();

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
}