const fs = require('fs');
const inquirer = require('inquirer');

// Function to create the SVG string
const generateSVG = (text, textColor, shape, shapeColor) => {
  let shapeSVG;

  switch (shape) {
    case 'circle':
      shapeSVG = `<circle cx="150" cy="100" r="80" fill="${shapeColor}" />`;
      break;
    case 'triangle':
      shapeSVG = `<polygon points="150,20 220,180 80,180" fill="${shapeColor}" />`;
      break;
    case 'square':
      shapeSVG = `<rect x="70" y="20" width="160" height="160" fill="${shapeColor}" />`;
      break;
    default:
      throw new Error('Invalid shape');
  }

  return `
    <svg width="300" height="200" xmlns="http://www.w3.org/2000/svg">
      ${shapeSVG}
      <text x="150" y="125" font-size="48" text-anchor="middle" fill="${textColor}">
        ${text}
      </text>
    </svg>
  `;
};

// Inquirer prompts
inquirer
  .prompt([
    {
      type: 'input',
      name: 'text',
      message: 'Enter up to three characters for the logo:',
      validate: input => input.length <= 3 ? true : 'Text must be up to 3 characters long.',
    },
    {
      type: 'input',
      name: 'textColor',
      message: 'Enter a color keyword or a hexadecimal number for the text color:',
    },
    {
      type: 'list',
      name: 'shape',
      message: 'Select a shape for the logo:',
      choices: ['circle', 'triangle', 'square'],
    },
    {
      type: 'input',
      name: 'shapeColor',
      message: 'Enter a color keyword or a hexadecimal number for the shape color:',
    },
  ])
  .then(answers => {
    const { text, textColor, shape, shapeColor } = answers;

    // Generate SVG content
    const svgContent = generateSVG(text, textColor, shape, shapeColor);

    // Write SVG to file
    fs.writeFile('logo.svg', svgContent, err => {
      if (err) {
        console.error('Error writing file:', err);
      } else {
        console.log('Generated logo.svg');
      }
    });
  });
