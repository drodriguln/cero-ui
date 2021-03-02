const path = require('path');

const indexTemplate = (files) => {
  const exportEntries = files.map((file) => {
    const basename = path.basename(file, path.extname(file));
    const exportName = /^\d/.test(basename) ? `Svg${basename}` : basename;
    return `export { default as ${exportName} } from './${basename}';`;
  });
  return `${exportEntries.join('\n')}\n`;
};

const template = (
  { template },
  opts,
  { imports, componentName, props, jsx, exports },
) => {
  return template.ast`
    ${imports}
    const ${componentName} = (${props}) => ${jsx}
    ${exports}
  `;
};

module.exports = {
  typescript: true,
  memo: true,
  indexTemplate: indexTemplate,
  template: template,
};
