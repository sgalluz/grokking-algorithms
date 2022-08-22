import * as fs from 'fs';
import * as path from 'path';

const SRC_DIR = './src';

const getAllModules = (source) => {
  return fs.readdirSync(source, { withFileTypes: true})
    .filter(dirent => dirent.isDirectory())
    .map(dir => dir.name)
    .map(getModuleByDir)
    .filter(module => !!module);
}

const getModuleByDir = (dir) => fs.readdirSync(`${SRC_DIR}/${dir}`)
      .filter(file => file === 'module.ts')
      .map(file => `${dir}/${file.replace('.ts', '')}`)?.[0];

const executeModule = (test, path) => {
  const getModuleName = path => path.split('/')[0].toUpperCase();

  console.log(`=============== EXECUTING ${getModuleName(path)} MODULE ===============`);
  console.time();
  test.default();
  console.timeEnd();
  console.log(' ');
}

function main(): void {
  getAllModules(SRC_DIR)
    .map(path => import(`./${path}`)
      .then(test => executeModule(test, path))
    );
}

main();
