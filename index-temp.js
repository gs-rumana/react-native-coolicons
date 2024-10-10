// index-template.js
const path = require('path');

function kebabToPascalCase(str) {
  return str
    .split("-")
    .map((word) => word.charAt(0).toUpperCase() + word.slice(1).toLowerCase())
    .join("");
}

function indexTemplate(files) {
  // Generate the import statements
  const importStatements = files
    .map(file => {
      const iconName = path.basename(file.path, path.extname(file.path));
      return `export { default as ${kebabToPascalCase(iconName)} } from './${iconName}';`;
    })
    .join('\n');

  // Generate the type definition for IconName
  const typeDefinition = `export type IconName = ${files
    .map(file => `'${path.basename(file.path, path.extname(file.path))}'`)
    .join(' | ')};`;

  return `${importStatements}

${typeDefinition}`;
}

module.exports = indexTemplate;