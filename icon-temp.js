const template = (variables, { tpl }) => {
    variables.jsx.openingElement.attributes.find(attr => attr.name.name === 'width').value = {
        type: 'JSXExpressionContainer',
        expression: {
            type: 'MemberExpression',
            object: {
                type: 'Identifier',
                name: 'props'
            },
            property: {
                type: 'Identifier',
                name: 'width'
            }
        }
    }
    variables.jsx.openingElement.attributes.find(attr => attr.name.name === 'height').value = {
        type: 'JSXExpressionContainer',
        expression: {
            type: 'MemberExpression',
            object: {
                type: 'Identifier',
                name: 'props'
            },
            property: {
                type: 'Identifier',
                name: 'height'
            }
        }
    }
    variables.jsx.openingElement.attributes.find(attr => attr.name.name === 'fill').value = {
        type: 'JSXExpressionContainer',
        expression: {
            type: 'MemberExpression',
            object: {
                type: 'Identifier',
                name: 'props'
            },
            property: {
                type: 'Identifier',
                name: 'fill'
            }
        }
    }
    return tpl`
  ${variables.imports};
  
  ${variables.interfaces};
  
  const ${variables.componentName} = (${variables.props}) => (
    ${variables.jsx}
  );
  
  ${variables.exports};
  `
  }
  
  module.exports = template
  