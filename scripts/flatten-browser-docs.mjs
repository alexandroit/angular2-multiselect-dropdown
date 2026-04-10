import fs from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const rootDir = path.resolve(__dirname, '..');

function flattenFamilyOutput(family) {
  if (!family) {
    throw new Error('Usage: node scripts/flatten-browser-docs.mjs <family>');
  }

  const familyDir = path.join(rootDir, 'docs', family);
  const browserDir = path.join(familyDir, 'browser');

  if (!fs.existsSync(browserDir)) {
    console.log(`No browser/ output found for ${family}; nothing to flatten.`);
    return;
  }

  for (const entry of fs.readdirSync(browserDir)) {
    fs.cpSync(path.join(browserDir, entry), path.join(familyDir, entry), {
      recursive: true,
      force: true
    });
  }

  console.log(`Flattened prerendered docs output for ${family}.`);
}

try {
  flattenFamilyOutput(process.argv[2]);
} catch (error) {
  console.error(error instanceof Error ? error.message : error);
  process.exit(1);
}
