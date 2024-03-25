const { readFile, writeFile } = require('fs/promises');
const path = require('path');
const TypeDoc = require('typedoc');

async function main() {
  const rootReadme = await readFile(
    path.join(__dirname, '../README.base.md'),
    'utf-8',
  );

  const app = await TypeDoc.Application.bootstrapWithPlugins({
    entryPoints: ['lib/main.ts'],
    plugin: ['typedoc-plugin-markdown'],
    readme: 'none',
    githubPages: false,
    hideGenerator: true,
    jsDocCompatibility: true,
    titleLink: undefined,
    exclude: ['**/node_modules/**/*.*'],
  });
  const project = await app.convert();
  if (project) {
    await app.generateDocs(project, path.join(__dirname, './temp'));
    const generateDocs = await readFile(
      path.join(__dirname, './temp', 'README.md'),
      'utf-8',
    );
    const trimStartingWith = '## Table of contents';
    const startIndex = generateDocs.indexOf(trimStartingWith);
    const readme = rootReadme.replace(
      '<!-- DOCS -->',
      generateDocs.slice(startIndex).trim(),
    );
    await writeFile(path.join(__dirname, '../README.md'), readme);
  }
}

main().catch(console.error);
