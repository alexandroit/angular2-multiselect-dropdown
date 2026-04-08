import fs from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const rootDir = path.resolve(__dirname, '..');
const distDir = path.join(rootDir, 'dist', '@stackline', 'angular-multiselect-dropdown');

function stripSourceMapComment(filePath) {
  if (!fs.existsSync(filePath)) {
    return;
  }

  const content = fs.readFileSync(filePath, 'utf8');
  const next = content.replace(/\n?\/\/# sourceMappingURL=.*?\n?$/m, '\n').replace(/\n?\/\*# sourceMappingURL=.*?\*\/\n?$/m, '\n');

  if (next !== content) {
    fs.writeFileSync(filePath, next);
  }
}

function removeFile(filePath) {
  if (fs.existsSync(filePath)) {
    fs.rmSync(filePath, { force: true });
  }
}

removeFile(path.join(distDir, 'fesm2022', 'revivejs-angular-multiselect-dropdown.mjs.map'));
stripSourceMapComment(path.join(distDir, 'fesm2022', 'revivejs-angular-multiselect-dropdown.mjs'));
stripSourceMapComment(path.join(distDir, 'themes', 'default.theme.css'));
stripSourceMapComment(path.join(distDir, 'themes', 'custom.theme.css'));

console.log('Pruned non-essential published artifacts from dist package.');
